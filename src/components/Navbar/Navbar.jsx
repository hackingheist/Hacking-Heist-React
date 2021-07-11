import React,{ useState } from 'react'
//import {FiMenu} from 'react-icons/fi'
import { Squash as Hamburger } from 'hamburger-react'
import './style.scss'

export default function Navbar() {
    const [showLinks,setShowLinks] = useState(false);
    const [isOpen,setOpen] = useState(false);
    return (
        <div className='nav'>
            <div className={(showLinks)?'navbar colour':'navbar'}>
                <div className='logo'>
                    <a href="/"><img src="./assets/HHLogo.png" alt="" width='100%' height='auto'></img></a>
                </div>
                <div className='menu' id={showLinks? "hidden" : ""}>
                    <a href="/#aboutus"><span className='menu-item'>About</span></a>
                    {/* <a href="/#tracks"><span className='menu-item'>Tracks</span></a> */}
                    {/* <a href="/#timeline"><span className='menu-item'>Schedule</span></a> */}
                    <a href="./team"><span className='menu-item'>Team</span></a>
                    <a href="/#sponsor"><span className='menu-item'>Sponsor</span></a>
                    <a href="/#faq"><span className='menu-item'>FAQ</span></a>
                    <a href="#footer"><span className='menu-item'>Footer</span></a>
                </div>
                {/* <div onClick={() => setShowLinks(!showLinks)} className="btn">
                    <FiMenu color='#fff' size={30}/>
                </div> */}
                <div className='btn' onClick={()=>setShowLinks(!showLinks)}>
                    <Hamburger toggled={isOpen} toggle={setOpen} rounded duration={0.4} easing='ease-in' color="#ffffff" size={25}/>
                 </div>
        </div>
        </div>
    )
}
