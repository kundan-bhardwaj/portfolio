import React, { useContext, useEffect, useState } from 'react'
import './css/resume.css'
import axios from 'axios'
import api from '../tools/server'
import Progress from './progress'
import packContext from '../context/create'
export default function Resume() {
    const [resume,setResume] = useState(null)
    async function get(){
        await api.get(
            '/docs/',
        )
        .then((response) => {
            setResume(response.data)
        })
    }
    useEffect(() => {
        get()
    },[])
    const con = useContext(packContext)
    if (resume){
        window.location.href = con.link + resume['attachment']
    }
    return (
        <div id='outerpdfc'>
            <Progress value = {100}/>
        </div>
    )
}
