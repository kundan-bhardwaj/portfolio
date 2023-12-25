import React, { useEffect, useState } from 'react'
import './css/resume.css'
import axios from 'axios'
import Progress from './progress'
export default function Resume() {
    const [resume,setResume] = useState(null)

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://127.0.0.1:8000/docs/'
        }).then((response) => {
            setResume(response.data)
            console.log(resume)
        })
    },[])
    if (resume){
        window.location.href = 'http://127.0.0.1:8000' + resume['attachment']
    }
    return (
        <div id='outerpdfc'>
            <Progress value = {100}/>
        </div>
    )
}
