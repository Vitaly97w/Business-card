<template>
  <title>Авторизация</title>
  <main class="form-signin">
    <EnterComponent />
  </main>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import EnterComponent from '../components/Enter.vue'
@Options({
  components: { EnterComponent },
})
export default class Enter extends Vue {}
</script>
<style>
main {
  width: 30%;
  margin: 140px auto;
  min-width: 442px;
}
</style>
