import axios from "axios"


axios.defaults.baseURL = "https://questify-backend.goit.global"

const token = {
    set(token) {
        axios.defaults.headers.common.AutAuthorization = `Bearer ${token}`
    },
    unset() {
      axios.defaults.headers.common.Authorization = ""
    },
}

/* AUTHORIZATION */
const signUp = credentials => axios.post('/auth/register', credentials)
const logIn = credentials => axios.post('/auth/login', credentials)
const logOut = () => axios.post('/auth/logout')
const refreshToken = sid => axios.post('/auth/refresh', sid)
// const googleAuth = () => axios.get('/auth/google')

/* Card */
const createCard = data => axios.post('/card', data)
const editCard = (id, data) => axios.patch(`/card/${id}`, data)
const deleteCard = id => axios.delete(`/card/${id}`)
const getAllCards = () => axios.get('/card')
const completeCard = id => axios.patch(`/card/complete/${id}`)

// eslint-disable-next-line
export default {
  token,
  signUp,
  logIn,
  logOut,
  refreshToken,
    createCard,
    editCard,
    deleteCard,
    getAllCards,
    completeCard
};


