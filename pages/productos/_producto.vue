<template>
  <v-container>
    <v-row class="pt-2">
      <v-col>
        <v-breadcrumbs
          :items="breadcrums"
          class="pa-0 text-uppercase"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-none d-sm-block">
        <h3 class="px-3 mb-2">{{ marca }}</h3>
      </v-col>
      <v-col cols="12" sm="6">
        <div class="rounded-lg overflow-hidden">
          <img :src="`${imgPath}/${imagen}`" alt="" class="img-block">
        </div>
      </v-col>
      <v-col cols="12" sm="6">
        <h3 class="px-3 mb-2 d-block d-sm-none">{{ marca }}</h3>
        <div class="rounded elevation-1 overflow-hidden">
          <v-simple-table>
            <template #default>
              <tbody>
                <tr>
                  <td class="r_key">Modelo:</td>
                  <td>{{ modelo.toLowerCase() }}</td>
                </tr>
                <tr>
                  <td class="r_key">Numeración:</td>
                  <td>{{ numeracion.toLowerCase() }}</td>
                </tr>
                <tr>
                  <td class="r_key">Color:</td>
                  <td>{{ color.toLowerCase() }}</td>
                </tr>
                <tr>
                  <td class="r_key">Material:</td>
                  <td>{{ material.toLowerCase() }}</td>
                </tr>
                <tr>
                  <td class="r_key">Tipo:</td>
                  <td>{{ tipo.toLowerCase() }}</td>
                </tr>
                <tr>
                  <td class="r_key">Categoría:</td>
                  <td>{{ tipoZapato.toLowerCase() }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-divider></v-divider>
          <v-row no-gutters>
            <v-col class="px-3 py-1 white d-flex flex-column justify-space-between">
              <h4 class="font-weight-regular">
                <small>PRECIO REGULAR</small>
              </h4>
              <h4>
                $ {{ precioPublico }}
              </h4>
            </v-col>
            <v-col class="px-3 py-1 grey lighten-2 price-label d-flex flex-column justify-space-between align-end">
              <h4 class="font-weight-regular">
                <small>PRECIO MAYOREO</small>
              </h4>
              <h3>
                $ {{ precioProveedor }}
              </h3>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Producto',
  async asyncData ({ params, $axios, error }) {
    try {
      const { producto } = params
      const res = await $axios.$get(`/products/${producto}`)
      return {
        ...res,
        precioPublico: res.precio_publico,
        precioProveedor: res.precio_proveedor,
        tipoZapato: res.tipo_zapato,
        imgPath: process.env.imgPath,
        breadcrums: [
          {
            text: res.tipo_zapato,
            disabled: false,
            exact: true,
            to: { path: `/categorias/${res.tipo_zapato}` }
          },
          {
            text: res.marca,
            disabled: true,
            to: ''
          }
        ]
      }
    } catch (err) {
      error({ statusCode: err.response.status, message: err.response.statusText })
    }
  }
}
</script>

<style lang="scss" scoped>
.r_key {
  width: 150px!important;
  letter-spacing: 2px;
  font-size: 0.7em!important;
  text-transform: uppercase;
}
tr {
  text-transform: capitalize;
}
</style>
