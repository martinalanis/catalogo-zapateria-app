<template>
  <v-card class="product overflow-hidden" rounded="lg" hover>
    <v-card-text class="product__inner">
      <div v-if="$auth.loggedIn" class="product__prices pr-1" :class="{ 'has-offer': precioDescuento }">
        <span>${{ precioPublico }}</span><span>${{ precioProveedor }}</span>
      </div>
      <div v-if="precioDescuento" class="product__offer">
        <span v-if="$auth.loggedIn">${{ precioDescuento }}</span>
        <span v-else>EN OFERTA</span>
      </div>
      <img :src="`${imgPath}/${imagen}`" alt="">
      <div class="product__label pa-3">
        <div>
          <p class="mb-0">
            {{ marca }}
          </p>
          <p class="mb-0">
            {{ modelo }}
          </p>
        </div>
        <div>
          <p class="product__color">
            {{ color.toLowerCase() }}
          </p>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    imagen: {
      type: String,
      default: ''
    },
    marca: {
      type: String,
      default: ''
    },
    modelo: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    precioPublico: {
      type: String,
      default: ''
    },
    precioProveedor: {
      type: String,
      default: ''
    },
    precioDescuento: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      imgPath: process.env.imgPath
    }
  }
}
</script>

<style lang="scss" scoped>
.product {
  position: relative;
  // width: 100%;
  height: 250px;
  // border-radius: $border-radius;
  // overflow: hidden;
  &__inner {
    padding: 0;
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
  &__prices {
    position: absolute;
    top: 6px;
    right: 6px;
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
      // opacity: 0.6;
      span {
        // color: #848788;
        text-decoration: line-through;
      }
    }
  }
  &__offer {
    position: absolute;
    top: 6px;
    left: 6px;
    color: $text-color;
    background: rgba(#D41D1F, 0.895);
    border-radius: $border-radius;
    span {
      padding: 6px;
      font-size: 1.1rem;
      color: #f6f6f6;
    }
  }
  &__label {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: absolute;
    bottom: 0;
    left: 0;
    color: $text-color;
  }
  &__color {
    margin-bottom: 0;
    font-weight: 600;
    font-size: 0.75rem;
    text-transform: capitalize;
    // background: rgba(255,255,255,0.4);
    padding: 0.2rem 0.4rem;
    border-radius: $border-radius;
    color: $primary;
  }
}
</style>
