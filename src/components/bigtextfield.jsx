import React from 'react'

export default function Bigtextfield(props) {
    return (
        <div className='blk' style={props.style}>
            <label htmlFor="">{props.text1}</label>
            <textarea id='ta' rows={props.rows} cols= {props.cols} className='ffields' size={props.ml} type={props.type} placeholder={props.text2} onChange={props.oc} />
        </div>
    )
}
