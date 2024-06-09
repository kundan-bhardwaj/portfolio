import { useContext, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import api from '../tools/server'
import { FncyBtn1 } from './button'
import './css/services.css'
import packContext from '../context/create'


export default function Services() {
    const [Service, setService] = useState(null)
    const [Attrs, setAttrs] = useState(null)
    const con = useContext(packContext)
    async function getData() {
        await api.get(
            '/getservice/',
        )
            .then((response) => {
                setService(response.data.services)
                setAttrs(response.data.attrs)
            })
    }
    useEffect(() => {
        getData()
    }, [])
    const ref = useRef(null)
    function create() {
        let ele1 = []
        let ele2 = []
        for (var i = 0; i < Service?.length; i++) {

            for (var j = 0; j < Attrs[i]?.length; j++) {
                ele1.push(
                    <div id='keyfeature'>
                        <img loading='lazy' id='fimg' src={con.link + Attrs[i][j].image} alt="" />
                        <div id='ftxt'>
                            <label htmlFor="" id='ftxthead'>{Attrs[i][j].title}</label>
                            <label htmlFor="">{Attrs[i][j].discription}</label>
                        </div>
                    </div>
                )
            }
            ele2.push(
                <div id='webdev'>
                    <div id='desc'>
                        <h1>{Service[i].title}</h1>
                        <div id='servicebuttons'>
                            {ele1}
                        </div>
                        <p>
                            {Service[i].discription}
                        </p>
                        <FncyBtn1 text='Get this service' to='/order' />

                    </div>
                    <img loading='lazy'  id='webdevimg' src={con.link + Service[i].banner} alt="" />
                </div>
            )
        }
        if (ref.current){
            ref.current.style.display = 'none'
        }
        return ele2
    }
    return (
        <div id='services'>

            <div>
                {create()}
            </div>
            <div id='sloading' ref={ref}>
                
                <div id='lobc'>
                    <div id='loblock'></div>
                    <div id='loblock'></div>
                    <div id='loblock'></div>
                    <div id='loblock'></div>
                </div>
                <div id='sloimg'></div>
            </div>
        </div>
    )
}
