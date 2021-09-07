import React from "react";
import './style.scss';

const cpdata = [
    {
        imgsrc : "./assets/acm.png",
        link : "#"
    },
    {
        imgsrc : "./assets/gfg srmgpc.jpeg",
        link : "#"
    },
    {
        imgsrc : "./assets/Microsoft.jpeg",
        link : "#"
    },
    {
        imgsrc : "./assets/CoaderClub.jpeg",
        link : "#"
    },
    {
        imgsrc : "./assets/srmgpc.jpeg",
        link : "#"
    },
    {
        imgsrc : "./assets/DSC.jpg",
        link : "#"
    },
    {
        imgsrc : "./assets/GFGAITR.jpeg",
        link : "#"
    },
    {
        imgsrc : "./assets/AIclub.jpg",
        link : "#"
    },
    {
        imgsrc : "./assets/GFGLPU.png",
        link : "#"
    },
    {
        imgsrc : "./assets/VIITLogo.png",
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