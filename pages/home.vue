<template>
  <v-container class="h-100 d-flex align-center flex-column">
    <v-row justify="center" align="center" class="my-4">
      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <category-card
          :image="require('@/assets/men_shoe-3.jpg')"
          to="/ofertas"
          type="offer"
        />
      </v-col>
    </v-row>
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
          image: require('@/assets/nino.jpg'),
          title: 'NIÑO',
          to: '/categorias/nino'
        },
        {
          image: require('@/assets/nina.jpg'),
          title: 'NIÑA',
          to: '/categorias/nina'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
