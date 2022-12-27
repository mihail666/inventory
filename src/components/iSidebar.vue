<template>
  <div class="iSideBar container_wrapper BlackTheme"
  :class="`${SIDE_STATUS ? 'SideShow' : ''} 
           ${THEME_STATUS ? 'WhiteTheme' : ''}`"
    >
    <aside>
      <div class="logo">
        <img src="@/assets/logo.png" alt="Vue" />
      </div>
      <h3>Menu</h3>
      <div class="side__cotent">
        {{ ITEM.title }}
        {{ ITEM.id }}
      </div>
    </aside>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {},
  computed: {
    ...mapGetters([
      'SIDE_STATUS',
      'THEME_STATUS',
      'ITEM'
     ])
  }
}
</script>

<style lang="scss">
@import '@/assets/style/variable.scss';
.iSideBar {
  background: $bgBlack;
  position: absolute;
  top: 50px;
  right: 0px;
  height: 80vh;
  transition: .5s;
}

aside {
  text-align: center;
  align-items: center;
  transition: 0.9s;
}
.SideShow {
    right: -2000px;
  }
</style>