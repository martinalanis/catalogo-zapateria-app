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
      <v-row class="justify-start">
        <v-col :cols="envType !== 'client' ? 5 : 6" md="3">
          <v-select
            v-model="tipo"
            :items="tipos"
            outlined
            dense
            label="Tipo de Zapato"
            clearable
            background-color="#fafafa"
            hide-details
            color="#Pro"
            @change="updateType"
          />
        </v-col>
        <v-col v-if="envType !== 'client'" cols="7" sm="6" md="3">
          <v-form lazy @submit.prevent="doSearch">
            <v-text-field
              v-model="search"
              label="Codigo"
              background-color="#fafafa"
              hide-details
              clearable
              solo
              dense
              @click:clear="updateType"
            >
              <v-btn
                slot="append"
                icon
                type="submit"
              >
                <v-icon>
                  mdi-magnify
                </v-icon>
              </v-btn>
            </v-text-field>
          </v-form>
        </v-col>
      </v-row>
      <v-row class="mb-6 relative" :class="{ 'overlay-loading': loading }">
        <v-col
          v-for="({ id, codigo, modelo, colores, imagen, numeraciones }, index) in shoes" :key="index"
          cols="12"
          sm="6"
          md="4"
        >
          <nuxt-link :to="`/productos/${id}`">
            <ProductCard
              :codigo="codigo"
              :imagen="imagen"
              :modelo="modelo"
              :colores="colores"
              :numeraciones="numeraciones"
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
      const tipos = await $axios.$get(`/products/${categoria}/types`)
      const headerImage = require(`@/assets/${categoria}.jpg`)
      return {
        shoes: res.data,
        currentPage: res.current_page,
        lastPage: res.last_page,
        total: res.total,
        categoria,
        headerImage,
        tipos
      }
    } catch (err) {
      error({ statusCode: err.response.status, message: err.response.statusText })
    }
  },
  data () {
    return {
      search: '',
      envType: process.env.type,
      tipo: '',
      loading: false
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
      // console.log('fetch shoes', this.shoes)
      try {
        if (this.currentPage < this.lastPage) {
          this.loading = true
          let endPoint = this.tipo
            ? `/products/${this.categoria}/all?page=${this.currentPage + 1}&type=${this.tipo}`
            : `/products/${this.categoria}/all?page=${this.currentPage + 1}`
          if (this.search) {
            endPoint += `&search=${this.search}`
          }
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
    async doSearch () {
      if (this.search) {
        try {
          this.loading = true
          this.tipo = ''
          const endPoint = `/products/${this.categoria}/all?search=${this.search}`
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
    },
    async updateType () {
      try {
        this.loading = true
        const endPoint = this.tipo
          ? `/products/${this.categoria}/all?type=${this.tipo}`
          : `/products/${this.categoria}/all`
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
  background: rgba(#f3f6fb, 0.3);
  z-index: 1;
}
</style>
