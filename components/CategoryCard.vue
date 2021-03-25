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
        <span>
          {{ title }}
        </span>
        <a href="javascript:;" class="category-card__link">
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
              <rect x="6" y="13" width="28" height="1.5"/>
            </g>
            <g>
              <polyline
                points="27 8 34 14 27 20"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </a>
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
    height: calc(100% - 3.2rem);
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
    background: rgba(#111, 0.9);
    padding: 1rem;
    color: #ffca1d;
    font-weight: 400;
    letter-spacing: 0.1rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  &__link {
    svg {
      width: 1.8rem;
    }
    text-decoration: none;
    letter-spacing: 0;
    font-size: 0.85rem;
    color: #f2f2f2;
    display: flex;
    align-items: flex-end;
    transition: all 0.2s ease-out;
    .svg-arrow {
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
}
</style>
