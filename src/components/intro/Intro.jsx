import "./Intro.css"
import Jesse from "../../img/Jesse.png"
import MouseIcon from "../../img/Mouse.svg"

const Intro = () => {
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
                            <div className="intro-title-item">Doodie Fan</div>
                            <div className="intro-title-item">Peepee lover</div>
                        </div>
                    </div>
                    <p className="intro-description">                       
                        I design poop with a hint of pee and sometimes ca ca. As well as colorful doodies, stinkies, farties, and dumpies.
                    </p>
                </div>
                <img src={MouseIcon} alt="" className="intro-scroll" />                
            </div>
            <div className="intro-right">
                <div className="intro-bg"></div>
                <img src={Jesse} alt="" className="intro-image" />
            </div>
        </div>
        
    )
}

export default Intro