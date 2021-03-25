<template>
  <v-card
    hover
    height="350"
    rounded="lg"
    class="overflow-hidden"
  >
    <v-card-text class="category-card pa-0">
      <div class="category-card__image">
        <img :src="image" alt="">
      </div>
      <h2 class="category-card__label">
        <span v-html="title"></span>
        <nuxt-link class="category-card__link" :to="to">
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
        </nuxt-link>
      </h2>
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
  // display: grid;
  // grid-template-rows: auto 2rem;
  overflow: hidden;
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
    // background: rgba(#111, 0.9);
    padding: 1rem;
    color: #ffca1d;
    font-weight: 400;
    letter-spacing: 0.1rem;
    text-align: right;
    // display: flex;
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
    // margin-left: 3rem;
    text-decoration: none;
    letter-spacing: 0;
    font-size: 0.85rem;
    color: #f2f2f2;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    transition: all 0.2s ease-out;
    padding-right: 0.6rem;
    .svg-arrow {
      transform: translate3d(0.9rem, -0.6rem, 0);
      rect {
        fill: #f2f2f2;
      }
      polyline {
        fill: none;
        stroke: #f2f2f2;
      }
    }
    &:focus, &:hover {
      color: #37a6ff;
      .svg-arrow {
        rect {
          fill: #37a6ff;
        }
        polyline {
          fill: none;
          stroke: #37a6ff;
        }
      }
    }
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 60%;
    background: rgba(#111, 0.9);
    transform: rotateZ(45deg) scale3d(1.8,1.8,1);
    transform-origin: bottom right;
  }
}
</style>
