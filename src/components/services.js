import React, { useEffect, useRef } from 'react'
import './css/services.css'
import Packge from './packge'
import { SiPagespeedinsights } from 'react-icons/si'
import { FaMobile,FaTools } from 'react-icons/fa'


export default function Services() {
    
    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
    const ref4 = useRef()
    function open(to) {
        if (to === 1) {
            ref1.current.style.display = 'block'
            ref2.current.style.display = 'none'
        }
        else {
            ref2.current.style.display = 'block'
            ref1.current.style.display = 'none'
        }
    }

    return (
        <div id='this'>
            <div id='li'>
                <div id='web' onClick={() => {open(1)}} className='service'>
                    <h4><SiPagespeedinsights />&nbsp;web developement</h4>
                </div>
                <div id='app' onClick={() => {open(2)}} className='service'>
                    <h4><FaMobile />&nbsp;app developement</h4>
                </div>
                <div id='app' onClick={() => {}} className='service'>
                    <h4><FaTools />&nbsp;custom services</h4>
                </div>
            </div>
            <div id='webc' ref={ref1}>
                <Packge />
            </div>
            <div id='appc' ref={ref2} style={{'color':'white','display': 'none'}}>
                <h1>coming soon</h1>
            </div>
        </div>
    )
}
