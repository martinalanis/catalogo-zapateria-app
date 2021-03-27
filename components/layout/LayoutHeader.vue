<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      dark
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
            v-for="(item, i) in categories"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <!-- <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action> -->
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
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
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      drawer: false,
      categories: [
        {
          // icon: 'mdi-chart-bubble',
          title: 'Caballero',
          to: '/categorias/caballero'
        },
        {
          // icon: 'mdi-chart-bubble',
          title: 'Dama',
          to: '/categorias/dama'
        },
        {
          // icon: 'mdi-chart-bubble',
          title: 'Niño',
          to: '/categorias/niño'
        }
      ],
      // title: 'Zapaterías D\' León',
      miniVariant: false
    }
  }
}
</script>
