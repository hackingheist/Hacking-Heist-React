import React from 'react'
import './style.scss'

export default function Navbar() {
    return (
        <div className='nav'>
            <div className='navbar'>
            <div className='logo'>
            <a href="/"><img src="./assets/HHLogo.png" alt="" width='90px' height='auto'></img></a>
            </div>
            <div className='menu'>
                <a href="/#aboutus"><span className='menu-item'>About</span></a>
                <a href="/#tracks"><span className='menu-item'>Tracks</span></a>
                <a href="/#timeline"><span className='menu-item'>Schedule</span></a>
                <a href="./team"><span className='menu-item'>Team</span></a>
                <a href="/#sponsor"><span className='menu-item'>Sponsor</span></a>
                <a href="/#faq"><span className='menu-item'>FAQ</span></a>
                <a href="#footer"><span className='menu-item'>Footer</span></a>
            </div>
            </div>
        </div>
    )
}
