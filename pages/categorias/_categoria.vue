<template>
  <div>
    Categoria
    <ul>
      <li v-for="({ marca, modelo }) in shoes" :key="modelo">
        {{ marca }}
      </li>
    </ul>
    <v-btn @click="fetch">next</v-btn>
  </div>
</template>

<script>
export default {
  name: 'Category',
  async asyncData ({ params, $axios, error }) {
    try {
      const shoes = await $axios.$get(`/products/${params.categoria}/all`).then(res => res.data)
      return { shoes }
    } catch (err) {
      // console.log(err.response)
      error({ statusCode: err.response.status, message: err.response.statusText })
    }
  },
  data () {
    return {
      temp: false
    }
  },
  methods: {
    async fetch () {
      console.log('fetch shoes', this.shoes)
      this.shoes = await this.$axios.$get('/products/caballero/all?page=2&paginate=10').then(res => res.data)
    }
  }
  // async fetch () {
  //   // console.log(this.$config)
  //   console.log('URL api:', process.env.urlApi)
  //   this.shoes = await this.$axios.$get('/products/caballero/all').then(res => res.data)
  // }
}
</script>

<style lang="scss" scoped>

</style>
