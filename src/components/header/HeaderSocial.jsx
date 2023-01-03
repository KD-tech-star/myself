import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {GoMarkGithub} from "react-icons/go"
import {FaFacebookSquare} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import { Link } from 'react-router-dom'



export const HeaderSocial = () => {
  return (
    <div className='header__socials'>
    <Link to="https://linkedin.com"><BsLinkedin/></Link>
    <Link to="https://github.com/KD-tech-star"><GoMarkGithub/></Link>
    <Link to="https://facebook.com"><FaFacebookSquare/></Link>
    <Link to="https://instagram.com"><FiInstagram/></Link>
    

    
    
    </div>
  )
}
