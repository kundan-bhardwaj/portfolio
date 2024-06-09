import React, { useContext } from 'react'
import './css/education.css'
import Progress from './progress'
import api from '../tools/server'
import { MdElectricBolt } from 'react-icons/md'
import axios from 'axios'
import { useState,useEffect } from 'react'
import packContext from '../context/create'

export default function Education() {
    const [edu, setEdu] = useState(null)
    const con = useContext(packContext)
    
    async function getData() {
        await api.get(
            '/education/',
        )
        .then((response) => {
            setEdu(response.data)
            })
    }
    useEffect(() => {
        getData()
    }, [])
    function create() {
        let ele = []
        for (var i = 0; i < edu?.length; i++) {
            console.log(con.link + edu[i].img)
            ele.push(
                <div id='edc'>
                    <div id='upper'>
                        <div>
                        <img id='ilogo' src={con.link + edu[i].img} width='100rem' alt="" />
                        
                        </div>
                        <div id='ed'>
                            <h1>{edu[i].name}</h1>
                        </div>
                    </div>
                    <div id='cc'>
                        <p>
                            {edu[i].desc}
                        </p>
                    </div>
                </div>
            )
        }
        return ele
    }
    return (
        <div id='eds'>
        {create()}
        <div id='loading'>
                <div id='loimg'>

                </div>
                <div id='lostrip'></div>
                <div id='lostrip'></div>
                <div id='lostrip'></div>
            </div>
        </div>
    )
}
