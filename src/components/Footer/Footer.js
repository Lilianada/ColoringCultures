import React from 'react';
import './Footer.css'
import {BsFacebook, BsTwitter, BsInstagram} from 'react-icons/bs'

function Footer() {
  return (
    <footer className='footerWrapper'>
        <div className='socialWrap'>
            <div className='wrap'><BsFacebook size={24} /></div>
            <div className='wrap'><BsTwitter size={24} /></div>
            <div className='wrap'><BsInstagram size={24} /></div>
        </div>
    </footer>
  )
}

export default Footer