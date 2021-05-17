<template>
  <div class="main portfolio">
    <div class="container contant">
      <PortfolioEdit v-if="!state.isEdit" />
      <PortfolioReady v-else />
    </div>
  </div>
</template>
<script>
import { Vue, Options } from 'vue-class-component'
import PortfolioEdit from './PortfolioEdit.vue'
import PortfolioReady from './PortfolioReady'
import portfolioStore from '../../store/portfolioStore'
@Options({
  components: {
    PortfolioEdit,
    PortfolioReady,
  },
})
export default class Portfolio extends Vue {
  state = portfolioStore.state
  actions = portfolioStore.actions
  beforeMount() {
    this.actions.getDateWithServerForPortfolio()
  }
}
</script>
<style>
.portfolio {
  height: 100%;
  max-height: 1800px;
  padding-bottom: 80px;
}
.portfolio input {
  font-size: 20px;
}
.editH2 {
  margin-left: 10px;
  cursor: pointer;
}
</style>
