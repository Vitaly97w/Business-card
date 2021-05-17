<template>
  <div class="col-6 addPhoto">
    <img
      src="img/icon/chrome-close.svg"
      title="Удалить"
      width="30"
      height="30"
      class="delete"
      v-show="showPreview"
      @click="deletePhoto"
    />
    <img
      :src="imagePreview"
      v-show="showPreview"
      width="555"
      height="551"
      class="preview"
    />

    <div class="beforeEdit" v-show="!showPreview">
      <label for="file">
        <img src="img/icon/add_photo.svg" width="100" height="100" />
      </label>
      <input
        type="file"
        id="file"
        ref="file"
        accept="img/*"
        @change="handleFileUpload()"
      />

      <p>Прикрепите фотографию</p>
    </div>
  </div>
</template>
<script>
import { Vue } from 'vue-class-component'
import welcomeStore from '../../store/welcomeStore'
export default class WelcomePhotoEdit extends Vue {
  state = welcomeStore.state
  file = ''
  showPreview = false
  imagePreview = this.state.imageSrc
  handleFileUpload() {
    this.file = this.$refs.file.files[0]
    let reader = new FileReader()
    reader.addEventListener('load', () => {
      this.showPreview = true
      this.state.imgFile = this.file
      this.state.imageSrc = this.imagePreview = reader.result
    })
    if (this.file) {
      if (/\.(jpe?g|png|gif)$/i.test(this.file.name)) {
        reader.readAsDataURL(this.file)
      }
    }
  }
  beforeMount() {
    if (this.imagePreview) {
      this.showPreview = !this.showPreview
    }
  }
  deletePhoto() {
    this.showPreview = !this.showPreview
  }
}
</script>
<style>
.beforeEdit input {
  opacity: 0;
}
.addPhoto {
  margin: 13% auto;
  min-width: 560px;
  width: 560px;
  min-height: 540px;
  height: 572px;
  border: 1px solid #4f4f4f;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1px;
}
.preview {
  display: block;
  position: relative;
  border-radius: 10px;
  object-fit: cover;
}
.delete {
  opacity: 0.5;
  display: block;
  position: absolute;
  cursor: pointer;

  top: 5%;
  left: 90%;
  z-index: 9999;
}
.delete:hover {
  opacity: 1;
}
.addPhoto div {
  margin: 0 auto;
}
.beforeEdit {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.beforeEdit img {
  margin: 0 35%;
  cursor: pointer;
}
.beforeEdit p {
  margin: 0 auto;
}
</style>
