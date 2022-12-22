<template>
  <div class="inventory">
      <div 
        class="inventory__container container_wrapper borderBlack" 
        :class="`${is_expTheme ? 'borderWhite' : ''}`"
        >
        <div class="inventory_grid">
          <div 
            v-for="item in items" 
            :key="item.id" 
            class="inventory__item menu-toggle-wrap">
            <div class="inventory__item__content menu-toggle" @click="ToggleMenu">
              <img src="@/assets/logo.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup(_, { emit }) {

    const ToggleMenu = function () {
      console.log('меню открыто')
      emit('is_expended')
    }
    return {
      ToggleMenu
    }
  },
  data() {
    return {
      items: 25,
    }
  },
  props: {
    is_expTheme: {
      type: Boolean,
      default: true
    }
  }
})
</script>

<style lang="scss">
@import '@/assets/style/variable.scss';
.inventory {
  width: 100%;
}

.inventory__container {
  display: flex;
}

.inventory_grid {
  display: grid;
  grid-gap: 0px;
  grid-template-columns: repeat(auto-fill, 20%);
  height: 100%;
  width: 100%;
  margin: auto;
  justify-content: center;
}

.inventory__item {
  height: 16vh;
  position: relative;
  list-style: none;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  & img {
    width: 60%;
    background-size: contain;
  }
}

.inventory__item:not(:nth-child(5n)) {
  border-right: $border-int;
}

.inventory__item:not(:nth-last-child(-n)) {
  border-bottom: $border-int ;
}
.inventory__item:nth-child(21),
.inventory__item:nth-child(22),
.inventory__item:nth-child(23),
.inventory__item:nth-child(24),
.inventory__item:nth-child(25) {
  border-bottom: none ;
}
</style>
