<template>
  <div class="cardReady">
    <img
      :src="state.cards[indexCards].card[index].imageSrc"
      class="Photo"
      width="220"
      height="164"
    />
    <h4 class="card-title">
      {{ state.cards[indexCards].card[index].Heading3 }}
    </h4>
    <p class="date">
      {{ state.cards[indexCards].card[index].Text }}
    </p>
    <p class="date">{{ state.cards[indexCards].card[index].Date }}</p>
  </div>
</template>
<script>
import { Vue } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import portfolioStore from '../../store/portfolioStore'
export default class Card extends Vue {
  @Prop() index
  @Prop() indexCards
  state = portfolioStore.state
  actions = portfolioStore.actions
}
</script>
<style>
.cardReady {
  border-radius: 10px;
  padding: 40px 40px 40px 40px;
  margin: 40px 50px 80px 12px;
  width: 300px;
  height: 30%;
  max-height: 600px;
  background-color: #f8f8f8;
  margin-top: 40px;
}

.card-title {
  word-break: break-all;
  margin-top: 20px;
  text-align: start;
}
.Photo {
  object-fit: cover;
  border-radius: 10px;
}
.date {
  word-break: break-all;
  font-size: 17px;
  margin-top: 20px;
}
</style>
