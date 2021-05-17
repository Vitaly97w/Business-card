<template>
  <div>
    <InputsContactEdit
      v-for="(inputs, i) of state.contacs"
      :key="i"
      :index="i"
    />
    <button
      class="btn btn-lg"
      type="button"
      style="margin: 0 0 40px 0;"
      @click="actions.addInputsContactEdit()"
    >
      Добавить блок контактов
    </button>
    <br />
    <button class="btn btn-lg" type="button" @click="actions.getDate()">
      Сохранить блок
    </button>
  </div>
</template>
<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import InputsContactEdit from './InputsContactEdit.vue'
import contactStore from '../../store/contactStore'

@Options({
  components: {
    InputsContactEdit,
  },
})
export default class ContactEdit extends Vue {
  state = contactStore.state
  actions = contactStore.actions
}
</script>
