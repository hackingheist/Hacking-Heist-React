import React from 'react'
import './style.scss'

export default function Sponsor() {
    return (
        <div className='sponsor'>
            <h1 className='title'>Sponsors</h1>
            
            <div className='sponsor-category'>
                <h2 className='category-title'>Captain</h2>
                <div className='sponsor-grid1'>
                    <div className="ssize">
                        <a className='sponsorc' href="https://sawolabs.com/?utm_source=hacakthon&utm_medium=DefHack&utm_campaign=HackPartner" target="_blank" >
                            <img src='./assets/datastax.png' width='70%' height='auto' alt=''></img>
                        </a>
                    </div>
                    {/* <a href="" className='sponsorc'>
                        <img src='./assets/qoom.png' width='80%' height='auto' alt=''></img>
                    </a> */}
                    {/* <span className='sponsorc'><img src='./assets/amazon.png' width='90%' height='auto' alt=''></img></span> */}
                </div>
            </div>

            {/* <div className='sponsor-category'>
                <h2 className='category-title'>Quarter Master Sponsor</h2>
                <div className='sponsor-grid'>
                    <span className='sponsorc'><img src='./assets/facebook.png' width='100%' height='auto' alt=''></img></span>
                    <span className='sponsorc'><img src='./assets/google.png' width='100%' height='auto' alt=''></img></span>
                    <span className='sponsorc'><img src='./assets/amazon.png' width='100%' height='auto' alt=''></img></span>
                </div>
            </div>

            <div className='sponsor-category'>
                <h2 className='category-title'>Sailing Master Sponsor</h2>
                <div className='sponsor-grid'>
                    <span className='sponsorc'><img src='./assets/facebook.png' width='90%' height='auto' alt=''></img></span>
                    <span className='sponsorc'><img src='./assets/google.png' width='90%' height='auto' alt=''></img></span>
                    <span className='sponsorc'><img src='./assets/amazon.png' width='90%' height='auto' alt=''></img></span>
                </div>
            </div> */}

            <div className='sponsor-category'>
                <h2 className='category-title'>Gunner</h2>
                <div className='sponsor-grid'>
                    <a href="https://coil.com/" target="_blank" className='sponsorc'>
                        <img src='./assets/coilnew.png' width='80%' height='auto' alt=''></img>
                    </a>
                    <a href="https://symbl.ai/" target="_blank" className='sponsorc'>
                        <img className="filter" src='./assets/symbl1.png' width='80%' height='110%' alt=''></img>
                    </a>
                    <a href="https://www.qoom.io/" target="_blank" className='sponsorc'>
                        <img src='./assets/qoom.png' width='80%' height='auto' alt=''></img>
                    </a>
                </div>
            </div>

            <div className='sponsor-category'>
                <h2 className='category-title'>Authentication Partner</h2>
                <div className='sponsor-grid1'>
                    <div className="ssize">
                        <a className='sponsorc' href="https://sawolabs.com/?utm_source=hacakthon&utm_medium=DefHack&utm_campaign=HackPartner" target="_blank" >
                            <img src='./assets/sawo labs.png' width='100%' height='100%' alt=''></img>
                        </a>
                    </div>
                    {/* <a href="" className='sponsorc'>
                        <img src='./assets/qoom.png' width='80%' height='auto' alt=''></img>
                    </a> */}
                    {/* <span className='sponsorc'><img src='./assets/amazon.png' width='90%' height='auto' alt=''></img></span> */}
                </div>
            </div>

        </div>
    );
}
