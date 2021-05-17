import { computed, reactive } from 'vue'
import router from '../router/index'
import enter from './enter'
const actions = {
  logout() {
    delete enter.state.isReg
    localStorage.id = ''
    localStorage.isReg = false
    localStorage.token = ''
    router.push('/enter')
  },
}

export default { actions }
