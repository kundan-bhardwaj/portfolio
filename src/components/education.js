import React from 'react'
import './css/education.css'
import Progress from './progress'
import api from '../tools/server'
import {MdElectricBolt} from 'react-icons/md'

export default function Education() {

    return (
        <div id='edc'>
            <div id='upper'>
                <img src={require('./images/codr.png')} width='100rem' alt="" />
                <div id='ed'>
                    <h1>this is a heading</h1>
                </div>
            </div>
            <div id='inline'>
                <MdElectricBolt/>&nbsp;
                <b>B.Tech electrical engneering</b>
            </div>
            <div id='cc'>
                <div id='contents'>
                    <h2>Matriculation</h2>
                    <Progress value={88.4} />
                </div>
                <div id='contents'>
                    <h2>12th</h2>
                    <Progress value={90} />
                </div>
            </div>
        </div>
    )
}
