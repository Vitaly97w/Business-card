<template>
  <div>
    <input
      v-model="state.H2"
      type="text"
      class="form-control editH"
      placeholder="Напишите название"
    />
    <CardsEdit v-for="(cards, i) of state.cards" :key="i" :index="i" />
    <button class="btn btn-lg" type="button" @click="actions.addCards()">
      Добавить блок карточек
    </button>
    <br />
    <button class="btn btn-lg" type="button" @click="actions.saveCard()">
      Сохранить блок
    </button>
  </div>
</template>
<script>
import { Vue, Options } from 'vue-class-component'
import portfolioStore from '../../store/portfolioStore'
import CardsEdit from './CardsEdit.vue'
@Options({
  components: {
    CardsEdit,
  },
})
export default class PortfolioEdit extends Vue {
  state = portfolioStore.state
  actions = portfolioStore.actions
}
</script>
<style>
.editH {
  width: 20%;
  margin: 160px 0 0 0;
  min-width: 350px;
}

.addCard {
  width: 100%;
  height: 290px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
