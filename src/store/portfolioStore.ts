import { reactive } from 'vue'
import axios from 'axios'
const BASE_URL = process.env.VUE_APP_BASEURL
const state = reactive({
  H2: 'Портфолио',
  isEdit: false,
  cards: [
    {
      Heading2: '',
      card: [
        {
          Heading3: '',
          Text: '',
          Date: '',
          imageSrc: '',
          imgFile: '',
          isEdit: false,
        },
      ],
    },
  ],
})
const actions = {
  addCards() {
    state.cards.push({
      Heading2: '',
      card: [
        {
          Heading3: '',
          Text: '',
          Date: '',
          imageSrc: '',
          imgFile: '',
          isEdit: false,
        },
      ],
    })
  },
  addCard(index: number) {
    state.cards[index].card.push({
      Heading3: '',
      Text: '',
      Date: '',
      imageSrc: '',
      imgFile: '',
      isEdit: false,
    })
  },
  deleteCard(indexCard: number, index: number) {
    state.cards[indexCard].card.splice(index, 1)
  },
  deleteCards(index: number) {
    state.cards.splice(index, 1)
  },
  saveCard() {
    state.isEdit = !state.isEdit
    this.reqOnServerForPortfolio()
  },
  isEdit() {
    state.isEdit = !state.isEdit
  },
  reqOnServerForPortfolio() {
    //
    const formData = new FormData()
    for (let i = 0; i < state.cards.length; i++) {
      for (let j = 0; j < state.cards[i].card.length; j++) {
        formData.append(`files${i}${j}`, state.cards[i].card[j].imgFile)
        state.cards[i].card[
          j
        ].imgFile = `${BASE_URL}/${localStorage.id}/portfolio/files${i}${j}.jpg`
      }
    }
    console.log(formData)

    axios.post(`${BASE_URL}/photo/portfolio/${localStorage.id}`, formData) //Сохраняем картинки

    axios
      .post(`${BASE_URL}/setMainPortfolioCard`, {
        token: localStorage.token,
        cards: state.cards,
        H2: state.H2,
      })
      .then((res) => console.log(res))
      .catch((e) => console.log(e)) //Сохраняем все карточки
  },
  getDateWithServerForPortfolio() {
    //Получение данных с сервера
    axios
      .post(`${BASE_URL}/getMainPortfolioCard`, {
        token: localStorage.token,
      })
      .then((res) => {
        state.cards = res.data.cards
        state.H2 = res.data.H2

        for (let i = 0; i < state.cards.length; i++) {
          for (let j = 0; j < state.cards[i].card.length; j++) {
            state.cards[i].card[j].imageSrc = state.cards[i].card[j].imgFile
          }
        }

        if (res.data.cards.length != 0) {
          state.isEdit = true
        }
      })
      .catch((e) => console.log(e))
  },
}
export default { state, actions }
