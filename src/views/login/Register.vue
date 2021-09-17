<template>
  <div class="register">
    <h1 class="title">Register</h1>

    <form>
      <div class="full-name">
        <div>
          <label for="">First Name:</label>
          <input type="text" name="firstName" placeholder="Ana" />
        </div>

        <div>
          <label for="lastName">Last Name:</label>
          <input type="text" name="lastName" placeholder="Moura" />
        </div>
      </div>

      <!-- <div class="country">
        <label for="country">Country:</label>
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this  select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div> -->

      <div class="email">
        <label for="email">E-mail:</label>
        <input type="email" name="email" placeholder="mouraanav@gmail.com" />
      </div>

      <div class="password">
        <label for="">Password:</label>
        <input type="password" name="password" placeholder="********" />
      </div>

      <div class="terms">
        <input type="checkbox" name="" id="" />
        <label for=""
          >Ao clicar em Criar conta, eu concordo que li e aceito os
          <router-link to="#" class="links">Termos de uso</router-link> e a
          <router-link to="#" class="links">Política de privacidade</router-link
          >.
        </label>
      </div>

      <button class="action">Register</button>
    </form>
  </div>
</template>

<style scoped>
.register {
  background-color: #fff;
  width: 100%;
  max-width: 24rem;
  min-height: 36rem;
  margin: 1.5rem auto;
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.title {
  text-align: start;
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 700;
  color: #d90429;
}

.full-name {
  display: flex;
  justify-content: space-between;
}

.full-name div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.full-name div,
.country,
.email,
.password {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.full-name div:first-child {
  margin-right: 0.5rem;
}

label,
[selected] {
  padding: 0.5rem 0;
  font-size: 1rem;
  line-height: 1.75rem;
  text-transform: uppercase;
  font-weight: 700;
}

input {
  width: 100%;
  background: rgba(157, 153, 173, 0.2);
  line-height: 2.75rem;
  padding-left: 1rem;
  border: none;
  border-radius: 36px;
}

input:focus {
  outline: none;
}

input::placeholder {
  color: #9d99ad;
  font-size: 1rem;
  font-weight: 500;
}

.terms {
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.terms label {
  flex-grow: 1;
  font-size: 0.75rem;
  line-height: 0.93755rem;
  font-weight: 400;
  text-transform: none;
  text-align: left;
}

.terms input {
  width: 4rem;
}

.links {
  color: #d90429;
}

.action {
  width: 100%;
  background-color: #d90429;
  color: #fff;
  line-height: 2.75rem;
  padding-left: 1rem;
  border: none;
  border-radius: 36px;

  font-size: 1.125rem;
  font-weight: 600;
  text-align: center;
}
</style>
