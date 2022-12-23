import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {GoMarkGithub} from "react-icons/go"
import {FaFacebookSquare} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"



export const HeaderSocial = () => {
  return (
    <div className='header__socials'>
    <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
    <a href="https://github.com/KD-tech-star" target="_blank"><GoMarkGithub/></a>
    <a href="https://facebook.com" target="_blank"><FaFacebookSquare/></a>
    <a href=""><FiInstagram/></a>

    
    
    </div>
  )
}
