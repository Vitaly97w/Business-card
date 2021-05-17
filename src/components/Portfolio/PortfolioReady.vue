<template>
  <div>
    <h2 id="portfolioH">{{ state.H2 }}</h2>
    <img
      class="editAbout"
      src="img/icon/edit.svg"
      width="30"
      height="30"
      title="Редактировать блок"
      @click="actions.isEdit"
    />
    <Cards v-for="(cards, i) of state.cards" :key="i" :index="i" />
  </div>
</template>
<script>
import { Vue, Options } from 'vue-class-component'
import Cards from './Cards'
import portfolioStore from '../../store/portfolioStore'
@Options({
  components: {
    Cards,
  },
})
export default class PortgolioReady extends Vue {
  state = portfolioStore.state
  actions = portfolioStore.actions
}
</script>
