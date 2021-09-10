import React from 'react'
import './style.scss'

export default function Sponsor() {
    return (
        <div className='sponsor'>
            <h1 className='title'>Sponsors</h1>
            {/* width='75%' height='auto' */}
            <div className='sponsor-category'>
                <h2 className='category-title'>Captain</h2>
                <div className='sponsor-grid'>
                    <div className="ssize">
                        <a className='sponsorc' href="https://www.datastax.com/" target="_blank" >
                            <img className="logosmall" src='./assets/datastax.png'  alt=''></img>
                        </a>
                        <a className='sponsorc' href="https://koii.network/" target="_blank" >
                            <img className="logosmall" src='https://s3.amazonaws.com/challengepost/sponsors/logos/000/022/153/highres/plat_koii.png' alt=''></img>
                        </a>
                    </div>
                    {/* <a href="" className='sponsorc'>
                        <img src='./assets/qoom.png' width='80%' height='auto' alt=''></img>
                    </a> */}
                    {/* <span className='sponsorc'><img src='./assets/amazon.png' width='90%' height='auto' alt=''></img></span> */}
                </div>
            </div>

            <div className='sponsor-category'>
                <h2 className='category-title'>Quarter Master</h2>
                <div className='sponsor-grid2'>
                    <span className='sponsorc'><img className="logosmall" src='https://s3.amazonaws.com/challengepost/sponsors/logos/000/022/150/highres/Tabnine_Logo_Regular_%281%29.png' width='100%' height='auto' alt=''></img></span>
                    <span className='sponsorc'><img className="logosmall" src='https://s3.amazonaws.com/challengepost/sponsors/logos/000/022/156/highres/InspiritAI_Logo.png' width='100%' height='auto' alt=''></img></span>
                    {/* <span className='sponsorc'><img src='./assets/amazon.png' width='100%' height='auto' alt=''></img></span> */}
                </div>
            </div>

            {/* <div className='sponsor-category'>
                <h2 className='category-title'>Gunner Sponsor</h2>
                <div className='sponsor-grid'>
                    <span className='sponsorc'><img src='./assets/facebook.png' width='90%' height='auto' alt=''></img></span>
                    <span className='sponsorc'><img src='./assets/google.png' width='90%' height='auto' alt=''></img></span>
                    <span className='sponsorc'><img src='./assets/amazon.png' width='90%' height='auto' alt=''></img></span>
                </div>
            </div> */}

            <div className='sponsor-category'>
                <h2 className='category-title'>Sailing Master</h2>
                <div className='sponsor-grid3'>
                    <a href="https://coil.com/" target="_blank" className='sponsorc'>
                        <img src='./assets/coilnew.png' width='70%' height='90%' alt=''></img>
                    </a>
                    <a href="https://symbl.ai/" target="_blank" className='sponsorc'>
                        <img className="filter" src='./assets/symbl1.png' width='70%' height='110%' alt=''></img>
                    </a>
                    <a href="https://www.qoom.io/" target="_blank" className='sponsorc'>
                        <img src='./assets/qoom.png' width='70%' height='auto' alt=''></img>
                    </a>
                </div>
            </div>

            <div className='sponsor-category'>
                <h2 className='category-title'>Gunner</h2>
                <div className='sponsor-grid2'>
                    <span className='sponsorc'><img className="logosmall" src='https://s3.amazonaws.com/challengepost/sponsors/logos/000/022/151/highres/StreamYard_-_Horz_%282%29.png' width='100%' height='auto' alt=''></img></span>
                    <span className='sponsorc'><img className="filter logosmall" src='https://s3.amazonaws.com/challengepost/sponsors/logos/000/022/155/highres/repl.png' width='100%' height='auto' alt=''></img></span>
                    {/* <span className='sponsorc'><img src='./assets/amazon.png' width='100%' height='auto' alt=''></img></span> */}
                </div>
            </div>

            <div className='sponsor-category'>
                <h2 className='category-title'>Authentication Partner</h2>
                <div className='sponsor-grid4'>
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
