import React from 'react'
import './css/offer.css'
import Textfield from './textfield'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import Button from './button'
import send_mail from '../tools/emails'



export default function Offer() {
    // hiring details
    const [position, setPosition] = useState(null)
    const [orgname, setOrgname] = useState(null)
    const [orgdc, setOrgdc] = useState(null)
    const [daily,setDaily] = useState(null)
    const [money, setMoney] = useState(null)
    const [type, setType] = useState(null)
    const [mode, setMode] = useState(null)
    const [location, setLocation] = useState('not specified')
    const [link, setLink] = useState(null)
    const [dc,setDc] = useState(null)

    // sending emails

    function send() {
        let message = `<p>Greetings you got an oppertunity for the position of <b>${position}</b> in ${orgname}(${orgdc}) 
    they are offering <b>${money}LPA</b>,
    you have to work ${daily} hours every day type of job is ${type}, 
    this is a ${mode} oppertunity, location is ${location},
    you can visit their org. from
    this link ${link}</p>
    they have provided some information given below:
    <hr/>${dc}`
        if (position,money,mode){
            send_mail('Hiring Letter', message)
        }
        toast.info('message sent successfully !!')
    }

    // handling location

    let dis = 'none'
    if (mode !== 'remote') {
        dis = 'inline-flex'
    }

    return (
        <div>
            <div>
                <div id='cont'>
                    <Textfield text1='position' text2='position' type='text' oc = {(e) => {setPosition(e.target.value)}}/>
                    <Textfield text1='Work time hours(per day)' text2='work time hours' type='text' oc = {(e) => {setDaily(e.target.value)}}/>
                    <div className='blk'>
                        <label htmlFor="">Job Type</label>
                        <select className='ffields' onChange = {(e) => {setType(e.target.value)}}>
                            <option value="">__select__</option>
                            <option value="onsite">Full Time</option>
                            <option value="remote">Part Time</option>
                            <option value="hybrid">Contract</option>
                        </select>
                    </div>
                    <Textfield text1='Give short discription about this opportunity' text2='discription' type='text' oc = {(e) => {setDc(e.target.value)}}/>
                    <div className='blk'>
                        <label htmlFor="">Mode of work</label>
                        <select className='ffields' name="" id="" onChange={(e) => { setMode(e.target.value) }}>
                            <option value="">__select__</option>
                            <option value="onsite">onsite</option>
                            <option value="remote">remote</option>
                            <option value="hybrid">hybrid</option>
                        </select>
                    </div>
                    <Textfield style={{ 'display': dis }} text1='Please specify location' text2='location' type='text' oc = {(e) => {setLocation(e.target.value)}}/>
                    <Textfield text1='Name of your organization' text2='org. name' type='text' oc = {(e) => {setOrgname(e.target.value)}}/>
                    <Textfield text1='Any link to visit your org.' text2='link' type='text' oc = {(e) => {setLink(e.target.value)}}/>
                    <Textfield text1='Give a short discription about your organization' text2='short discription' type='text' oc = {(e) => {setOrgdc(e.target.value)}}/>
                    <Textfield text1='Rough figure of CTC you will offer' text2='CTC' type='text' oc = {(e) => {setMoney(e.target.value)}}/>
                </div>
                <div>
                    <Button to = '/' color = 'green' text = 'Send Message' oc = {send}/>
                </div>
                <div id='info'>ⓘ we will discuss further very soon</div>
            </div>
        </div>
    )
}
