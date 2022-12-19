<template>
  <div class="container">
    <div class="border container__side"
    :class="`${is_expanded ? 'is-expanded' : ''}`"
    >
      <aside>
        <div class="logo">
          <img src="@/assets/logo.png" alt="Vue" />
        </div>
        <h3>Menu</h3>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    is_expanded: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.container__side {
  position: absolute;
  width: 25%;
  top: 20px;
  right: -0px;
  height: 80vh;
  transition: 1s;
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