import { useState } from "react";
import packContext from "./create";
import api from "../tools/server";
import { decodeToken } from "react-jwt"
import { toast } from "react-toastify";

const PackState = (props) => {
    const [tokens, setTokens] = useState(localStorage.getItem('authtokens'))
    const [user, setUser] = useState(decodeToken(localStorage.getItem('authtoken')?.access))
    const [data, setData] = useState(null)
    const change = (image, title, price,id) => {
        setData({
            image,
            title,
            price,
            id
        })
    }
    async function handleTokens(username,password) {
        let response = await api.post(
            '/api/token/',
            {
                'username': username,
                'password': password
            }
        )
        if (response.status === 200){
            localStorage.setItem('authtokens',JSON.stringify(response.data))
        } else{
            toast.info('something went wrong !!')
        }
    }

    return (
        <packContext.Provider value={{ change, data,tokens,user,setUser,setTokens,handleTokens }}>
            {props.children}
        </packContext.Provider>
    )
}
export default PackState;