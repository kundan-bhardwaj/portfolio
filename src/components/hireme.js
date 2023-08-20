import React from 'react'
import './css/hireme.css'
import Offer from './offer'


export default function Hireme() {
    return (
        <div id='body'>
            <div id='block'>
            <div id='current'>
                <div id='available'>
                    <img width='80rem' src={require('./images/work.png')} alt="" />
                    <h1>&nbsp;currently I am open to work</h1>
                </div>
            </div>
            <Offer/>
            </div>
            
        </div>
    )
}