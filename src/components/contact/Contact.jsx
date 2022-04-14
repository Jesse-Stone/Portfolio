import './contact.css'
import github from '../../img/github.png'
import gmail from '../../img/gmail.png'
import linkedin from '../../img/linkedin.png'

function Contact() {
  return (
    <div className='contact'>
      {/* <div className="contact-bg"></div> */}
      <div className="contact-wrapper">
            <h1 className="contact-title">Get In Touch</h1>

              {/* <div className="contact-info-item">
                  <img src={github} alt="" className="contact-icon" />
              </div>
              <div className="contact-info-item">
                  <img src={gmail} alt="" className="contact-icon" />
              </div>
              <div className="contact-info-item">
                  <img src={linkedin} alt="" className="contact-icon" />
              </div> */}
        </div>
            <p className="contact-description">
                <b>Whats Next?</b> Even though I'm not currently looking for any new opporunities, 
                 please feel free to reach out - even if it's just to say hi, I'd love to hear from you!
            </p>
    </div>
  )
}

export default Contact
