import { reactive } from 'vue'
import axios from 'axios'
const BASE_URL = process.env.VUE_APP_BASEURL
const urlSetDate = `${BASE_URL}/setMainAbout`
const urlGetDate = `${BASE_URL}/getMainAbout`

const state = reactive({
  aboutText: '',
  getAboutText: '',
  isEdit: false,
})

const actions = {
  getLengthText(): number {
    return state.aboutText.length
  },
  getDate() {
    state.isEdit = !state.isEdit
    console.log(state.isEdit)

    actions.reqOnServerForAbout() //Запрос на сервер для сохранения с компонента Welcome
  },
  reqOnServerForAbout() {
    axios
      .post(urlSetDate, {
        aboutText: state.aboutText,
        token: localStorage.token,
      })
      .then((res) => console.log(res))
      .catch((e) => console.log(e)) //Сохраняем текст
  },
  getDateWithServerForAbout() {
    //Получение данных с сервера
    axios
      .post(urlGetDate, {
        token: localStorage.token,
      })
      .then((res) => {
        state.getAboutText = state.aboutText = res.data.aboutText

        if (res.data.aboutText.length != 0) {
          state.isEdit = true
        }
      })
      .catch((e) => console.log(e))
  },
  isEdit() {
    state.isEdit = !state.isEdit
  },
}

export default { state, actions }
