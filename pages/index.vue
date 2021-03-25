<template>
  <div>
    <v-row>
      <v-col>
        <header class="header-logo elevation-2 mt-6">
          <img src="~/assets/logo.webp" alt="Zapaterias de León">
        </header>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="mb-6">
      <v-col
        v-for="({ image, title, to }, index) in categories" :key="index"
        cols="12"
        sm="8"
        md="6"
      >
        <category-card
          :image="image"
          :title="title"
          :to="to"
        />
      </v-col>
    </v-row>
  </div>
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
          title: 'CABALLERO',
          to: ''
        },
        {
          image: require('@/assets/women_shoe-2.jpg'),
          title: 'DAMA',
          to: ''
        },
        {
          image: require('@/assets/child_shoe.jpg'),
          title: 'NIÑO',
          to: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
