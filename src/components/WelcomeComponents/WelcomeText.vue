<template>
  <div class="col-6">
    <h1 id="WelcomeH">Добро пожаловать!</h1>
    <p class="myName">
      {{ stateWelcome.welcomeText }}
    </p>
  </div>
</template>
<script lang="ts">
import { Vue } from 'vue-class-component'
import welcomeStore from '../../store/welcomeStore'
export default class WelcomeText extends Vue {
  stateWelcome = welcomeStore.state
}
</script>
