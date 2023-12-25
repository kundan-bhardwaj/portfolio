import React, { useContext, useEffect, useRef, useState } from 'react'
import './css/auth.css'
import api from '../tools/server'
import Textfield from './textfield'
import Button from './button'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import packContext from '../context/create'

export default function Auth(props) {

    //jwt tokens
    let tokens = useContext(packContext)

    //signup form
    const [firstname, setFirstname] = useState(null)
    const [lastname, setLastname] = useState(null)
    const [email, setEmail] = useState(null)
    const [password1, setPas1] = useState(null)
    const [password2, setPas2] = useState(null)

    //axios create user
    async function submitreg(event) {
        await api.post(
            '/register/',
            {
                'firstname': firstname,
                'lastname': lastname,
                'email': email,
                'password': password1
            }
        )
        .then((response) => {
                toast.success(response.data.message)
            })
        .catch((error) => {
                toast.error(error)
            })
        tokens?.handleTokens(firstname,password1)
        event.preventDefault()
    }



    // login form
    const [id, setId] = useState(null)
    const [password, setPass] = useState(null)

    // axios login
    async function submitlog(event) {
        await api.post(
            '/login/',
            {
                'ID': id,
                'password': password
            },
            
        )
            .then((response) => {
                toast.success(response.data.message)
            })
            .catch((error) => {
                toast.error(error)
            })
        event.preventDefault()
    }
    // toggle navigation
    const ref1 = useRef()
    const ref2 = useRef()
    function open(to) {
        if (to === 1) {
            ref1.current.style.display = 'block'
            ref2.current.style.display = 'none'
        }
        else {
            ref2.current.style.display = 'block'
            ref1.current.style.display = 'none'
        }
    }

    return (
        <div id='authc'>
            <div id='toogle'>
                <div id='tbtn' onClick={() => { open(1) }}>
                    Log In
                </div>
                <div id='tbtn' onClick={() => { open(2) }}>
                    Register
                </div>
            </div>
            <form method='post' className='tile' id='lgc' ref={ref1} style={{ 'display': 'none' }}>
                <div className='hc'>
                    <img className='hlogo' src={require('./images/login.png')} alt="" />
                    <h1>&nbsp;&nbsp;Log In</h1>
                </div>
                <div>
                    <Textfield text1='Email Id' text2='email id' type='email' oc={(e) => { setId(e.target.value) }} />
                    <Textfield text1='Password' text2='password' type='password' oc={(e) => { setPass(e.target.value) }} />
                </div>&nbsp;&nbsp;
                <a onClick={() => { open(2) }}>Don't have an account? Register.</a>
                <hr />
                <Button text='Submit' color='cyan' type='submit' oc={submitlog} />
            </form>
            <form method='post' className='tile' id='lgc' ref={ref2} >
                <div className='hc'>
                    <img className='hlogo' src={require('./images/register.png')} alt="" />
                    <h1>&nbsp;&nbsp;Register</h1>
                </div>
                <div>
                    <Textfield text1='first name' text2='first name' type='text' oc={(e) => { setFirstname(e.target.value) }} />
                    <Textfield text1='last name' text2='last name' type='text' oc={(e) => { setLastname(e.target.value) }} />
                    <Textfield text1='Email Id' text2='email id' type='text' oc={(e) => { setEmail(e.target.value) }} />
                    <Textfield text1='password' text2='password' type='password' oc={(e) => { setPas1(e.target.value) }} />
                    <Textfield text1='confirm password' text2='confirm password' type='password' oc={(e) => { setPas2(e.target.value) }} />
                </div>&nbsp;&nbsp;
                <a onClick={() => { open(1) }}>Already have an account? Log In</a>
                <hr />
                <Button color='cyan' text='Submit' type='submit' oc={submitreg} />
            </form>
        </div>
    )
}
