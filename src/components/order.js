import React, { useContext, useRef, useState } from 'react'
import packContext from '../context/create'
import './css/order.css'
import Textfield from './textfield'
import api from '../tools/server'
import axios from 'axios'
import Button from './button'
import { toast } from 'react-toastify'


export default function Order(props) {
    const content = useContext(packContext)

    // handling order
    const [Id,setId] = useState(null)
    const [goals,setGoals] = useState(null)
    const [time,setTime] = useState(null)
    const [questions,setQuestion] = useState(null)
    const [audience,setAudience] = useState(null)

    // sendig data
    const access = useContext(packContext)
    function createOrder() {

        api.post(
            '/placeorder/',
            {
                'product_id': Id,
                'goals': goals,
                'time': time,
                'questions': questions,
                'audience': audience   
            },
            {
                headers: {
                    Authorization: `Bearer ${(JSON.parse(localStorage.getItem('authtokens'))).access}`
                }
            }
            
        ).catch((error) => {
            toast.error(error.message)
        })
    }


    // handling popup
    const dlgref = useRef()
    function open() {
        dlgref.current.showModal()
        setId(content.data.id)
    }
    function close() {
        dlgref.current.close()
        
    }

    const btnRef = useRef()
    if (btnRef.current){
        btnRef.current.disabled = true
    }
    if (content.data) {
        return (
            <>
                <div id='order'>
                    <div id='order_req'>
                        <Textfield text1='Goals and Objectives' text2='Goals and Objectives' oc = {(e) => {setGoals(e.target.value)}}/>
                        <Textfield text1='Timeframe' text2='timeline for completion' oc = {(e) => {setTime(e.target.value)}}/>
                        <Textfield text1='Questions and Concerns' oc = {(e) => {setQuestion(e.target.value)}} ml = {40}/>
                        <Textfield text1='Target Audience' oc = {(e) => {setAudience(e.target.value)}} ml = {40}/>
                        <Button text = 'Place Order' color = 'purple' oc = {open}/>
                        <div id='info'>ⓘ the price can be adjusted later </div>
                    </div>
                    <div id='pack'>
                        <img width='265em' src={content.data?.image} alt="" />
                        <h1>{content.data?.title}</h1>
                        <h2>{content.data?.price}</h2>
                    </div>
                </div>
                <dialog ref={dlgref} id='dlg2'>
                    <h3>you will get all the updates including meeting links, content uploads etc. on the notifications section which you can see on the navbar you will also get these notifications on your registerd email.</h3>
                    <br /> 
                    <label htmlFor="" ><input type="checkbox" style={{'transform': 'scale(1.5)'}}/>&nbsp;I am aware of the points mentioned above</label>
                    <Button  text = 'Close' oc = {createOrder} color = 'green'/>
                </dialog>
            </>
        )
    }
    else {
        return (
            <div id='order'>
                <h1>something went wrong</h1>
            </div>
        )
    }
}
