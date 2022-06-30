import React from 'react'
import '../Footer/Footer.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Mail from '@iconscout/react-unicons/icons/uil-mailbox'
import Github from '@iconscout/react-unicons/icons/uil-github'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'


const Footer = () => {

  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width:"100%"}} />
        <div className="f-content">
            <span>srijanlal707@gmail.com</span>
            <div className="f-icons">
                <a href="https://github.com/srijanlal"><Github color="white" size="3rem" /></a>
                <a href="https://www.instagram.com/srijanlal/" ><Insta color="white" size="3rem" /></a>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=new"><Mail color="white" size="3rem"/></a>
                <a href="https://www.linkedin.com/in/srijanlal/"><LinkedIn color="white" size="3rem" /></a>

            </div>
        </div>
    </div>
  )
}

export default Footer