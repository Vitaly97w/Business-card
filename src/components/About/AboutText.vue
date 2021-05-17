<template>
  <img
    class="editAbout"
    src="img/icon/edit.svg"
    width="30"
    height="30"
    title="Редактировать блок"
    @click="actions.isEdit"
  />
  <p class="textAbout">{{ state.aboutText }}</p>
</template>
<script>
import { Vue } from 'vue-class-component'
import aboutStore from '../../store/aboutStore'
export default class AboutText extends Vue {
  state = aboutStore.state
  actions = aboutStore.actions
}
</script>
<style>
.editAbout {
  position: relative;
  left: 100%;
  top: -85px;
  cursor: pointer;
}
.textAbout {
  padding-bottom: 160px;
}
</style>
