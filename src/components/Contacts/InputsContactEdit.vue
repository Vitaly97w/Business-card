<template>
  <div>
    <input
      type="text"
      class="form-control"
      placeholder="Напишите вид контакта"
      v-model="state.contacs[index].H2"
    />
    <InputContactEdit
      v-for="(input, i) of state.contacs[index].contact"
      :key="i"
      :indexContacs="index"
      :index="i"
    />
    <button
      class="btn btn"
      style="
                background-color: #f8f8f8;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                margin: 0 0 40px 0;
                font-size: 14px;
                justify-content: center;
                display: inline-flex;
              "
      type="button"
      @click="actions.addInputContactEdit(index)"
    >
      <img
        src="img/icon/plus-square.svg"
        width="18"
        height="18"
        style="margin: auto 10px auto 0"
      />
      Добавить контакт
    </button>
  </div>
</template>
<script>
import { Vue, Options } from 'vue-class-component'
import InputContactEdit from './InputContactEdit'
import { Prop } from 'vue-property-decorator'
import contactStore from '../../store/contactStore'

@Options({
  components: {
    InputContactEdit,
  },
})
export default class InputsContactEdit extends Vue {
  @Prop() index
  state = contactStore.state
  actions = contactStore.actions
}
</script>
