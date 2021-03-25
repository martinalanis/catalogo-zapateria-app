<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      dark
    >
      <!-- <template #prepend>
        <v-row justify="center">
          <v-col cols="5" class="my-5">
            <img src="~/assets/logo.webp" alt="" class="img-block">
          </v-col>
        </v-row>
      </template> -->
      <v-list flat>
        <v-list-item
          color="#ffca1d"
          to="/"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
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
      color="#212121"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      categories: [
        {
          // icon: 'mdi-chart-bubble',
          title: 'Caballero',
          to: '/categoria/caballero'
        },
        {
          // icon: 'mdi-chart-bubble',
          title: 'Dama',
          to: '/categoria/dama'
        },
        {
          // icon: 'mdi-chart-bubble',
          title: 'Niño',
          to: '/categoria/niño'
        }
      ],
      title: 'Zapaterías D\' León',
      miniVariant: false
    }
  }
}
</script>
