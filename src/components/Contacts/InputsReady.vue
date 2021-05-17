<template>
  <div>
    <h3 class="contact-h3">{{ state.contacs[index].H2 }}</h3>
    <p
      class="contact-p"
      v-for="(p, i) of state.contacs[index].contact"
      :key="i"
    >
      {{ p }}
    </p>
  </div>
</template>
<script>
import { Vue } from 'vue-class-component'
import contactStore from '../../store/contactStore'
import { Prop } from 'vue-property-decorator'
export default class InputsReady extends Vue {
  @Prop() index
  state = contactStore.state
}
</script>
<style>
.contact-h3 {
  padding-bottom: 20px;
}
.contact-p {
  padding-bottom: 10px;
}
</style>
