import React from 'react'
import './style.scss'

const items = [
    {
       subject: "Opening Ceremony",
       date1: "September 17, 2021 @8PM IST" 
    },
    {
        subject: "Getting started with SymbAl",
        date1: "September 18, 2021 @11:30AM IST" 
    },
    {
        subject: "Front End Web Development",
        date1: "September 18, 2021 @1:00PM IST" 
    },
    {
        subject: "Intro to Tabnine",
        date1: "September 18, 2021 @2:30PM IST" 
    },
    {
        subject: "Intro to Github",
        date1: "September 18, 2021 @4:00PM IST" 
    },
    {
        subject: "SAWO Labs Api 101",
        date1: "September 18, 2021 @5:30PM IST" 
    },
    {
        subject: "Hacking Ends",
        date1: "September 19, 2021 @8AM IST" 
    },
    {
        subject: "Winners Announcement",
        date1: "September 19, 2021 @8PM IST" 
    },
];

const timelinedates = (val) => {
    return(
        <div className='milestone'>
            <div>
                <img src="./assets/timeline-mark.png" width="35px" height="35px" alt=""/>
            </div>
            <div className="description">
                <h4 className="heading">{val.subject}</h4>
                <h5 className="date">{val.date1}</h5>
            </div>
        </div>
    );
}

export default function Timeline() {
    return (
        <div className="timeline">
        <h1 className="title">HACKATHON TIMELINE</h1>
        <div className='flexbox'>
            <div className="timeline-left">
                <img src="./assets/timeline-left.png" height='520px' alt=""/>
            </div>
            
            <div className="timeline-center">
                <img src="./assets/timeline-line.svg" className="dotline" alt=""/>
            </div>

            <div className="timeline-right">
                {items.map(timelinedates)}
            </div>
        </div>
        </div>
    )
}
