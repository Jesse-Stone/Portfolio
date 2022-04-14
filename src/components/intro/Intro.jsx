import React, { useState, useEffect } from 'react';
import "./Intro.css"
import jesse5 from "../../img/jesse5.png"
import MouseIcon from "../../img/Mouse.svg"
import { debounce } from '../../utilities/helpers'

const Intro = () => {

const [prevScrollPos, setPrevScrollPos] = useState(0);
const [visible, setVisible] = useState(true);

const handleScroll = debounce(() => {
const currentScrollPos = window.pageYOffset;

setVisible(currentScrollPos < 60);

setPrevScrollPos(currentScrollPos);
}, 100);

useEffect(() => {
window.addEventListener('scroll', handleScroll);

return () => window.removeEventListener('scroll', handleScroll);

}, [prevScrollPos, visible, handleScroll]);

const mouseStyle = {
    width: '40px',
    height: '40px',
    position: 'absolute',
    bottom: '20px',
    transition: 'bottom 1s',
}
    return (
        <div className="intro">
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2 className="intro-intro">Hello, My name is</h2>
                    <h1 className="intro-name">Jesse Stone</h1>
                    <div className="intro-title">
                        <div className="intro-title-wrapper">
                            <div className="intro-title-item">Web Developer</div>
                            <div className="intro-title-item">Data Scientist</div>
                            <div className="intro-title-item">Musician</div>
                            <div className="intro-title-item">Builder</div>
                            <div className="intro-title-item">Gamer</div>
                        </div>
                    </div>
                    <p className="intro-description">                       
                    A long time ago, in a galaxy far, far, away...

               A vast sea of stars serves as the backdrop for the main title. 
               War drums echo through the heavens as a rollup slowly crawls 
               into infinity.

                    It is a period of civil war. Rebel spaceships, 
                    striking from a hidden base, have won their first 
                    victory against the evil Galactic Empire.

                    During the battle, Rebel spies managed to steal 
                    secret plans to the Empire's ultimate weapon, the 
                    Death Star, an armored space station with enough 
                    power to destroy an entire planet.   
                    
                    </p>
                </div>

                <img src={MouseIcon} style={{ ...mouseStyle, bottom: visible ? '0px' : '-500px' }} alt="" className="intro-scroll" />  
           
            </div>
            <div className="intro-right">
                <div className="intro-bg"></div>
                <img src={jesse5} alt="" className="intro-image" />
            </div>
        </div>
        
    )
}

export default Intro