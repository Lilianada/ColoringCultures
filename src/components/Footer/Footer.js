import React from 'react';
import './Footer.css'
import {BsFacebook, BsTwitter, BsInstagram} from 'react-icons/bs'

function Footer() {
  return (
    <footer className='footerWrapper'>
        <div className='socialWrap'>
            <a href='/' className='wrap'> <BsFacebook size={24} /> </a>
            <a href='/' className='wrap'> <BsTwitter size={24} /> </a>
            <a href='/' className='wrap'> <BsInstagram size={24} /> </a>
        </div>
    </footer>
  )
}

export default Footer