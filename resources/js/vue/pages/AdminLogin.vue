<template>
  <form
    @submit.prevent="submitLoginForm()"
    class="form-login mt-5 mx-auto"
    style="max-width: 500px"
  >
    <div class="mb-3">
      <label for="inputEmail" class="form-label">Логин</label>
      <input
        v-model="email"
        type="text"
        class="form-control"
        name="email"
        id="inputEmail"
      >
    </div>
    <div class="mb-3">
      <label for="inputPassword" class="form-label">Пароль</label>
      <input
        v-model="password"
        type="password"
        class="form-control"
        name="password"
        id="inputPassword"
      >
    </div>
    <button type="submit" class="btn btn-primary">Войти</button>
  </form>
</template>

<script setup>
  import {ref} from 'vue';
  import { useStore } from 'vuex'

  const store = useStore();
  const email = ref('');
  const password = ref('');

  const submitLoginForm = () => {
    store.dispatch('login',{
      email: email.value,
      password: password.value
    })
      .then((response) => {
        console.log('zaebis');
      })
      .catch((err) => {
        console.log(err)
      })
  }

</script>
