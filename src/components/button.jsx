import React from 'react'
import './css/button.css'

export default function Button(props) {

    return (
        <a target={props.target} href={props.to} style={{'textDecoration': 'none'}}><div className='btn' id={props.color} onClick={props.oc} type = {props.type}>{props.icon}&nbsp;{props.text}</div></a>
    )
}
export function FncyBtn1(props){
    return (
        <a target={props.target} href={props.to} style={{'textDecoration': 'none','width': 'minContent'}}><div className='fancy1' id={props.color} onClick={props.oc} type = {props.type}>{props.icon}&nbsp;{props.text}</div></a>
    )
}
