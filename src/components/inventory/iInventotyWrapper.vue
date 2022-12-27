<template>
  <div class="container" :class="`${THEME_STATUS ? 'containerTheme' : ''}`">
    <i-menubar/>
    <i-inventory-container/>
    <i-sidebar/>
  </div>
</template>

<script>
import ISidebar from '@/components/iSidebar.vue';
import IMenubar from '@/components/iMenubar.vue';
import IInventoryContainer from '@/components/inventory/iInventoryContainer.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    ISidebar,
    IMenubar,
    IInventoryContainer
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'THEME_STATUS'
    ])
  },
  methods: {
    isExpanded() {
      console.log('sidebar')
      this.is_expanded = !this.is_expanded;
    },
    isExpendedTheme() {
      console.log('parent')
      this.is_expTheme = !this.is_expTheme
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/style/variable.scss';

</style>
