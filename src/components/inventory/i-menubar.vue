<template>
   <div class="container_wrapper border">
      <h1>invent app</h1>
      <h3>fill out the form</h3>
      <img src="@/assets/logo.png" alt="">
      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, illo!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
      <p>Lorem ipsum dolor sit amet consectetur</p>
      <div class="btn border" @click="changeTheme" >
        сменить тему
      </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup(_, { emit }) {

    const changeTheme = function() {
      console.log('сменить тему')
      emit('is_expended_theme')
    }
    return {
      changeTheme
    }
  }
}) 
// {
//   setup() {

//   }
//   data () {
//     return {
//       is_eTheme: true
//     }
//   },
//   methods: {
//     changeTheme() {
//       console.log('сменить тему')
//       this.is_eTheme = !this.is_eTheme
//       this.$emit("is_expended_theme", this.is_eTheme)
//     }
//   }
// }
</script>

<style lang="scss">
.description-item {
  width: 20%;
  margin-right: 20px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
