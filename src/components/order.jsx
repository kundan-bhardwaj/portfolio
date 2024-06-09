import React, { useState } from 'react'
import './css/order.css'
import Textfield from './textfield'
import api from '../tools/server'
import { ToastContainer,toast } from 'react-toastify'
import send_mail from '../tools/emails'
import Button from './button'
import Bigtextfield from './bigtextfield'



export default function Order(props) {

    // handling order
    const [goals, setGoals] = useState(null)
    const [time, setTime] = useState(null)
    const [questions, setQuestion] = useState(null)
    const [audience, setAudience] = useState(null)
    // sendig data

    function createOrder() {
        api.post(
            '/orders/',
            {
                'objectives': goals,
                'timeline': time,
                'questions': questions,
                'audience': audience
            },
        ).then((response) => {
            if (response.data == 'auth') {
                window.location.href = '/auth'
            }else{
                toast.success(response.data)
                window.location.href = '/'
            }
        })
        let message = `<p>Greetings you got an order from someone, their goals and objectives are <b>${goals}</b><hr />
        <p>they want this to be done in</p><b>${time}</b>,
        <p>their questions and concerns are </p><b>${questions}</b>,
        <p>their target audience is </p><b>${audience}</b> `
        send_mail('Order From Someone', message)
    }

    return (
        <>
            <div id='order'>
                <Textfield text1='Timeframe' text2='timeline for completion' oc={(e) => { setTime(e.target.value) }} />
                <Bigtextfield cols={35} text1='Goals and Objectives' text2='Goals and Objectives' oc={(e) => { setGoals(e.target.value) }} />
                <Bigtextfield cols={35} text1='Questions and Concerns' oc={(e) => { setQuestion(e.target.value) }} ml={40} />
                <Bigtextfield cols={35} text1='Target Audience' oc={(e) => { setAudience(e.target.value) }} ml={40} />

            </div>
            <div id='btncc'>
                <Button text='Place Order' color='yellow' oc={createOrder} />
            </div>
        </>
    )
}
