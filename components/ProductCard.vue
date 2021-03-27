<template>
  <div class="product elevation-1">
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
  </div>
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
  width: 100%;
  height: 250px;
  border-radius: $border-radius;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
  &__label {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  &__color {
    margin-bottom: 0;
    font-weight: 600;
    font-size: 0.75rem;
    text-transform: capitalize;
    background: rgba(255,255,255,0.4);
    padding: 0.2rem 0.4rem;
    border-radius: $border-radius;
    color: $primary;
  }
}
</style>
