<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      dark
      temporary
      color="#060030"
    >
      <template #prepend>
        <v-row justify="center">
          <v-col class="my-5">
            <header class="header-logo elevation-2 mt-4">
              <img src="~/assets/logo.webp" alt="Zapaterias de León">
            </header>
          </v-col>
        </v-row>
      </template>
      <v-list flat>
        <v-list-item
          color="#ffca1d"
          to="/"
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title>
              Inicio
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-subheader class="font-weight-light">Categorías</v-subheader>
        <v-divider></v-divider>
        <v-list-item-group
          color="#ffca1d"
        >
          <v-list-item
            v-if="hasOffers"
            to="/ofertas"
            router
            exact
          >
            <v-list-item-content>
              <v-list-item-title>
                Ofertas
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            v-for="(item, i) in categories"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <template v-if="$auth.loggedIn" #append>
        <v-row justify="center">
          <v-col>
            <v-btn
              dark
              depressed
              color="purple darken-4"
              block
              tile
              large
              @click="$auth.logout()"
            >
              Salir
              <v-icon right>mdi-logout</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </template>
    </v-navigation-drawer>
    <v-app-bar
      fixed
      app
      elevation="1"
      color="#322C79"
      dark
    >
      <nuxt-link to="/" class="app-bar-logo">
        <img src="~/assets/logo.webp" alt="Zapaterias de León" class="img-block">
      </nuxt-link>
      <v-spacer/>
      <v-toolbar-title>
        <h4 class="title">
          <small>
            ZAPATERÍAS D' LEÓN
          </small>
        </h4>
      </v-toolbar-title>
      <v-spacer/>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
    <GoTopButton/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GoTopButton from '../../components/GoTopButton'
export default {
  name: 'Header',
  components: {
    GoTopButton
  },
  data () {
    return {
      drawer: false,
      categories: [
        {
          title: 'Caballero',
          to: '/categorias/caballero'
        },
        {
          title: 'Dama',
          to: '/categorias/dama'
        },
        {
          title: 'Niño',
          to: '/categorias/nino'
        },
        {
          title: 'Niña',
          to: '/categorias/nina'
        },
        {
          title: 'Joven',
          to: '/categorias/joven'
        }
      ],
      miniVariant: false
    }
  },
  computed: {
    ...mapGetters(['hasOffers'])
  }
  // async created () {
  //   try {
  //     const count = await this.$axios.$get('/products/offers/count')
  //     if (count) this.$store.commit('setHasOffers', count)
  //   } catch (err) {
  //     this.$error({ statusCode: err.response.status, message: err.response.statusText })
  //   }
  // }
}
</script>
