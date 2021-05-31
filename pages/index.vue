<template>
  <v-container>
    <template v-if="hasOffers">
      <v-row class="my-4">
        <v-col
          cols="12"
        >
          <category-card
            :image="require('@/assets/men_shoe-3.jpg')"
            to="/ofertas"
            offer
          />
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="auto">
          <h4 class="grey--text text--darken-3">CATEGORÍAS</h4>
        </v-col>
        <v-col>
          <v-divider></v-divider>
        </v-col>
      </v-row>
    </template>
    <v-row class="my-4">
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
      <!-- <v-col>
        {{ $auth.loggedIn }}
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
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
  },
  computed: {
    ...mapGetters(['hasOffers'])
  }
}
</script>

<style lang="scss" scoped>

</style>
