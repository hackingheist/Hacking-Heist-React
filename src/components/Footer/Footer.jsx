import React from 'react'
import DidRegister from './DidRegister'
import './style.scss'
import { SiTwitter, SiGmail, SiFacebook, SiInstagram, SiLinkedin} from "react-icons/si";
import {RiInstagramFill} from 'react-icons/ri'
import {AiFillTwitterCircle} from 'react-icons/ai'

export default function Footer() {
    return (
        <footer className='footer'>
            <DidRegister/>
            <div className='contact'>
                <div className='name'>HACKING HEIST</div>
                <div className='social-media'>
                    <span className='media'><a href="" target="_blank"><SiLinkedin color="#CFE4FC" /></a></span>
                    <span className='media'><a href="" target="_blank"><RiInstagramFill color="#CFE4FC" /></a></span>
                    <span className='media'><a href="" target="_blank"><SiGmail color="#CFE4FC" /></a></span>
                    <span className='media'><a href="" target="_blank"><AiFillTwitterCircle color="#CFE4FC" /></a></span>
                    <span className='media'><a href="" target="_blank"><SiFacebook color="#CFE4FC" /></a></span>
                </div>
            </div>   
        </footer>
    )
}
