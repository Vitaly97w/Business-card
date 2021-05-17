<template>
  <div class="main about">
    <div class="container contant">
      <h2 id="AboutH">Обо мне</h2>
      <AboutTextEdit v-if="!state.isEdit" />
      <AboutText v-else />
    </div>
  </div>
</template>
<script>
import { Vue, Options } from 'vue-class-component'
import AboutTextEdit from './AboutTextEdit.vue'
import AboutText from './AboutText.vue'
import aboutStore from '../../store/aboutStore'
@Options({
  components: {
    AboutTextEdit,
    AboutText,
  },
})
export default class About extends Vue {
  state = aboutStore.state
  actions = aboutStore.actions
  beforeMount() {
    this.actions.getDateWithServerForAbout()
  }
}
</script>
<style>
.about {
  height: auto;
  background-color: #f8f8f8;
}
</style>
