import axios from 'axios'
import './css/projects.css'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Button from './button'
import { GoLinkExternal } from 'react-icons/go'

export default function Projects() {
    const [pack, setPack] = useState(null)
    const [tech, setTech] = useState(null)

    // create projects
    function getdata() {
        axios({
            method: 'GET',
            url: 'http://127.0.0.1:8000/projects/'
        }).then((response) => {
            setPack(response.data)
        })
        axios({
            method: 'GET',
            url: 'http://127.0.0.1:8000/tech/'
        }).then((response) => {
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
                        <img width='25em' src={'http://127.0.0.1:8000' + tech[i].tlogo} alt="" />
                    )
                }
            }
        }
        return (ele)
    }



    function create() {
        let ele = []
        for (var i = 0; i < pack?.length; i += 1) {
            ele.push(
                <div id='projc'>
                    <img id='pimg' src={'http://127.0.0.1:8000' + pack[i].pimg} alt="" />
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
        return (ele)
    }


    return (
        <>
            <div id='projscroll'>
                {create()}
            </div>
        </>
    )
}
