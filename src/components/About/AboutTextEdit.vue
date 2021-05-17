<template>
  <textarea
    type="text"
    class="AboutEditText"
    placeholder="Напишите что-нибудь о себе..."
    cols="40"
    rows="5"
    v-model="state.aboutText"
  ></textarea>
  <p>{{ actions.getLengthText() }} из 2600 знаков</p>
  <button class="btn btn-lg" type="button" @click="actions.getDate()">
    Сохранить блок
  </button>
</template>
<script>
import { Vue } from 'vue-class-component'
import aboutStore from '../../store/aboutStore'
export default class AboutTextEdit extends Vue {
  state = aboutStore.state
  actions = aboutStore.actions
}
</script>
<style>
.AboutEditText {
  width: 100%;
  border-radius: 10px;
  height: 560px;
  font-size: 30px;
  padding-left: 5px;
}
</style>
