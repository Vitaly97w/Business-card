<template>
  <div class="main">
    <div class="container">
      <div class="contant">
        <div class="row" v-if="!state.isEdit">
          <WelcomeTextEdit />
          <WelcomePhotoEdit />
        </div>
        <div class="row" v-else>
          <WelcomeText />
          <WelcomePhoto />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import WelcomeTextEdit from './WelcomeTextEdit.vue'
import WelcomeText from './WelcomeText.vue'
import welcomeStore from '../../store/welcomeStore'
import WelcomePhotoEdit from './WelcomePhotoEdit.vue'
import WelcomePhoto from './WelcomePhoto.vue'
@Options({
  components: {
    WelcomeTextEdit,
    WelcomeText,
    WelcomePhotoEdit,
    WelcomePhoto,
  },
})
export default class Welcome extends Vue {
  state = welcomeStore.state
  beforeMount() {
    welcomeStore.actions.getDateWithServerForWelcome()
  }
}
</script>
<style>
.welcomeEditText {
  width: 460px;
  height: 441px;
  border: 1px solid #4f4f4f;
  border-radius: 10px;
  padding: 10px;
  font-size: 25px;
}
p {
  font-size: 30px;
}
</style>
