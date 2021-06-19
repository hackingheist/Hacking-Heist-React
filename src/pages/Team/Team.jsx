import React from 'react'
import './style.scss'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import team from '../../Team-data/team.json'

export default function Team() {
    return (
        <>
        <Navbar/>
        <div className='team'>
                <div className='team-section'>
                    <h1 className='heading'>Our Team</h1>
                    <h2 className='subHeading'>Meet the spirited team that worked behind the scenes for Hacking Heist’s Succss.</h2>
                    <div className='team-grid'>
                        {team['Team'].map((member,index)=>{
                            return(<div className="team-card" key={index}>
                                <div className="profile-photo"><img src={member.photo} width="120px" height="auto" alt=""></img></div>
                                    <div className="team-card-bg">
                                    <div className="name">{member.name}</div>
                                    <div className="position">{member.position}</div>
                                    <div className="description">{member.description}</div>
                                    <div className="social">
                                        <div className="social-icon"><a href={member.social.linkedin}><img src="./assets/t-linkedin.svg" alt="" width="30px" height="auto"></img></a></div>
                                        <div className="social-icon"><a href={member.social.instagram}><img src="./assets/t-instagram.svg" alt="" width="30px" height="auto"></img></a></div>
                                        <div className="social-icon"><a href={member.social.github}><img src="./assets/t-github.svg" alt="" width="30px" height="auto"></img></a></div>
                                        <div className="social-icon"><a href={member.social.web}><img src="./assets/t-web.svg" alt="" width="30px" height="auto"></img></a></div>
                                    </div>
                                    </div>
                                </div>)
                        })}
                    </div>
                </div>
        </div>
        <div className="section-footer">
        <Footer/>
        </div>
        </>
    )
}
