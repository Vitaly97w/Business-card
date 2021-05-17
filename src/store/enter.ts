import axios from 'axios'
import { computed, reactive } from 'vue'
import router from '../router/index'
const BASE_URL = process.env.VUE_APP_BASEURL

const url = `${BASE_URL}/enter` //Сервер
interface stateObject {
  [key: string]: any
}
const state: stateObject = reactive({})

const actions = {
  //Получаем данные и отправляем на сервер запрос для авторизации
  getData<T extends { toString: () => string }>(user: T) {
    axios
      .post(url, user)
      .then((res) => {
        state.checkStatus = res.status //Статус
        state.passwordErr = res.data.passwordErr
        if (state.passwordErr == true) {
          //Проверка на правильность пароля
          state.isReg = null
        } else {
          localStorage.isReg = state.isReg = res.data.exist //Сохраняем локально
          localStorage.token = state.token = res.data.token
          localStorage.id = state.id = res.data.id
          axios.defaults.headers.common['Authorization'] = state.token
          if (state.isReg == true) {
            router.push({ name: 'Main', params: state.id }) //Редирект
          }
        }
      })
      .catch((e) => console.log(e))
  },
}
export default { ...actions, state }
