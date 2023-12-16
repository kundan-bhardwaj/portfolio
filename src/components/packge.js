import React, { useContext } from 'react'
import { BsBookmarkFill, BsCartFill } from 'react-icons/bs'
import { motion } from 'framer-motion'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Alert from './alert.js'
import packContext from '../context/create.js'
import Button from './button.js'

export default function Packge() {
    const [slips, setSlips] = useState(null);
    const [packages, setPackage] = useState(null);

    // pack context
    const oredr = useContext(packContext)


    // create packges
    function getdata() {
        axios({
            method: 'GET',
            url: 'http://127.0.0.1:8000/slips/'
        }).then((response) => {
            const data = response.data
            setSlips(data)

        })
        axios({
            method: 'GET',
            url: 'http://127.0.0.1:8000/packages/'
        }).then((response) => {
            setPackage(response.data)
        })

    }
    useEffect(() => {
        getdata()
    }, [])


    function createslips(slips, num) {
        let ele = [];
        for (var i = 0; i < slips?.length; i += 1) {
            if (num == slips[i]?.package_no) {
                if (slips[i].isOption === false) {
                    ele.push(
                            <div id='inline'>
                                <label htmlFor="">{slips[i].text}&nbsp;</label>
                                <img height='20em' src={'http://127.0.0.1:8000' + slips[i].images} alt="" />
                            </div>
                    )
                }
                else {
                    if (slips[i].available === true) {
                        ele.push(

                            <div id='inline'>
                                <label htmlFor="">{slips[i].text} &nbsp;</label>
                                <img width='18vmax' src={require('./images/true.png')} alt="" />
                            </div>
                        )
                    }
                    else {
                        ele.push(
                            <div id='inline'>
                                <label htmlFor="">{slips[i].text} &nbsp;</label>
                                <img width='18vmax' src={require('./images/false.png')} alt="" />
                            </div>

                        )
                    }
                }
            }
        }
        return (ele)
    }
    function createpackage(packages) {
        let ele = []
        for (let i = 0; i < packages?.length; i++) {
            ele.push(
                <div id='cards'>
                    <div id='shortinfo'>
                        <img src={'http://127.0.0.1:8000' + packages[i].banner} id='simg' alt="" />
                        <h2>{packages[i].title}</h2>
                        <h2></h2>
                        <div id='slipcont'>
                        {createslips(slips, packages[i]?.package_no)}
                        </div>
                        <div id='btnc'>
                            <Link style={{ 'textDecoration': 'none' }} to='/order' onClick={() => { oredr.change('http://127.0.0.1:8000' + packages[i].banner, packages[i].title, 10, packages[i].id) }}><Button icon={<BsCartFill />} text={'order now'} color='yellow' /></Link>
                        </div>
                    </div>
                </div>
            )
        }
        return (ele)
    }
    return (
        <div id='packagecont'>
            {createpackage(packages)}
        </div>
    )
}
