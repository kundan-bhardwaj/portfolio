import React from 'react'
import './css/middle.css'


export default function Middle() {
  return (
    <div id='buttoncont'>
      <a href="/hireme" style={{ 'textDecoration': 'none' }}>
        <div className='bigbtn'>
          <img className='bbimg' src={require('./images/new-hire.png')} alt="" />
          Hire Me
        </div>
      </a>
      <a href='/resume' target='/' style={{ 'textDecoration': 'none' }}>
        <div className='bigbtn'>
          <img className='bbimg' src={require('./images/cv.png')} alt="" />
          Resume
        </div>
      </a>
      <a href="/services" style={{ 'textDecoration': 'none' }}>
        <div className='bigbtn'>
          <img className='bbimg' src={require('./images/customer-service.png')} alt="" />
          Services
        </div>
      </a>
      <a href="/education" style={{ 'textDecoration': 'none' }}>
        <div className='bigbtn'>
          <img className='bbimg' src={require('./images/homework.png')} alt="" />
          Education
        </div></a>
    </div>

  )
}
