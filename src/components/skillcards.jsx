import axios from 'axios'
import api from '../tools/server'
import React, { useContext, useRef, useState } from 'react'
import { useEffect } from 'react'
import './css/skillcard.css'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import packContext from '../context/create'

export default function Skillcards() {
    // fetch data 
    const [sk, setsk] = useState(null)
    const [tech, setTech] = useState(null)
    const con = useContext(packContext)
    async function getData() {
        await api.get(
            '/skills/',
        )
            .then((response) => {
                setsk(response.data)
            })
        await api.get(
            '/tech/',
        )
            .then((response) => {
                setTech(response.data)
            })
    }
    useEffect(() => {
        getData()
    }, [])
    // getting techs
    function techs(j) {
        let ele = []
        for (let i = 0; i < tech?.length; i++) {
            if (tech[i].id === sk[j].tech) {
                ele.push(
                    <div id='title'>
                        <img id='skillimg' width='60em' src={con.link + tech[i].tlogo} alt={tech[i].title} />
                        <h2 id='skillname'>&nbsp;{tech[i].title}</h2>
                    </div>
                )
            }
        }
        return (ele)
    }
    const ref = useRef(null)

    // creating skillcards
    function createcards() {
        let ele = []
        for (var i = 0; i < sk?.length; i += 1) {
            function strips() {
                let el = []
                if (sk[i].certification !== '') {
                    el.push(
                        <a target='/' href={con.link + sk[i].cerimg}>
                            <div id='inline'>
                                <img width='30rem' src={con.link + sk[i].cerlogo} alt="" />
                                &nbsp;{sk[i].certification}&nbsp;
                                <FaExternalLinkSquareAlt />
                            </div>
                        </a>
                    )
                }
                if (sk[i].experience !== '') {
                    el.push(
                        <div id='inline'>{sk[i].experience}&nbsp;years of experience</div>
                    )
                }
                if (sk[i].achievement !== '') {
                    el.push(
                        <div id='inline'>{sk[i].achievement}</div>
                    )
                }
                return (el)
            }

            ele.push(
                <>
                    <motion.div whileHover={{ scale: 1.04 }} onHoverStart={e => { }} onHoverEnd={e => { }} id='skillcard'>
                        {techs(i)}
                        <div id='other'>
                            {strips()}
                        </div>

                    </motion.div></>
            )
        }
        if (ref.current){
            ref.current.style.display = 'none'
        }
        return (ele)
    }


    return (
        <div id='inner'>
            {createcards()}
            <div id='skeleton' ref={ref}>
                <div id='loading' >
                    <div id='loimg'>

                    </div>
                    <div id='lostrip'></div>
                    <div id='lostrip'></div>
                    <div id='lostrip'></div>
                </div>
                <div id='loading' >
                    <div id='loimg'>

                    </div>
                    <div id='lostrip'></div>
                    <div id='lostrip'></div>
                    <div id='lostrip'></div>
                </div>
                <div id='loading' >
                    <div id='loimg'>

                    </div>
                    <div id='lostrip'></div>
                    <div id='lostrip'></div>
                    <div id='lostrip'></div>
                </div>
            </div>
        </div >
    )
}
