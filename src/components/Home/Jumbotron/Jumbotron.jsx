import React from 'react'
import "./style.scss"

export default function Jumbotron() {
    return (
        <>
        <header className="App-header">
        <img src="./assets/jumbotron.png" className="App-logo" alt="logo" />
       </header>
      <div className="Title">
        <h2 className="heading">HACKING HEIST</h2>
        <h4 className="Description">Register for the Hackathon and Unlock your path to the “King of the Ocean”</h4>
      <div className="Buttons">
          <a href="" target="_blank"><div className="button-shape Button1">Register Now</div></a>
          <a href="" target="_blank"><div className="button-shape Button2">Join Discord</div></a>
      </div>
      </div>
      </>
    )
}