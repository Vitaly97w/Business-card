<template>
  <div class="card">
    <img
      src="img/icon/chrome-close.svg"
      title="Удалить"
      width="25"
      height="25"
      class="deleteCard"
      v-show="!showPreview"
      @click="actions.deleteCard(indexCards, index)"
    />
    <div class="border">
      <img
        src="img/icon/chrome-close.svg"
        title="Удалить"
        width="25"
        height="25"
        class="deletePhoto"
        v-show="showPreview"
        @click="deletePhoto"
      />
      <img
        :src="this.state.cards[this.indexCards].card[this.index].imageSrc"
        v-show="showPreview"
        width="220"
        height="164"
        class="preview"
      />

      <div class="beforeEditP" v-show="!showPreview">
        <label :for="`file${indexCards}${index}`">
          <img src="img/icon/add_photo.svg" width="60" height="60" />
        </label>
        <input
          type="file"
          :id="`file${indexCards}${index}`"
          ref="file"
          accept="img/*"
          @change="handleFileUpload()"
        />
      </div>
    </div>
    <input
      type="text"
      class="form-control editTextCard"
      style="min-width: 200px; margin: 20px 0 0 0"
      placeholder="Напишите заголовок"
      v-model="state.cards[indexCards].card[index].Heading3"
    />
    <input
      type="text"
      class="form-control editTextCard"
      style="min-width: 200px; margin: 20px 0 20px 0"
      placeholder="Напишите что-нибудь..."
      v-model="state.cards[indexCards].card[index].Text"
    />
    <input
      type="date"
      class="form-control"
      style="min-width: 200px; margin: auto"
      placeholder="Добавить дату"
      v-model="state.cards[indexCards].card[index].Date"
    />
  </div>
</template>
<script>
import { Vue } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import portfolioStore from '../../store/portfolioStore'

export default class CardEdit extends Vue {
  @Prop() index
  @Prop() indexCards
  state = portfolioStore.state
  actions = portfolioStore.actions
  showPreview = false
  file = ''

  handleFileUpload() {
    this.file = this.$refs.file.files[0]
    let reader = new FileReader()
    reader.addEventListener('load', () => {
      this.showPreview = !this.showPreview
      this.state.cards[this.indexCards].card[this.index].imgFile = this.file
      this.state.cards[this.indexCards].card[
        this.index
      ].imageSrc = this.imagePreview = reader.result
    })
    if (this.file) {
      if (/\.(jpe?g|png|gif)$/i.test(this.file.name)) {
        reader.readAsDataURL(this.file)
      }
    }
  }
  beforeMount() {
    if (this.state.cards[this.indexCards].card[this.index].imageSrc) {
      this.showPreview = !this.showPreview
    }
  }
  deletePhoto() {
    this.showPreview = !this.showPreview
  }
}
</script>
<style>
.card {
  border-radius: 10px;
  padding: 20px 20px 20px 20px;
  margin: 40px 50px 0 12px;
  width: 260px;
  height: 30%;
  max-height: 600px;
  text-align: center;
  background-color: #f8f8f8;
  margin-top: 40px;
}
.card p {
  font-size: 20px;
  font-family: 'Montserrat regular';
  margin-top: 30px;
}
.card input {
  min-width: 200px;
  margin: auto;
}
.card img {
  margin: 0 auto;
  cursor: pointer;
}
.beforeEditP input {
  opacity: 0;
}
.border {
  border: 1px solid #4f4f4f;
  border-radius: 10px;
  width: 220px;
  height: 164px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
}
.beforeEditP {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px 0 0 0;
}
.beforeEditP img {
  margin: 0 auto;
  cursor: pointer;
}
.preview {
  display: block;
  position: relative;
  border-radius: 10px;
  object-fit: cover;
}
.deletePhoto {
  opacity: 0.5;
  display: block;
  position: absolute;
  cursor: pointer;

  top: 6%;
  left: 80%;
  z-index: 9999;
}
.deletePhoto:hover {
  opacity: 1;
}
.deleteCard {
  opacity: 0.5;
  display: block;
  position: absolute;
  cursor: pointer;

  top: 2%;
  left: 88%;
  z-index: 9999;
}
.deleteCard:hover {
  opacity: 1;
}
</style>
