import React from 'react'
import './css/landing.css'
import Packge from './packge'
import Projects from './projects'
import Skillcards from './skillcards'
import Middle from './middle'
import Social from './social'


export default function Landing() {
    return (
        <div id='landing'>
            <div id='content'>
                <div className='owl' id='owl3'></div>
                <div id='text'>
                    <div id='intext'>
                        <h1 id='hello'>Hi! There, Myself Kundan Bhardwaj </h1>
                        <h4 id='title'>Unlocking the potential of technology, I design and develop software solutions that drive efficiency and empower businesses.</h4>
                    </div>
                    <a href="/quote" style={{ 'textDecoration': 'none' }}><div id='quote'>Get a Quote</div></a>
                </div>
                <div id='image'>
                    <img id='avtar' src={require('./images/avtar.avif')} alt="" />
                </div>
            </div>
            <div id='profession'>
                <div id='prtitle'>
                    <img width='80vmax' src={require("./images/pencil.png")} alt="" />
                    <h1 id='textpr'>My Skills</h1>
                </div>
                <Skillcards />
            </div>
            <div id='profession'>
                <div id='prtitle'>
                    <img src={require("./images/rocket.png")} width='75vmax' alt="no" />
                    <h1 id='textpr'>Previous Projects</h1>
                </div>
                <Projects />
            </div>
            <Middle />
            <div id='profession'>
                <div id='prtitle'>
                    <img src={require("./images/project.png")} width='75vmax' alt="no" />
                    <h1 id='textpr'>Packages</h1>
                </div>
                <Packge />
            </div>
            <Social />
        </div>
    )
}