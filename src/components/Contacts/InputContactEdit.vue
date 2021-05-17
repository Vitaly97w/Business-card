<template>
  <input
    type="text"
    class="form-control"
    placeholder="Введите данные контакта"
    v-model="state.contacs[indexContacs].contact[index]"
  />
</template>
<script>
import { Vue } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import contactStore from '../../store/contactStore'
export default class InputContactEdit extends Vue {
  state = contactStore.state
  @Prop() index
  @Prop() indexContacs
}
</script>
