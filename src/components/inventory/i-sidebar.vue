<template>
 
    <div class="borderBlack container__side container_wrapper"
    :class="`${is_expanded ? 'is-expanded' : ''} ${is_expTheme ? 'borderWhite' : ''}`"
    >
      <aside>
        <div class="logo">
          <img src="@/assets/logo.png" alt="Vue" />
        </div>
        <h3>Menu</h3>
      </aside>
    </div>
  
</template>

<script>
export default {
  props: {
    is_expanded: {
      type: Boolean,
      default: true
    },
    is_expTheme: {
      type: Boolean,
      default: true
    }
    
  }
}
</script>

<style lang="scss">
@import '@/assets/style/variable.scss';
.container__side {
  background: $bgBlack;
  position: absolute;
  width: 25%;
  top: 50px;
  right: -0px;
  height: 80%;
  transition: .5s;
}

aside {
  text-align: center;
  align-items: center;
  transition: 0.9s;
}
.is-expanded {
    right: -2000px;
  }
</style>