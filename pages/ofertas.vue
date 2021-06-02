<template>
  <div>
    <div class="header-image mb-4">
      <img :src="headerImage" alt="">
      <div class="header-image--label">
        <h2 class="header-image--title">
          OFERTAS
        </h2>
        <p class="header-image--subtitle">
          {{ total }} productos
        </p>
      </div>
    </div>
    <v-container>
      <v-row class="justify-center justify-md-start">
        <v-col cols="12" sm="6" md="3">
          <v-select
            v-model="categoria"
            :items="categorias"
            outlined
            dense
            label="Categorias"
            clearable
            background-color="#fafafa"
            hide-details
            color="#322C79"
            @change="updateCategory"
          />
        </v-col>
      </v-row>
      <v-row class="mb-6 relative" :class="{ 'overlay-loading': loading }">
        <v-col
          v-for="({ id, marca, modelo, color, imagen, precio_publico, precio_proveedor, precio_descuento }, index) in shoes" :key="index"
          cols="12"
          sm="6"
          md="4"
        >
          <nuxt-link :to="`/productos/${id}`">
            <ProductCard
              :marca="marca"
              :imagen="imagen"
              :modelo="modelo"
              :color="color"
              :precio-publico="precio_publico"
              :precio-proveedor="precio_proveedor"
              :precio-descuento="precio_descuento"
            />
          </nuxt-link>
        </v-col>
      </v-row>
      <div v-if="loading" class="text-center mb-4">
        <v-progress-circular
          width="1"
          size="25"
          color="#322C79"
          indeterminate
        ></v-progress-circular>
      </div>
    </v-container>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard'
export default {
  name: 'Offers',
  components: {
    ProductCard
  },
  async asyncData ({ $axios, error }) {
    // comment
    try {
      const res = await $axios.$get('/products/offers')
      const categorias = await $axios.$get('/products/offers/categories')
      const headerImage = require('@/assets/men_shoe-3.jpg')
      return {
        shoes: res.data,
        currentPage: res.current_page,
        lastPage: res.last_page,
        total: res.total,
        headerImage,
        loading: false,
        categorias,
        categoria: ''
      }
    } catch (err) {
      error({ statusCode: err.response.status, message: err.response.statusText })
    }
  },
  mounted () {
    window.onscroll = () => {
      const bottomOfWindow = Math.ceil(document.documentElement.scrollTop + window.innerHeight) >= document.documentElement.offsetHeight
      if (bottomOfWindow && !this.loading) {
        this.fetch()
      }
    }
  },
  methods: {
    async fetch () {
      try {
        if (this.currentPage < this.lastPage) {
          this.loading = true
          const endPoint = this.categoria
            ? `/products/offers?page=${this.currentPage + 1}&category=${this.categoria}`
            : `/products/offers?page=${this.currentPage + 1}`
          const res = await this.$axios.$get(endPoint)
          this.currentPage = res.current_page
          this.shoes = [...this.shoes, ...res.data]
        }
      } catch (err) {
        console.log(err)
      } finally {
        this.loading = false
      }
    },
    async updateCategory () {
      try {
        this.loading = true
        const endPoint = this.categoria
          ? `/products/offers?category=${this.categoria}`
          : '/products/offers'
        const res = await this.$axios.$get(endPoint)
        this.currentPage = res.current_page
        this.lastPage = res.last_page
        this.total = res.total
        this.shoes = res.data
      } catch (err) {
        console.log(err)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.overlay-loading::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(#f3f6fb, 0.5);
  z-index: 1;
}
</style>
