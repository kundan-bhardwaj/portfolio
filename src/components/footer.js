import React from 'react'
import './css/footer.css'
export default function footer() {
    return (
        <footer id='footer'>
            <div id='last'>
                <div id='upper'>
                    <div id='social'>
                        <a href=""><img width='30vmax' src={require('./images/linkedin.png')} alt="" /></a>
                        <a href=""><img width='30vmax' src={require('./images/telegram.png')} alt="" /></a>
                        <a href=""><img width='30vmax' src={require('./images/instagram.png')} alt="" /></a>
                        <a href=""><img width='30vmax' src={require('./images/youtube.png')} alt="" /></a>
                    </div>
                    <div id='logo'>
                        <h3>kundan bahrdwaj</h3>
                    </div>
                </div>
                <div id='cpr'>
                    <h5>copyright © all rights reserved</h5>
                </div>
                <a href="/education">education</a>
                <a href="/about">About Me</a>
            </div>
        </footer>
    )
}
