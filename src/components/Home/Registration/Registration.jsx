import React from 'react'
import './style.scss'

export default function Registration() {
    return (
        <div className='registration'>
            <h1 className='title'>Registration</h1>
            <div className='registration-flexbox'>
                <div className='box'>
                    <h2 className='heading'>Mentor</h2>
                    <div className='content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    <a href="" target="_blank"><div className="button-shape">Register Now</div></a>
                </div>

                <div className='box'>
                    <h2 className='heading'>Participant</h2>
                    <div className='content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    <a href="" target="_blank"><div className="button-shape">Register Now</div></a>
                </div>
            </div>
        </div>
    )
}
