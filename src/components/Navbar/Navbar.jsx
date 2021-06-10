import React from 'react'
import './style.scss'

export default function Navbar() {
    return (
        <nav className='nav'>
            <div className='navbar'>
            <div className='logo'>
                <img src="./assets/HHLogo.png" alt="" width='90px' height='auto'></img>
            </div>
            <div className='menu'>
                <span className='menu-item'>About</span>
                <span className='menu-item'>Tracks</span>
                <span className='menu-item'>Schedule</span>
                <span className='menu-item'>Team</span>
                <span className='menu-item'>Sponsor</span>
                <span className='menu-item'>FAQ</span>
                <span className='menu-item'>Footer</span>
            </div>
            </div>
        </nav>
    )
}
