import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {GoMarkGithub} from "react-icons/go"
import {FaFacebookSquare} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"



export const HeaderSocial = () => {
  return (
    <div className='header__socials'>
    <a href="https://linkedin.com"><BsLinkedin/></a>
    <a href="https://github.com/KD-tech-star"><GoMarkGithub/></a>
    <a href="https://facebook.com"><FaFacebookSquare/></a>
    <a href="https://instagram.com"><FiInstagram/></a>
    

    
    
    </div>
  )
}
