import React, { useContext, useRef } from 'react'
import './css/social.css'
import api from '../tools/server'
import { useState, useEffect } from 'react';
import axios from 'axios';
import packContext from '../context/create';

export default function Social() {
    const [Social, setSocial] = useState(null);
    const con = useContext(packContext)
    async function getData(params) {
        await api.get(
            '/socials/',
        )
            .then((response) => {
                setSocial(response.data)
            })
    }
    useEffect(() => {
        getData()
    }, [])
    const ref = useRef(null)
    function socialapps() {
        let arr = []
        for (var i = 0; i < Social?.length; i += 1) {
            arr.push(
                <a target='/' href={Social[i].url}><img className='simgs' src={con.link + Social[i].logo} alt="/" /></a>
            )
        }
        if (ref.current) {
            ref.current.style.display = 'none'
        }
        return arr;
    }
    return (
        <div id='scont'>
            {socialapps()}
            <div id='skeleton' ref={ref}>
                <div id='loimg'>

                </div>
                <div id='loimg'>

                </div>
                <div id='loimg'>

                </div>
                <div id='loimg'>

                </div>
            </div>
        </div>
    )
}
