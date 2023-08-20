import axios from 'axios'
import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import './css/skillcard.css'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { motion } from 'framer-motion'
import Progress from './progress'
export default function Skillcards() {
    // fetch data 
    const [sk, setsk] = useState(null)
    const [tech, setTech] = useState(null)
    function getData() {
        axios({
            method: 'GET',
            url: 'http://127.0.0.1:8000/skills/',
        }).then((response) => {
            setsk(response.data)
        })
        axios({
            method: 'GET',
            url: 'http://127.0.0.1:8000/tech/',
        }).then((response) => {
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
                        <img id='skillimg' width='60em' src={'http://127.0.0.1:8000' + tech[i].tlogo} alt={tech[i].title} />
                        <h2>&nbsp;{tech[i].title}</h2>
                    </div>
                )
            }
        }
        return (ele)
    }


    // dialog
    
    function handleClose(id) {
        document.getElementById(id).style.display = 'none'
    }
    function open(id) {
        document.getElementById(id).style.display = 'flex'
    }
    // creating skillcards
    function createcards() {
        let ele = []
        for (var i = 0; i < sk?.length; i += 1) {
            function strips() {
                let el = []
                if (sk[i].certification !== '') {
                    el.push(
                        <div id='inline' onClick={() => {open(sk[i]?.certification)}}>
                            <img width='30rem' src={'http://127.0.0.1:8000' + sk[i].cerlogo} alt="" />
                            &nbsp;certification from&nbsp;{sk[i].certification}&nbsp;
                            <FaExternalLinkSquareAlt />
                        </div>
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
            let src = 'http://127.0.0.1:8000' + sk[i].cerlogo
            ele.push(
                <>
                    <dialog id={sk[i].certification} className='dlg' style={{ 'display': 'none' }}>
                        <div id='dismiss' onClick={() => {handleClose(sk[i]?.certification)}}><ImCross /></div>
                        <img width='1000rem' src={src} alt={src} />
                    </dialog>
                    <motion.div whileHover={{ scale: 1.04 }} onHoverStart={e => { }} onHoverEnd={e => { }} id='skillcard'>
                        {techs(i)}
                        <div id='other'>
                            {strips()}
                        </div>

                    </motion.div></>
            )
        }

        return (ele)
    }


    return (
        <div id='inner'>
            {createcards()}
        </div>
    )
}
