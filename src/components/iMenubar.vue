<template>
  <div class="container_wrapper BlackTheme" :class="`${THEME_STATUS ? 'WhiteTheme' : ''}`">
    <div class="menu">
      <h1>invent app</h1>
      <h3>fill out the form</h3>
      <img src="@/assets/logo.png" alt="">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, illo!</p>
      <p>Lorem ipsum dolor sit amet consectetur</p>
      <div 
        class="btn BlackTheme" 
        :class="`${THEME_STATUS ? 'WhiteTheme' : ''}`" 
        @click="changeTheme"
        > changeTheme
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
export default defineComponent({
  setup() {

    const changeTheme = function () {
      this.$store.dispatch('THEME')
    }
    return {
      changeTheme
    }
  },
  computed: {
    ...mapGetters([
      'THEME_STATUS'
    ])
  },
  props: {}
})
</script>

<style lang="scss">
.menu {
  margin-right: 20px;
  padding: 20px;
}
</style>
