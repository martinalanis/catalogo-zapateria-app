<template>
  <div>
    <div class="header-image mb-4">
      <img :src="headerImage" alt="">
      <div class="header-image--label">
        <h2 class="header-image--title">
          {{ categoria }}
        </h2>
        <p class="header-image--subtitle">
          {{ total }} productos
        </p>
      </div>
    </div>
    <v-container>
      <v-row class="mb-6">
        <v-col
          v-for="({ id, marca, modelo, color, imagen, precio_publico, precio_proveedor }, index) in shoes" :key="index"
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
  name: 'Category',
  components: {
    ProductCard
  },
  async asyncData ({ params, $axios, error }) {
    try {
      const { categoria } = params
      const res = await $axios.$get(`/products/${categoria}/all`)
      const headerImage = categoria === 'dama'
        ? require('@/assets/women_shoe.jpg')
        : categoria === 'caballero'
          ? require('@/assets/men_shoe.jpg')
          : require('@/assets/child_shoe.jpg')
      return {
        shoes: res.data,
        currentPage: res.current_page,
        lastPage: res.last_page,
        total: res.total,
        categoria,
        headerImage,
        loading: false
      }
    } catch (err) {
      // console.log(err.response)
      error({ statusCode: err.response.status, message: err.response.statusText })
    }
  },
  mounted () {
    window.onscroll = () => {
      const bottomOfWindow = Math.ceil(document.documentElement.scrollTop + window.innerHeight) >= document.documentElement.offsetHeight
      // console.log('handle scroll')
      // console.log()
      // console.log(document.documentElement.offsetHeight)
      if (bottomOfWindow && !this.loading) {
        this.fetch()
      }
    }
  },
  methods: {
    async fetch () {
      // console.log('fetch shoes', this.shoes)
      try {
        if (this.currentPage < this.lastPage) {
          this.loading = true
          const res = await this.$axios.$get(`/products/${this.categoria}/all?page=${this.currentPage + 1}`)
          this.currentPage = res.current_page
          console.log(res.data)
          this.shoes = [...this.shoes, ...res.data]
        }
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
</style>
