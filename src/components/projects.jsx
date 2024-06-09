import axios from 'axios'
import './css/projects.css'
import React, { useContext, useRef, useState } from 'react'
import { useEffect } from 'react'
import Button from './button'
import api from '../tools/server'
import { GoLinkExternal } from 'react-icons/go'
import packContext from '../context/create'

export default function Projects() {
    const [pack, setPack] = useState(null)
    const [tech, setTech] = useState(null)
    const con = useContext(packContext)
    // create projects
    async function getdata() {
        await api.get(
            '/projects/',
        )
        .then((response) => {
            setPack(response.data)
        })
        await api.get(
            '/tech/',
        )
        .then((response) => {
            setTech(response.data)
        })
    }
    useEffect(() => {
        getdata()
    }, []);

    function techs(ind) {
        let ele = []
        let arr = pack[ind].tech.split(',')
        for (var i = 0; i < tech?.length; i += 1) {
            for (var j = 0; j < arr.length; j += 1) {
                if (tech[i].title === arr[j]) {
                    ele.push(
                        <img width='25em' src={con.link + tech[i].tlogo} alt="" />
                    )
                }
            }
        }
        return (ele)
    }


    const ref = useRef(null)
    function create() {
        let ele = []
        for (var i = 0; i < pack?.length; i += 1) {
            ele.push(
                <div id='projc'>
                    <img id='pimg' src={con.link + pack[i].pimg} alt="" />
                    <div id='projectd'>
                        <h2 id='ptitle'>{pack[i].title}</h2>
                        <div id='ptech'>
                            {techs(i)}
                        </div>
                        <Button target='/' to={pack[i].link} color='white' text='Visit Live' icon={<GoLinkExternal />} />
                        <label id='pdesc'>{pack[i].discription}</label>
                    </div>
                </div>
            )
        }
        if (ref.current){
            ref.current.style.display = 'none'
        }
        return (ele)
    }


    return (
        <>
            <div id='projscroll'>
                {create()}
                <div id='ploading' ref={ref}>
                    <div id='ploimg'></div>
                    <div id='plostrip'></div>
                    <div id='plostrip'></div>
                    <div id='plostrip'></div>
                </div>
            </div>
        </>
    )
}
