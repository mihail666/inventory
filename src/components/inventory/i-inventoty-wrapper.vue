<template>
  <div class="container"
    :class="`${is_expTheme ? 'is_expTheme' : ''}`">
    <i-menubar
    @is_expended_theme="isExpendedTheme"
    />
    <div class="inventory">
      <div class="inventory__container border">
        <div class="inventory_grid">
          <div class="inventory__item menu-toggle-wrap">
            <div class="inventory__item__content menu-toggle" @click="ToggleMenu">
              <img class="inventory__item__img" src="@/assets/logo.png" alt="">
            </div>
          </div>
          <div class="inventory__item menu-toggle-wrap">
            <div class="inventory__item__content menu-toggle" @click="ToggleMenu">
              <img class="inventory__item__img" src="@/assets/logo.png" alt="">
            </div>
          </div>
          <div class="inventory__item menu-toggle-wrap">
            <div class="inventory__item__content menu-toggle" @click="ToggleMenu">
              <img class="inventory__item__img" src="@/assets/logo.png" alt="">
            </div>
          </div>
          <div class="inventory__item menu-toggle-wrap">
            <div class="inventory__item__content menu-toggle" @click="ToggleMenu">
              <img class="inventory__item__img" src="@/assets/logo.png" alt="">
            </div>
          </div>

          <div class="inventory__item menu-toggle-wrap">
            <div class="inventory__item__content menu-toggle" @click="ToggleMenu">
              <img class="inventory__item__img" src="@/assets/logo.png" alt="">
            </div>
          </div>
          <div class="inventory__item menu-toggle-wrap">
            <div class="inventory__item__content menu-toggle" @click="ToggleMenu">
              <img class="inventory__item__img" src="@/assets/logo.png" alt="">
            </div>
          </div>

          <div class="inventory__item menu-toggle-wrap">
            <div class="inventory__item__content menu-toggle" @click="ToggleMenu">
              <img class="inventory__item__img" src="@/assets/logo.png" alt="">
            </div>
          </div>
          <div class="inventory__item menu-toggle-wrap">
            <div class="inventory__item__content menu-toggle" @click="ToggleMenu">
              <img class="inventory__item__img" src="@/assets/logo.png" alt="">
            </div>
          </div>

          <div class="inventory__item menu-toggle-wrap">
            <div class="inventory__item__content menu-toggle" @click="ToggleMenu">
              <img class="inventory__item__img" src="@/assets/logo.png" alt="">
            </div>
          </div>
          <div class="inventory__item menu-toggle-wrap">
            <div class="inventory__item__content menu-toggle" @click="ToggleMenu">
              <img class="inventory__item__img" src="@/assets/logo.png" alt="">
            </div>
          </div>
          <div class="inventory__item menu-toggle-wrap">
            <div class="inventory__item__content menu-toggle" @click="ToggleMenu">
              <img class="inventory__item__img" src="@/assets/logo.png" alt="">
            </div>
          </div>
          <div class="inventory__item menu-toggle-wrap">
            <div class="inventory__item__content menu-toggle" @click="ToggleMenu">
              <img class="inventory__item__img" src="@/assets/logo.png" alt="">
            </div>
          </div>

          <div class="inventory__item menu-toggle-wrap">
            <div class="inventory__item__content menu-toggle" @click="ToggleMenu">
              <img class="inventory__item__img" src="@/assets/logo.png" alt="">
            </div>
          </div>
          <div class="inventory__item menu-toggle-wrap">
            <div class="inventory__item__content menu-toggle" @click="ToggleMenu">
              <img class="inventory__item__img" src="@/assets/logo.png" alt="">
            </div>
          </div>
          <div class="inventory__item menu-toggle-wrap">
            <div class="inventory__item__content menu-toggle" @click="ToggleMenu">
              <img class="inventory__item__img" src="@/assets/logo.png" alt="">
            </div>
          </div>
          <div class="inventory__item menu-toggle-wrap">
            <div class="inventory__item__content menu-toggle" @click="ToggleMenu">
              <img class="inventory__item__img" src="@/assets/logo.png" alt="">
            </div>
          </div>
          <div class="inventory__item menu-toggle-wrap">
            <div class="inventory__item__content menu-toggle" @click="ToggleMenu">
              <img class="inventory__item__img" src="@/assets/logo.png" alt="">
            </div>
          </div>
          <div class="inventory__item menu-toggle-wrap">
            <div class="inventory__item__content menu-toggle" @click="ToggleMenu">
              <img class="inventory__item__img" src="@/assets/logo.png" alt="">
            </div>
          </div>

          <div class="inventory__item menu-toggle-wrap">
            <div class="inventory__item__content menu-toggle" @click="ToggleMenu">
              <img class="inventory__item__img" src="@/assets/logo.png" alt="">
            </div>
          </div>
          <div class="inventory__item menu-toggle-wrap">
            <div class="inventory__item__content menu-toggle" @click="ToggleMenu">
              <img class="inventory__item__img" src="@/assets/logo.png" alt="">
            </div>
          </div>
          <div class="inventory__item menu-toggle-wrap">
            <div class="inventory__item__content menu-toggle" @click="ToggleMenu">
              <img class="inventory__item__img" src="@/assets/logo.png" alt="">
            </div>
          </div>

          <div class="inventory__item menu-toggle-wrap">
            <div class="inventory__item__content menu-toggle" @click="ToggleMenu">
              <img class="inventory__item__img" src="@/assets/logo.png" alt="">
            </div>
          </div>
          <div class="inventory__item menu-toggle-wrap">
            <div class="inventory__item__content menu-toggle" @click="ToggleMenu">
              <img class="inventory__item__img" src="@/assets/logo.png" alt="">
            </div>
          </div>

          <div class="inventory__item menu-toggle-wrap">
            <div class="inventory__item__content menu-toggle" @click="ToggleMenu">
              <img class="inventory__item__img" src="@/assets/logo.png" alt="">
            </div>
          </div>
          <div class="inventory__item menu-toggle-wrap">
            <div class="inventory__item__content menu-toggle" @click="ToggleMenu">
              <img class="inventory__item__img" src="@/assets/logo.png" alt="">
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
  <i-sidebar 
    :is_expanded="is_expanded"
  />
</template>

<script>
import ISidebar from './i-sidebar.vue'
import IMenubar from './i-menubar.vue';
export default {
  components: {
    ISidebar,
    IMenubar
  },
  data() {
    return {
      is_expTheme: false,
      is_expanded: true,
    }
  },
  methods: {
    ToggleMenu() {
      this.is_expanded = !this.is_expanded;
      console.log(this.is_expanded)
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

.description-item {
  width: 20%;
  margin-right: 20px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
}

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

  &__img {
    width: 70%;
    background-size: contain;
  }
}
.inventory__item:not(:nth-child(5n)) {
  border-right: $border-int;
}
.inventory__item:not(:nth-last-child(-n)) {
  border-bottom: $border-int ;
}

</style>