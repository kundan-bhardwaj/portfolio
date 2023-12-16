import axios from "axios"
import { isExpired, useJwt } from "react-jwt"

axios.defaults.withCredentials = true
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

let tokens = JSON.parse(localStorage.getItem('authtokens'))
const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    headers: `Bearer ${tokens?.access}`
})

let expierd = isExpired(tokens?.access)
api.interceptors.request.use(
    async (request) => {
        if (tokens && expierd) {
            await axios.post(
                'http://127.0.0.1:8000/api/token/refresh/',
                {
                    refresh: tokens?.refresh
                }
            )
                .then((response) => {
                    localStorage.setItem('authtokens', JSON.stringify(response.data))
                    request.headers.Authorization = `Bearer ${response.data?.access}`
                })
        }
        else{
            return request
        }
    }
)

export default api;