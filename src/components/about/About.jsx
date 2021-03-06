import JessePiper from "../../img/JessePiper.png"
import Trophy from "../../img/Trophy.jpeg"
import './About.css'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <div className="about-card bg"></div>
            <div className="about-card">
                <img src={JessePiper} alt="" className='about-image'/>
            </div>
        </div>
        <div className="about-right">
            <h1 className='about-title'>About Me</h1>
            <p className='about-description'>
            The awesome yellow planet of Tatooine emerges from a total 
            eclipse, her two moons glowing against the darkness. A tiny 
            silver spacecraft, a Rebel Blockade Runner firing lasers 
            from the back of the ship, races through space. It is pursed 
            by a giant Imperial Stardestroyer. Hundreds of deadly 
            laserbolts streak from the Imperial Stardestroyer, causing 
            the main solar fin of the Rebel craft to disintegrate.
            An explosion rocks the ship as two robots, Artoo-Detoo (R2-
               D2) and See-Threepio (C-3PO) struggle to make their way 
               through the shaking, bouncing passageway. Both robots are 
               old and battered. Artoo is a short, claw-armed tripod. His 
               face is a mass of computer lights surrounding a radar eye. 
               Threepio, on the other hand, is a tall, slender robot of 
               human proportions. He has a gleaming bronze-like metallic 
               surface of an Art Deco design. 
            </p>
            <div className="about-award">
                <img src={Trophy} alt="" className="award-image" />
                <div className="about-award-text">
                    <h4 className="about-award-title">Game of Pwns Championship Trophy</h4>
                        <p className="about-award-description">
                        3x winner of Fantasy Football's most prestigious award, celebrating
                        the accomplishments of my ownership of the most successful dynasty 
                        club in the storied history of our league.
                        </p>                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
