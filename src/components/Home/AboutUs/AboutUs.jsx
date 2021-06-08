import React from 'react'
import "./style.scss"

export default function AboutUs() {
    return (
        <div className="about">
            <div className='about-text'>
                <div className="about-title">About Us</div>
                <div className="about-description">Hacking Heist is a highly anticipated international hackathon organized by
                    many famous student communities all over the world uniting together to
                    produce a memorable event for talented students who possess the skills of
                    different domains. The event is a 36-hour long with a theme based on
                    Pirates. The participants come resembling pirates and fight through the
                    dangerous perils of the oceans which are the different domains they will
                    receive in the hackathon. The domains come as waves and the pirates
                    maneuvering their way to the treasure. The top pirate takes the loot and in
                    the same way, the top participants will receive awards. The participant who
                    successfully travels through all the perils of the ocean(challenges) is
                    termed as the “King of the Ocean”.
                </div>
            </div>
            
            <img src="./assets/HHLogo.png" className="logo" alt=""/>
            
        </div>
    )
}
