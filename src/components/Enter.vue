<template>
  <div>
    <form @submit.prevent="">
      <div class="text-center logo">
        <img src="/img/icon/bf7iePJZpjI.jpg" alt="" width="310" height="100" />
        <h3 class="mb-5">Пожалуйста, войдите</h3>
      </div>
      <div class="form-floating mb-4">
        <input
          type="email"
          class="form-control"
          placeholder="name@example.com"
          v-model="user.email"
        />
        <label for="floatingInput">Введите почту</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          v-model="user.password"
        />
        <label for="floatingPassword">Введите пароль</label>
      </div>
      <button class="w-50 btn btn-lg me-3" @click="getData(user)">
        Войти
      </button>
      <router-link to="/remember" tag="a">Забыли пароль?</router-link>
      <transition name="show">
        <div v-if="state.checkStatus == 200">
          <transition name="show">
            <div class="alert alert-success" v-if="state.isReg">
              Вы успешно авторизовались!
            </div>
          </transition>
          <transition name="show">
            <div class="alert alert-warning" v-if="state.isReg == false">
              Такой email не зарегистрирован!
            </div>
          </transition>
          <transition name="show">
            <div class="alert alert-warning" v-if="state.passwordErr">
              Неверный пароль!
            </div>
          </transition>
        </div>
      </transition>
      <transition name="show">
        <div v-if="state.checkStatus > 300">
          <div class="alert alert-danger" v-if="!state.isReg">
            Ошибка авторизации!
          </div>
        </div>
      </transition>
    </form>
    <div>
      <p>Нет аккаунта?</p>
      <router-link tag="a" to="/registration">Зарегистрироваться</router-link>
    </div>
  </div>
</template>
<script>
import { Vue } from 'vue-class-component'
import enterStore from '../store/enter'
export default class EnterCompomemt extends Vue {
  user = {
    email: '',
    password: '',
  }
  getData = enterStore.getData
  state = enterStore.state
}
</script>
<style>
.btn {
  margin-right: 200px;
}
p,
a {
  font-size: 20px;
}
</style>
