import React from 'react'
import Textfield from './textfield'
import Button from './button'

export default function Quote() {
  return (
    <div>
      <div id='form1'>
        <Textfield type = 'email' text2 = 'please enter your email'/>
        <Textfield type = 'email' text2 = 'please enter your email'/>
        <Button text = 'send message' color = 'green'/>
      </div>
    </div>
  )
}
