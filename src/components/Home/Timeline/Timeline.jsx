import React from 'react'
import './style.scss'

export default function Timeline() {
    return (
        <div className="timeline">
        <h1 className="title">HACKATHON TIMELINE</h1>
        <div className='flexbox'>
            <div className="timeline-left">
                <img src="./assets/timeline-left.svg" alt=""/>
            </div>
            
            <div className="timeline-center">
            <img src="./assets/timeline-line.svg" alt=""/>
            </div>

            <div className="timeline-right">
                <div className='milestone'>
                    <div>
                    <img src="./assets/timeline-mark.png" width="35px" height="35px" alt=""/>
                    </div>
                    <div className="description">
                    <h4 className="heading">Organization Applications Open</h4>
                    <h5 className="date">January 30, 2021</h5>
                    </div>
                </div>
                <div className='milestone'>
                    <div>
                    <img src="./assets/timeline-mark.png" width="35px" height="35px" alt=""/>
                    </div>
                    <div className="description">
                    <h4 className="heading">Organization Applications Open</h4>
                    <h5 className="date">January 30, 2021</h5>
                    </div>
                </div>
                <div className='milestone'>
                    <div>
                    <img src="./assets/timeline-mark.png" width="35px" height="35px" alt=""/>
                    </div>
                    <div className="description">
                    <h4 className="heading">Organization Applications Open</h4>
                    <h5 className="date">January 30, 2021</h5>
                    </div>
                </div>
                <div className='milestone'>
                    <div>
                    <img src="./assets/timeline-mark.png" width="35px" height="35px" alt=""/>
                    </div>
                    <div className="description">
                    <h4 className="heading">Organization Applications Open</h4>
                    <h5 className="date">January 30, 2021</h5>
                    </div>
                </div>
                <div className='milestone'>
                    <div>
                    <img src="./assets/timeline-mark.png" width="35px" height="35px" alt=""/>
                    </div>
                    <div className="description">
                    <h4 className="heading">Organization Applications Open</h4>
                    <h5 className="date">January 30, 2021</h5>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
