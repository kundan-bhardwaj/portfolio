import { useState,useEffect } from "react";
import packContext from "./create";
import api from "../tools/server";
import { decodeToken } from "react-jwt"
import { toast } from "react-toastify";
import axios from "axios";

const PackState = (props) => {
    const [tokens, setTokens] = useState(localStorage.getItem('authtokens'))
    const [user, setUser] = useState(null)
    const [data, setData] = useState(null)
    const link = 'https://portfoliobackend-ecru.vercel.app'
    function getData(params) {
        axios({
            method: 'GET',
            url: 'https://portfoliobackend-ecru.vercel.app/user/'
        }).then((response) => {
            setUser(response.data)
        })
    }
    useEffect(() => {
      getData()
    }, [])
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
        <packContext.Provider value={{ change, data,tokens,user,setUser,setTokens,handleTokens, link }}>
            {props.children}
        </packContext.Provider>
    )
}
export default PackState;