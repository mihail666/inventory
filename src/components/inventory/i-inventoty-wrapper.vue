<template>
  <div class="container" :class="`${is_expTheme ? 'is_expTheme' : ''}`">
    <i-menubar 
      @is_expended_theme="isExpendedTheme" 
      :is_expTheme="is_expTheme"
    />
    <i-inventory 
      :is_expTheme="is_expTheme"
      @is_expended="isExpanded"
    />
  </div>
  <i-sidebar 
    :is_expanded="is_expanded" 
    :is_expTheme="is_expTheme"
  />
</template>

<script>
import ISidebar from './i-sidebar.vue';
import IMenubar from './i-menubar.vue';
import IInventory from './i-inventory.vue';
export default {
  components: {
    ISidebar,
    IMenubar,
    IInventory
  },
  data() {
    return {
      is_expTheme: false,
      is_expanded: true,
    }
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
