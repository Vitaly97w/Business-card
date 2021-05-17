<template>
  <div class="col-6 photo">
    <img :src="state.imageSrc" class="photo" />
    <img
      class="editWelcome"
      src="img/icon/edit.svg"
      width="30"
      height="30"
      title="Редактировать блок"
      @click="actions.isEdit"
    />
  </div>
</template>
<script>
import { Vue } from 'vue-class-component'
import welcomeStore from '../../store/welcomeStore'
export default class WelcomePhoto extends Vue {
  state = welcomeStore.state
  actions = welcomeStore.actions
}
</script>
<style>
.photo {
  margin: 13% auto;
  min-width: 560px;
  max-width: 600px;
  min-height: 556px;
  max-height: 596px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
}
.photo img {
  margin: 0;
  border-radius: 10px;
  object-fit: cover;
}
.editWelcome {
  position: relative;
  top: -570px;
  left: 100%;
  cursor: pointer;
}
</style>
