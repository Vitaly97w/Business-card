<template>
  <div class="col-6">
    <div>
      <h1>Добро пожаловать!</h1>
      <textarea
        class="welcomeEditText"
        type="text"
        placeholder="Напишите что-нибудь..."
        cols="40"
        rows="5"
        v-model="state.welcomeText"
      ></textarea>
      <p>{{ actions.getLengthStr() }} из 260 знаков</p>

      <button class="btn btn-lg" type="button" @click="actions.getDate">
        Сохранить блок
      </button>
    </div>
  </div>
</template>
<script>
import { Vue } from 'vue-class-component'
import welcomeStore from '../../store/welcomeStore'
export default class WelcomeTextEdit extends Vue {
  state = welcomeStore.state
  actions = welcomeStore.actions
}
</script>
