import React from 'react'
import { motion } from 'framer-motion'
import './css/header.css'
import { FaFileMedicalAlt, FaHamburger } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import { BsPersonCircle, BsCartCheckFill } from 'react-icons/bs'
import { AiFillFire } from 'react-icons/ai'
import { useRef } from 'react'

export default function Header() {
  const nav = useRef(null)
  const btns = useRef(null)

  function hamburger() {

    if (nav.current.offsetHeight === 81) {
      nav.current.style.animation = 'navgrow 0.5s forwards'
    } else {
      nav.current.style.animation = 'navshrink 0.5s forwards'
    }
  }
  return (
    <div>
      <nav id='navbar' ref={nav}>
        <div id='logo'>
        </div>
        <div>
          <div id='dropdown' onClick={hamburger}>
            <FaHamburger />
          </div>
        </div>
        <div className='dropdownoptions' ref={btns}>
          <a href="/" style={{'textDecoration': 'none'}}><motion.div id='navbtn' whileHover={{ scale: 1.08 }} onHoverStart={e => { }} onHoverEnd={e => { }} whileTap={{ scale: 0.8 }}><AiFillHome />Home</motion.div></a>
          <a href="/hireme" style={{'textDecoration': 'none'}}><motion.div id='navbtn' whileHover={{ scale: 1.08 }} onHoverStart={e => { }} onHoverEnd={e => { }} whileTap={{ scale: 0.8 }}><BsPersonCircle />Hire Me</motion.div></a>
          <a href='/resume' target='/' style={{'textDecoration': 'none'}}><motion.div id='navbtn' whileHover={{ scale: 1.08 }} onHoverStart={e => { }} onHoverEnd={e => { }} whileTap={{ scale: 0.8 }}><FaFileMedicalAlt />Resume</motion.div></a>
          <a href="/services" style={{'textDecoration': 'none'}}><motion.div id='navbtn' whileHover={{ scale: 1.08 }} onHoverStart={e => { }} onHoverEnd={e => { }} whileTap={{ scale: 0.8 }}><AiFillFire />Services</motion.div></a>
          <a href="/yourorders" style={{'textDecoration': 'none'}}><motion.div id='navbtn' whileHover={{ scale: 1.08 }} onHoverStart={e => { }} onHoverEnd={e => { }} whileTap={{ scale: 0.8 }}><BsCartCheckFill />Your Orders</motion.div></a>
        </div>
      </nav>
    </div>
  )
}

