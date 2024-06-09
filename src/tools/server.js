import axios from "axios"
import { isExpired, useJwt } from "react-jwt"

axios.defaults.withCredentials = true
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

let tokens = JSON.parse(localStorage.getItem('authtokens'))
const api = axios.create({
    baseURL: 'https://portfoliobackend-ecru.vercel.app/',
    headers: `Bearer ${tokens?.access}`,
    withCredentials: true
})

let expierd = isExpired(tokens?.access)
api.interceptors.request.use(
    async (request) => {
        if (tokens && expierd) {
            await axios.post(
                'https://portfoliobackend-ecru.vercel.app/api/token/refresh/',
                {
                    refresh: tokens?.refresh
                }
            )
                .then((response) => {
                    localStorage.setItem('authtokens', JSON.stringify(response.data))
                    request.headers.Authorization = `Bearer ${response.data?.access}`
                })
            return request
        }
        else{
            return request
        }
    }
)

export default api;