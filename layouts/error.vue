<template>
  <!-- <v-app>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </v-app> -->
  <div class="text-center">
    <v-row>
      <v-col>
        <header class="header-logo elevation-2 mt-6">
          <img src="~/assets/logo.webp" alt="Zapaterias de León">
        </header>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2 class="headline mb-6">Página no encontrada</h2>
        <v-btn
          to="/"
          tile
          color="#212121"
          dark
          class="text-lowercase"
        >
          ir al Inicio
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  layout: 'errorPage',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
