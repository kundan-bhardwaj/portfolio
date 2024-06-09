import React from 'react'
import Textfield from './textfield'
import Button from './button'
import send_mail from '../tools/emails'
import { useState } from 'react'
import './css/quote.css'
import Bigtextfield from './bigtextfield'


export default function Quote() {
  const [name, setname] = useState(null)
  const [email, setemail] = useState(null)
  const [message, setmessage] = useState(null)  
  function send(){
    let message1 = `${name} tried to reach you.
    he gave message<br />
    <hr />
    ${message}.
    <hr />
    his mail is ${email}`
    send_mail('quote from someone',message1)
  }
  return (
    <div>
      <div id='form1'>
        <Textfield type = 'text' text2 = 'your name' oc = {(e) => {setname(e.target.value)}}/>
        <Textfield type = 'email' text2 = 'please enter your email' oc = {(e) => {setemail(e.target.value)}}/>
        <Bigtextfield type = 'text' text2 = 'message' height = '20rem' rows = {3} cols = {35} oc = {(e) => {setmessage(e.target.value)}}/>
        
      </div>
      <Button text = 'Send Message' color = 'green' oc = {send}/>
    </div>
  )
}
