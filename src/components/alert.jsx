import React from 'react'
import './css/alert.css'
import { ImCross } from 'react-icons/im'
import { useState } from 'react'
import { useEffect } from 'react'
export default function Alert(props) {
    const [state, setState] = useState('')
    let style = {
        'display': state,
        'color': props.color
    }
    function handleClose() {
        setState('none')
    }
    useEffect(() => {
        let time = setTimeout(() => { handleClose() }, 5000)
        return () => { clearTimeout(time) }
    }, [])
    return (
        <dialog open id='container' style={style}>
            {props.text}
            <ImCross onClick={handleClose} />
        </dialog>
    )
}
