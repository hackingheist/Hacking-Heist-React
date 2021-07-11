import React from 'react'
import DidRegister from './DidRegister'
import './style.scss'
import {SiGmail, SiFacebook, SiLinkedin} from "react-icons/si";
import {RiInstagramFill} from 'react-icons/ri'
import {AiFillTwitterCircle} from 'react-icons/ai'

export default function Footer() {
    return (
        <footer id='footer' className='footer'>
            <DidRegister/>
            <div className='contact'>
               <a href="/"><div className='name'>HACKING HEIST</div></a>
                <div className='social-media'>
                    <span className='media'><a href="https://www.linkedin.com/company/hacking-heist/" target="_blank"><SiLinkedin color="#CFE4FC" /></a></span>
                    <span className='media'><a href="https://www.instagram.com/hackingheist/" target="_blank"><RiInstagramFill color="#CFE4FC" /></a></span>
                    <span className='media'><a href="mailto:thehackingheist@gmail.com" target="_blank"><SiGmail color="#CFE4FC" /></a></span>
                    {/* <span className='media'><a href="" target="_blank"><AiFillTwitterCircle color="#CFE4FC" /></a></span> */}
                    {/* <span className='media'><a href="" target="_blank"><SiFacebook color="#CFE4FC" /></a></span> */}
                </div>
            </div>   
        </footer>
    )
}
