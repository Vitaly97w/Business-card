<template>
  <div>
    <img
      src="img/icon/chrome-close.svg"
      title="Удалить"
      width="25"
      height="25"
      class="deleteCards"
      @click="actions.deleteCards(index)"
    />
    <input
      type="text"
      class="form-control"
      style="width: 31%; margin-bottom: 30px; margin-top: 80px"
      placeholder="Напишите название подзаголовка"
      v-model="state.cards[index].Heading2"
    />

    <div class="row">
      <CardEdit
        v-for="(card, i) of state.cards[index].card"
        :key="i"
        :index="i"
        :indexCards="index"
      />
      <div class="card">
        <div class="addCard">
          <img
            src="/img/icon/plus-square.svg"
            width="50"
            height="50"
            @click="actions.addCard(index)"
          />
          <p>Добавить карточку</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Vue, Options } from 'vue-class-component'
import portfolioStore from '../../store/portfolioStore'
import { Prop } from 'vue-property-decorator'
import CardEdit from './CardEdit'
@Options({
  components: {
    CardEdit,
  },
})
export default class CardsEdit extends Vue {
  @Prop() index
  state = portfolioStore.state
  actions = portfolioStore.actions
}
</script>
<style>
.deleteCards {
  opacity: 0.5;
  display: block;
  position: relative;
  cursor: pointer;
  left: 100%;
  z-index: 9999;
}
.deleteCards:hover {
  opacity: 1;
}
</style>
