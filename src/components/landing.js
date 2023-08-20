import React from 'react'
import './css/landing.css'
import Packge from './packge'
import Projects from './projects'
import Skillcards from './skillcards'

export default function Landing() {
    return (
        <div id='landing'>
            <div id='content'>
                <div id='text'>
                    <h1 id='title'>Unlocking the potential of technology, I design and develop software solutions that drive efficiency and empower businesses.</h1>
                    <a href="/quote" style={{'textDecoration': 'none'}}><div id='quote'>Get a Quote</div></a>
                </div>
                <div id='image'>
                    <img id='avtar' src={require('./images/avtar.avif')} alt="" />
                </div>
            </div>

            <div id='profession'>
                <div id='prtitle'>
                    <img width='100vmax' src={require("./images/codr.png")} alt="" />
                    <h1 id='textpr'>Have a look at my skills</h1>
                </div>
                <Skillcards />
            </div>
            <div id='profession'>
                <div id='prtitle'>
                    <img src={require("./images/rocket.png")} width='75vmax' alt="no" />
                    <h1 id='textpr'>Boost Your Business Today</h1>
                </div>
                <Packge />
            </div>
            <div id='profession'>
                <div id='prtitle'>
                    <img src={require("./images/project.png")} width='75vmax' alt="no" />
                    <h1 id='textpr'>Have a look at my previous projects</h1>
                </div>
                <Projects />
            </div>
        </div>
    )
}