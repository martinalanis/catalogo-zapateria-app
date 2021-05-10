<template>
  <v-container class="h-100 d-flex align-center">
    <v-row justify="center" align="center" class="my-4">
      <v-col
        v-for="({ image, title, to }, index) in categories" :key="index"
        cols="12"
        sm="6"
        md="4"
      >
        <category-card
          :image="image"
          :title="title"
          :to="to"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CategoryCard from '../components/CategoryCard'
export default {
  name: 'HomePage',
  components: {
    CategoryCard
  },
  data () {
    return {
      categories: [
        {
          image: require('@/assets/caballero.jpg'),
          title: '<small>CABALLERO</small>',
          to: '/categorias/caballero'
        },
        {
          image: require('@/assets/dama.jpg'),
          title: 'DAMA',
          to: '/categorias/dama'
        },
        {
          image: require('@/assets/joven.jpg'),
          title: '<small>JOVEN</small>',
          to: '/categorias/joven'
        },
        {
          image: require('@/assets/niño.jpg'),
          title: 'NIÑO',
          to: '/categorias/niño'
        },
        {
          image: require('@/assets/niña.jpg'),
          title: 'NIÑA',
          to: '/categorias/niña'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
