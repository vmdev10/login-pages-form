<template>
  <div class="presentation">
    <img class="logo" src="../../assets/logo.png" alt="logo" />

    <router-link class="action" to="/login" tag="button"
      ><a>Login</a></router-link
    >
    <router-link class="action" to="/register" tag="button"
      ><a>Registre-se</a></router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.presentation {
  background-color: #d90429;
  width: 100%;
  height: 100%;
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  /* justify-content: center; */
}

.logo {
  width: 20rem;
}

.action {
  width: 100%;
  padding: 0.85rem;
  border: none;
  border-radius: 36px;
}

.action a {
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
  color: #d90429;

  text-decoration: none;
}
</style>
