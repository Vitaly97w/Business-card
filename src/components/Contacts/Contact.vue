<template>
  <div class="main contact">
    <div class="container contant">
      <h2 id="contactH">Контакты</h2>
      <img
        class="editContact"
        src="img/icon/edit.svg"
        width="30"
        height="30"
        title="Редактировать блок"
        @click="actions.isEdit"
      />
      <div>
        <ContactEdit v-if="!state.isEdit" />
        <ContactReady v-else />
      </div>
    </div>
  </div>
</template>
<script>
import { Vue, Options } from 'vue-class-component'
import contactStore from '../../store/contactStore'
import ContactEdit from './ContactEdit.vue'
import ContactReady from './ContactReady.vue'
@Options({
  components: {
    ContactEdit,
    ContactReady,
  },
})
export default class Contact extends Vue {
  state = contactStore.state
  actions = contactStore.actions
  beforeMount() {
    this.actions.getDateWithServerForContact()
  }
}
</script>
<style>
.contact {
  height: auto;
  background-color: #f8f8f8;
  padding-bottom: 120px;
}
.contact input {
  width: 300px;
  margin-bottom: 40px;
}
.contact h2 {
  margin-bottom: 80px;
}
.editContact {
  position: relative;
  left: 100%;
  top: -115px;
  cursor: pointer;
}
</style>
