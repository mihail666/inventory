<template>
  <div class="iInventoryContainer">
    <div 
      class="inventory__container BlackTheme" 
      :class="`${THEME_STATUS ? 'WhiteTheme' : ''}`">
      <i-inventory-item />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import IInventoryItem from '@/components/inventory/iInventoryItem.vue'

export default defineComponent({
  components: {
    IInventoryItem

  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'THEME_STATUS'
    ])
  },
  methods: {}
})
</script>

<style lang="scss">
@import '@/assets/style/variable.scss';

.iInventoryContainer {
  width: 50%;
  
}

.inventory__container {
  display: flex;
}



</style>