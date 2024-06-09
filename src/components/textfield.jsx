import React from 'react'
import './css/textfield.css'
export default function Textfield(props) {
    return (
        <div className='blk' style={props.style}>
            <label htmlFor="">{props.text1}</label>
            <input className='ffields' size={props.ml} type={props.type} placeholder={props.text2} onChange={props.oc}/>
        </div>
    )
}
