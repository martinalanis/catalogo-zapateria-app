<template>
  <v-btn
    small
    fab
    color="#322C79"
    dark
    class="btn_fixed anim"
    :class="{ 'btn_fixed__show': showBtn }"
    :ripple="false"
    @click="goTop"
  >
    <v-icon>mdi-chevron-up</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'GoTopButton',
  data () {
    return {
      showBtn: false,
      fixedNav: false
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      this.fixedNav = window.scrollY > 100 || false
      this.showBtn = window.scrollY > window.innerHeight / 2 || false
    },
    goTop () {
      window.scroll({ top: 0 })
      // if (this.$route.name === 'index') {
      //   this.$router.replace('/').catch(err => err)
      // }
    }
  }
}
</script>

<style lang="scss" scoped>
.btn_fixed {
  position: fixed;
  bottom: 10px;
  right: 10px;
  opacity: 0;
  transition: all 0.8s ease-out;
  z-index: 1;
  &__show {
    opacity: 1;
  }
}
</style>
