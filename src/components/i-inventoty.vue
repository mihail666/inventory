<template>
  <div class="container">
    <div class="description-item border">
      <h1>description</h1>
      <img src="../assets/logo.png" alt="">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, illo!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
      <p>Lorem ipsum dolor sit amet consectetur</p>
    </div>
    <div class="container__inventory border">
      <tr>1</tr>
      <tr>2</tr>
      <tr>3</tr>
      <tr>4</tr>
      <tr>5</tr>
      <tr>6</tr>
      <tr>7</tr>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.container {
  display: flex;

}

.description-item {
  width: 20%;
  height: 70vh;
  margin-right: 20px;
  padding: 20px;
}

.container__inventory {
  padding: 20px;
  width: 80%;
  height: 70vh;
  display: flex;
}

.border {
  border: 3px solid #000;
  border-radius: 20px;
  background: rgb(56, 56, 56);
}
</style>