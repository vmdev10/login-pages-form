<template>
  <div class="home">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
}
</style>
