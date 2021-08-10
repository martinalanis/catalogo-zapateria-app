<template>
  <v-container class="mb-6">
    <v-row class="pt-2">
      <v-col cols="12">
        <v-btn
          text
          small
          color="#322C79"
          class="text-lowercase"
          @click="$router.back()"
        >
          <v-icon left>mdi-arrow-left</v-icon>
          regresar
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex align-center">
        <h3 class="product-title">{{ codigo }}</h3>
        <v-divider class="divider-primary"></v-divider>
      </v-col>
      <v-col cols="12" sm="6">
        <div class="rounded-lg overflow-hidden relative">
          <img :src="imagen" alt="" class="img-block">
          <div class="info-overlay">
            <div class="numeracion">
              <small>NUM:</small> {{ numeraciones[active].name }}
            </div>
            <div class="price pr-1" :class="{ 'has-offer': precioDescuento }">
              <div v-if="precioDescuento" class="price__offer">
                ${{ precioDescuento }}
              </div>
              <span>${{ precioPublico }}</span><span>${{ precioProveedor }}</span>
            </div>
            <div class="codigo">{{ codigo }}</div>
            <div class="color">{{ colores[activeColor] }}</div>
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="6">
        <!-- <h3 class="px-3 mb-2 d-block d-sm-none">{{ codigo }}</h3> -->
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
                  <td class="pt-1">
                    <template v-if="$auth.loggedIn">
                      <v-chip
                        v-for="({name}, i) in numeraciones" :key="i"
                        label
                        small
                        class="mr-2 mb-1"
                        color="primary"
                        :class="active === i ? 'elevation-3': ''"
                        :outlined="active !== i || false"
                        @click="active = i"
                      >{{ name.toLowerCase() }}</v-chip>
                    </template>
                    <template v-else>
                      <v-chip
                        v-for="({name}, i) in numeraciones" :key="i"
                        label
                        small
                        color="primary"
                        class="mr-2 mb-1"
                        outlined
                      >{{ name.toLowerCase() }}</v-chip>
                    </template>
                  </td>
                </tr>
                <tr>
                  <td class="r_key">Colores:</td>
                  <td class="pt-1">
                    <template v-if="$auth.loggedIn">
                      <v-chip
                        v-for="(color, t) in colores" :key="t"
                        label
                        small
                        class="mr-2 mb-1"
                        color="primary"
                        :class="activeColor === t ? 'elevation-3': ''"
                        :outlined="activeColor !== t || false"
                        @click="activeColor = t"
                      >{{ color.toLowerCase() }}</v-chip>
                    </template>
                    <template v-else>
                      <v-chip
                        v-for="color in colores" :key="color"
                        label
                        outlined
                        small
                        class="mr-2 mb-1"
                      >{{ color.toLowerCase() }}</v-chip>
                    </template>
                  </td>
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
                  <td>{{ categoria.toLowerCase() }}</td>
                </tr>
                <template v-if="!!precioDescuento && $auth.loggedIn">
                  <tr>
                    <td class="r_key">Precio regular:</td>
                    <td>${{ precioPublico }}</td>
                  </tr>
                  <tr>
                    <td class="r_key">Precio mayoreo:</td>
                    <td>${{ precioProveedor }}</td>
                  </tr>
                </template>
              </tbody>
            </template>
          </v-simple-table>
          <v-divider></v-divider>
          <v-row v-if="!!!precioDescuento && $auth.loggedIn" no-gutters>
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
          <v-row v-if="!!precioDescuento && $auth.loggedIn">
            <v-col>
              <div class="offer-price red lighten-1">
                <h4 class="font-weight-regular">
                  <small>PRECIO DESCUENTO</small>
                </h4>
                <h4>
                  $ {{ precioDescuento }}
                </h4>
              </div>
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
        // precioPublico: res.precio_publico,
        // precioProveedor: res.precio_proveedor,
        // precioDescuento: res.precio_descuento,
        categoria: res.categoria,
        breadcrums: [
          {
            text: res.categoria,
            disabled: false,
            exact: true,
            to: { path: `/categorias/${res.categoria}` }
          },
          {
            text: res.codigo,
            disabled: true,
            to: ''
          }
        ]
      }
    } catch (err) {
      error({ statusCode: err.response.status, message: err.response.statusText })
    }
  },
  data () {
    return {
      active: 0,
      activeColor: 0
    }
  },
  computed: {
    precioDescuento () {
      return this.numeraciones[this.active].precio_descuento
    },
    precioPublico () {
      return this.numeraciones[this.active].precio_publico
    },
    precioProveedor () {
      return this.numeraciones[this.active].precio_proveedor
    }
  },
  methods: {
    changeColor (k) {
      console.log(k)
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
.product-title {
  display: inline-block;
  position: relative;
  color: $primary;
  padding-right: 0.7rem;
  padding-left: 0.7rem;
}
.offer-price {
  // background: #f42;
  color: #f6f6f6;
  padding: 0.4rem 1rem;
  line-height: 1;
  h4:last-child {
    font-size: 1.4rem;
    color: lighten($yellow-c, 25%);
  }
}
.info-overlay {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  div {
    $posX: 0.7rem;
    $posY: 0.45rem;
    position: absolute;
    &.numeracion {
      top: $posY;
      left: $posX;
      font-weight: 600;
    }
    &.price {
      top: $posY;
      right: $posX;
      color: $text-color;
      background: rgba(255,255,255,0.4);
      border-radius: $border-radius;
      span {
        padding: 0 6px;
        font-size: 0.8rem;
        &:last-child {
          border-left: 1px solid rgba(0,0,0,0.3);
          // color;
          font-weight: 600;
        }
      }
      &.has-offer {
        span {
          text-decoration: line-through;
        }
      }
      &__offer {
        position: relative;
        // padding-left: 6px;
        text-align: center;
        font-weight: 600;
        color: #FFF;
        background: rgba(#D41D1F, 0.895);
        border-radius: $border-radius;
      }
    }
    &.codigo {
      bottom: $posY;
      left: $posX;
    }
    &.color {
      bottom: $posY;
      right: $posX;
    }
  }
}
</style>
