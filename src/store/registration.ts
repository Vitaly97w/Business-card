import axios from 'axios'
import { reactive } from 'vue'

const url = 'http://192.168.0.187:3000/registration'
interface stateObject {
  [key: string]: any
}
const state: stateObject = reactive({})
const actions = {
  //Получаем данные и отправляем на серве для регистрации
  getData<T extends { toString: () => string }>(user: T) {
    //Запрос на сервер для регистрации
    axios
      .post(url, user)
      .then((res) => {
        state.checkStatus = res.status //Получаем статус
        console.log(res.status)

        state.isReg = !res.data.exist
      })
      .catch((e) => console.log(e))
  },
}

export default { ...actions, state }
