<template>
  <div>
    <h3>{{ state.cards[index].Heading2 }}</h3>
    <div class="row">
      <Card
        v-for="(card, i) of state.cards[index].card"
        :key="i"
        :index="i"
        :indexCards="index"
      />
    </div>
  </div>
</template>
<script>
import { Vue, Options } from 'vue-class-component'
import portfolioStore from '../../store/portfolioStore'
import { Prop } from 'vue-property-decorator'
import Card from './Card.vue'
@Options({
  components: {
    Card,
  },
})
export default class CardsEdit extends Vue {
  @Prop() index
  state = portfolioStore.state
  actions = portfolioStore.actions
}
</script>
