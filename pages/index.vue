<template>
  <v-container>
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
  name: 'IndexPage',
  components: {
    CategoryCard
  },
  data () {
    return {
      categories: [
        {
          image: require('@/assets/men_shoe-3.jpg'),
          title: '<small>CABALLERO</small>',
          to: '/categorias/caballero'
        },
        {
          image: require('@/assets/women_shoe-2.jpg'),
          title: 'DAMA',
          to: '/categorias/dama'
        },
        {
          image: require('@/assets/child_shoe.jpg'),
          title: 'NIÑO',
          to: '/categorias/niño'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
