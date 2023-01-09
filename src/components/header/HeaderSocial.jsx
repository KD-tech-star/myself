import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {GoMarkGithub} from "react-icons/go"
import {FaFacebookSquare} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"



export const HeaderSocial = () => {
  return (
    <div className='header__socials'>
    <a href="https://www.linkedin.com/in/sonu-bharti-92673b254"><BsLinkedin/></a>
    <a href="https://github.com/KD-tech-star"><GoMarkGithub/></a>
    <a href="https://www.facebook.com/rjsonu.kd"><FaFacebookSquare/></a>
    <a href="https://www.instagram.com/rj_sonu_kd/"><FiInstagram/></a>
    

    
    
    </div>
  )
}
