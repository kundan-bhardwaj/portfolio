import React from 'react'
import './css/social.css'

export default function Social() {
  return (
    <div id='scont'>
        <img className='simgs' src={require('./images/instagram.png')} alt="" />
        <img className='simgs' src={require('./images/likedin.png')} alt="" />
        <img className='simgs' src={require('./images/github.png')} alt="" />
        <img className='simgs' src={require('./images/stackoverflow.png')} alt="" />
        <img className='simgs' src={require('./images/fivrr.png')} alt="" />
        <img className='simgs' src={require('./images/telegram.png')} alt="" />
        <img className='simgs' src={require('./images/freelancer.png')} alt="" />
    </div>
  )
}
