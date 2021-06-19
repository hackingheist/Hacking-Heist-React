import React from 'react'
import './style.scss'

export default function Sponsor() {
    return (
        <div className='sponsor'>
            <h1 className='title'>Sponsors</h1>
            
            <div className='sponsor-category'>
                <h2 className='category-title'>Captain Sponsor</h2>
                <div className='sponsor-grid'>
                    <span className='sponsor'><img src='./assets/facebook.png' width='90%' height='auto' alt=''></img></span>
                    <span className='sponsor'><img src='./assets/google.png' width='90%' height='auto' alt=''></img></span>
                    <span className='sponsor'><img src='./assets/amazon.png' width='90%' height='auto' alt=''></img></span>
                </div>
            </div>

            <div className='sponsor-category'>
                <h2 className='category-title'>Quarter Master Sponsor</h2>
                <div className='sponsor-grid'>
                    <span className='sponsor'><img src='./assets/facebook.png' width='100%' height='auto' alt=''></img></span>
                    <span className='sponsor'><img src='./assets/google.png' width='100%' height='auto' alt=''></img></span>
                    <span className='sponsor'><img src='./assets/amazon.png' width='100%' height='auto' alt=''></img></span>
                </div>
            </div>

            <div className='sponsor-category'>
                <h2 className='category-title'>Sailing Master Sponsor</h2>
                <div className='sponsor-grid'>
                    <span className='sponsor'><img src='./assets/facebook.png' width='90%' height='auto' alt=''></img></span>
                    <span className='sponsor'><img src='./assets/google.png' width='90%' height='auto' alt=''></img></span>
                    <span className='sponsor'><img src='./assets/amazon.png' width='90%' height='auto' alt=''></img></span>
                </div>
            </div>

            <div className='sponsor-category'>
                <h2 className='category-title'>Gunner Sponsor</h2>
                <div className='sponsor-grid'>
                    <span className='sponsor'><img src='./assets/facebook.png' width='90%' height='auto' alt=''></img></span>
                    <span className='sponsor'><img src='./assets/google.png' width='90%' height='auto' alt=''></img></span>
                    <span className='sponsor'><img src='./assets/amazon.png' width='90%' height='auto' alt=''></img></span>
                </div>
            </div>
        </div>
    )
}
