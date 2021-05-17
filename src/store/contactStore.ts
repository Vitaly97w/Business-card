import { reactive } from 'vue'
import axios from 'axios'
const BASE_URL = process.env.VUE_APP_BASEURL
const urlSetDate = `${BASE_URL}/setMainContact`
const urlGetDate = `${BASE_URL}/getMainContact`

const state = reactive({
  contacs: [
    {
      H2: '',
      contact: [''],
    },
  ],
  isEdit: false,
})

const actions = {
  addInputContactEdit(index: number) {
    if (state.contacs[index].contact.length < 5) {
      state.contacs[index].contact.push('')
    }
  },
  addInputsContactEdit() {
    if (state.contacs.length < 5) {
      state.contacs.push({
        H2: '',
        contact: [''],
      })
    }
  },
  getDate() {
    state.isEdit = !state.isEdit

    actions.reqOnServerForContact() //Запрос на сервер для сохранения с компонента Welcome
  },
  reqOnServerForContact() {
    axios
      .post(urlSetDate, {
        contacts: state.contacs,
        token: localStorage.token,
      })
      .then((res) => console.log(res))
      .catch((e) => console.log(e)) //Сохраняем контактов
  },
  getDateWithServerForContact() {
    //Получение данных с сервера
    axios
      .post(urlGetDate, {
        token: localStorage.token,
      })
      .then((res) => {
        state.contacs = res.data.contacts

        if (res.data.contacts != 0) {
          state.isEdit = true
        }
      })
      .catch((e) => console.log(e))
  },
  isEdit() {
    state.isEdit = !state.isEdit
    console.log(1)
  },
}

export default { state, actions }
