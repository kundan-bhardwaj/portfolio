import axios from "axios"
import Cookies from "js-cookie"

axios.defaults.withCredentials = true
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
console.log(Cookies.get('csrftoken'))

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    headers: {
        'X-CSRFToken': Cookies.get('csrftoken')
    }
})

export default api;