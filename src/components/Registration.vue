<template>
  <form class="text-center m-0">
    <div class="logo">
      <img src="/img/icon/bf7iePJZpjI.jpg" width="310" height="100" />
      <h3 class="mb-5">Регистрация</h3>
    </div>
    <div class="row g-2 group-input">
      <div class="form-floating col-auto">
        <input
          type="text"
          class="form-control"
          placeholder="Имя"
          autocomplete="off"
          v-model="user.firstName"
        />
        <label>Введите имя</label>
      </div>
      <div class="form-floating col-auto">
        <input
          type="text"
          class="form-control"
          placeholder="Фамилия"
          autocomplete="off"
          v-model="user.lastName"
        />
        <label>Введите фамилию</label>
      </div>
      <div class="form-floating col-auto">
        <input
          type="email"
          class="form-control"
          placeholder="name@example.com"
          autocomplete="off"
          v-model="user.email"
        />
        <label>Введите почту</label>
      </div>
      <div class="form-floating col-auto">
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="off"
          v-model="user.password"
        />
        <label>Введите пароль</label>
      </div>
    </div>
    <button class="btn btn-lg reg" type="button" @click="getDate(user)">
      Зарегистрироваться
    </button>
    <transition name="show">
      <div v-if="state.checkStatus == 200">
        <transition name="show">
          <div class="alert alert-success" v-if="state.isReg">
            Вы успешно зарегистрировались!
          </div>
        </transition>
        <transition name="show">
          <div class="alert alert-warning" v-if="!state.isReg">
            Такой email уже зарегистрирован!
          </div>
        </transition>
      </div>
    </transition>
    <transition name="show">
      <div v-if="state.checkStatus > 300">
        <div class="alert alert-danger" v-if="!state.isReg">
          Ошибка регистрации!
        </div>
      </div>
    </transition>
  </form>
  <div class="input">
    <p>Уже есть аккаунт?</p>
    <router-link class="input__a" tag="a" to="/enter">Войти</router-link>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import registrationStore from '../store/registration'

export default class RegistrationComponent extends Vue {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }
  getDate = registrationStore.getData
  state = registrationStore.state
}
// Стили
</script>
<style>
.group-input {
  margin-left: auto;
  min-width: 450px;
  max-width: 500px;
}
.input {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.input p {
  text-align: center;
  margin-right: 50px;
}
.input .input__a {
  cursor: pointer;
  text-align: center;
  margin-right: 50px;
  color: black;
}
.show-enter-from {
  opacity: 0;
}
.show-enter-to {
  opacity: 1;
}
.show-enter-active {
  transition: all 1s;
}
.reg {
  margin-left: 70px;
}
</style>
