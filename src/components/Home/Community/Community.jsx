import React from "react";
import './style.scss';

const cpdata = [
    {
        imgsrc : "https://raw.githubusercontent.com/hackingheist/Hacking-Heist-React/master/pictures/community/0.jpg",
        link : "#"
    },
    {
        imgsrc : "https://raw.githubusercontent.com/hackingheist/Hacking-Heist-React/master/pictures/community/3.jpeg",
        link : "#"
    },
    {
        imgsrc : "https://raw.githubusercontent.com/hackingheist/Hacking-Heist-React/master/pictures/community/9.png",
        link : "#"
    },
    {
        imgsrc : "https://raw.githubusercontent.com/hackingheist/Hacking-Heist-React/master/pictures/community/8.jpg",
        link : "#"
    },
    {
        imgsrc : "https://raw.githubusercontent.com/hackingheist/Hacking-Heist-React/master/pictures/community/10.jpg",
        link : "#"
    },
    {
        imgsrc : "https://raw.githubusercontent.com/hackingheist/Hacking-Heist-React/master/pictures/community/11.png",
        link : "#"
    },
    {
        imgsrc : "https://raw.githubusercontent.com/hackingheist/Hacking-Heist-React/master/pictures/community/7.jpeg",
        link : "#"
    },
    {
        imgsrc : "https://raw.githubusercontent.com/hackingheist/Hacking-Heist-React/master/pictures/community/12.png",
        link : "#"
    },
];

const cpatner = (val) => {
    return(
        <a href={val.link} className="cp">
            <img className="logo_small" src={val.imgsrc} alt="cpimage" />
        </a>
    );
}

export default function Community(){
    return (
        <div className="comm">
            <h2 className="heading">Community <br/>Partners</h2>
            <div className="contain">
                {cpdata.map(cpatner)}
            </div>
        </div>
    );
}