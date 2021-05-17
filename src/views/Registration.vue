<template>
  <title>Регистрация</title>
  <main class="form-signin">
    <img src="" alt="" srcset="" />
    <RegistrationComponent />
  </main>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import RegistrationComponent from '../components/Registration.vue'
@Options({
  components: {
    RegistrationComponent,
  },
})
export default class Registration extends Vue {}
</script>
<style>
main {
  width: 30%;
  margin: 140px auto;
  min-width: 442px;
}
</style>
