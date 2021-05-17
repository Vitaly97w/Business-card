<template>
  <div>
    <InputsReady v-for="(inputs, i) of state.contacs" :key="i" :index="i" />
  </div>
</template>
<script>
import { Vue, Options } from 'vue-class-component'
import InputsReady from './InputsReady.vue'
import contactStore from '../../store/contactStore'

@Options({
  components: { InputsReady },
})
export default class ContactReady extends Vue {
  state = contactStore.state
}
</script>
<style></style>
