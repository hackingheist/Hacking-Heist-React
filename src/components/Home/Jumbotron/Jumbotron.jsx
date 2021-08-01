import React from 'react'
import "./style.scss"

export default function Jumbotron() {
    return (
        <>
        <header className="App-header">
        <img src="./assets/jumbo1.jpg" className="App-logo" alt="logo" />
       </header>
      <div className="Title">
        <h2 className="heading">HACKING HEIST</h2>
        <h3 className="sub-head">17-19 September 2021</h3>
        <h4 className="Description">Register for the Hackathon and Unlock your path to the “King of the Ocean”</h4>
      <div className="Buttons">
          <a href="https://hackingheist.devpost.com/" target="_blank"><div className="button-shape Button1">Register Now</div></a>
          <a href="https://discord.gg/mzRAPe8MzF" target="_blank"><div className="button-shape Button2">Join Discord</div></a>
      </div>
      </div>
      </>
    )
}
