import axios from 'axios'
import { reactive } from 'vue'
const BASE_URL = process.env.VUE_APP_BASEURL
const urlSetDate = `${BASE_URL}/setMainWelcome`
const urlGetDate = `${BASE_URL}/getMainWelcome`
const state = reactive({
  welcomeText: '',
  getWelcomeText: '',
  imageSrc: '',
  imgFile: '',
  isEdit: false,
})
const actions = {
  getLengthStr(): number {
    //Количество элементов в textarea
    return state.welcomeText.length
  },
  getDate() {
    state.isEdit = !state.isEdit
    actions.reqOnServerForWelcome() //Запрос на сервер для сохранения с компонента Welcome
  },
  reqOnServerForWelcome() {
    const formData = new FormData()
    formData.append('file', state.imgFile)
    axios.post(`${BASE_URL}/photo/welcome/${localStorage.id}`, formData) //Сохраняем картинку
    axios
      .post(urlSetDate, {
        welcomeText: state.welcomeText,
        token: localStorage.token,
      })
      .then((res) => console.log(res))
      .catch((e) => console.log(e)) //Сохраняем текст
  },
  getDateWithServerForWelcome() {
    //Получение данных с сервера
    axios
      .post(urlGetDate, {
        token: localStorage.token,
      })
      .then((res) => {
        state.getWelcomeText = state.welcomeText = res.data.welcomeText
        state.imageSrc = res.data.photo

        if (res.data.welcomeText.length != 0) {
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
