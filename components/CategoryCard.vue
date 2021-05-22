<template>
  <v-card
    hover
    height="350"
    rounded="lg"
    :to="to"
  >
    <v-card-text class="category-card pa-0" :class="{ 'offer': offer }">
      <div class="category-card__image">
        <img :src="image" alt="">
      </div>
      <h2 v-if="!offer" class="category-card__label">
        <span v-html="title"></span>
        <div class="category-card__link">
          <span>
            ver más
          </span>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px" y="0px"
            viewBox="0 0 40 28"
            style="enable-background:new 0 0 40 28;"
            xml:space="preserve"
            class="svg-arrow ml-1"
          >
            <g>
              <rect x="0" y="13" width="33" height="1.5"/>
            </g>
            <g>
              <polyline
                points="27 8 34 14 27 20"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </div>
      </h2>
      <div
        v-else
        class="offer-label"
      >
        <p class="mb-0">EN OFERTA</p>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'CategoryCard',
  props: {
    image: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    },
    offer: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.category-card {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  &__image {
    // height: calc(100% - 3.2rem);
    height: 100%;
    width: 100%;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: bottom;
    }
  }
  &__label {
    display: block;
    padding: 1rem;
    color: $yellow-c;
    font-weight: 400;
    letter-spacing: 0.1rem;
    text-align: right;
    justify-content: space-between;
    align-items: flex-end;
    position: absolute;
    top: 0.8rem;
    right: 0.5rem;
  }
  &__link {
    position: relative;
    svg {
      width: 1.8rem;
    }
    text-decoration: none;
    letter-spacing: 0;
    font-size: 0.85rem;
    color: $white-text;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    transition: all 0.2s ease-out;
    padding-right: 0.6rem;
    .svg-arrow {
      transform: translate3d(0.9rem, -0.6rem, 0);
      rect {
        fill: $white-text;
      }
      polyline {
        fill: none;
        stroke: $white-text;
      }
    }
    &:focus, &:hover {
      color: $blue-c;
      .svg-arrow {
        rect {
          fill: $blue-c;
        }
        polyline {
          fill: none;
          stroke: $blue-c;
        }
      }
    }
  }
  .offer-label {
    position: absolute;
    display: flex;
    justify-items: center;
    align-items: center;
    // justify-content: center;
    top: 0.5rem;
    left: 0;
    font-size: 1.2rem;
    font-weight: 400;
    font-family: 'Roboto Condensed', sans-serif;
    // width: 100%;
    // height: 3rem;
    padding: 0.5rem 1rem;
    color: #f2f2f2;
    background: rgba(#D41D1F, 0.895);
    border-radius: 0 6px 6px 0;
  }
  &:not(.offer) {
    overflow: hidden;
  }
  &:not(.offer)::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    height: 60%;
    background: $primary-opacity;
    transform: rotateZ(45deg) scale3d(1.8,1.8,1);
    transform-origin: bottom right;
  }
}
</style>
