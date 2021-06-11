import React from 'react'
import './style.scss'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

export default function Team() {
    return (
        <>
        <Navbar/>
        <div className='team'>
                <div className='team-section'>
                    <h1 className='heading'>Our Team</h1>
                    <h2 className='subHeading'>Meet the spirited team that worked behind the scenes for Hacking Heist’s Succss.</h2>
                </div>
        </div>
        <Footer/>
        </>
    )
}
