import React from 'react'
import './css/landing.css'
import Projects from './projects'
import Skillcards from './skillcards'
import Middle from './middle'
import Social from './social'


export default function Landing() {
    return (
        <div id='landing'>
            <div id='content'>
            <div className='owl' id='owl3'></div>
                <div id='topframe'>
                    <div id='intext'>
                        <h1 id='hello'>Hi! There, Myself Kundan Bhardwaj </h1>
                        <h4 id='title'>Unlocking the potential of technology, I design and develop software solutions that drive efficiency and empower businesses.</h4>
                    </div>
                    <div id='image'>
                        <img id='avtar' src={require('./images/avtar.avif')} alt="" />
                    </div>
                </div>
                <a href="/quote" style={{ 'textDecoration': 'none' }}><div id='quote'>Get a Quote</div></a>
            </div>
            <div id='profession'>
                <div id='prtitle'>
                    <div id='hash'><img width='40vmax' src={require("./images/pencil.png")} alt="" /></div>
                    <h1 id='textpr'>My Skills</h1>
                </div>
                <Skillcards />
            </div>
            <div id='profession'>
                <div id='prtitle'>
                    <div id='hash'><img src={require("./images/planning.png")} width='50vmax' alt="no" /></div>
                    <h1 id='textpr'>Previous Projects</h1>
                </div>
                <Projects />
            </div>
            <Middle />
            <Social />
        </div>
    )
}