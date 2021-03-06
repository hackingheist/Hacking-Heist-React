import React from 'react'

export default function DidRegister() {
    return (
        <div className='did-register'>
            <div className='box-image'>
                <img src='./assets/boximage.png' width='100%' height='100%' alt='boximage' />
            </div>
            <div className='right-flex'>
                <h1 className='title'>Did You Register?</h1>
                {/* <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</div> */}
                <a href="https://hackingheist.devpost.com/" target="_blank"><div className="button-shape">Register Now</div></a>
            </div>
        </div>
    )
}
