
import React from 'react'
import './style.scss';
import Jumbotron from '../../components/Home/Jumbotron/Jumbotron'
import AboutUs from '../../components/Home/AboutUs/AboutUs'
import Registration from '../../components/Home/Registration/Registration'
import Timeline from '../../components/Home/Timeline/Timeline'
import FAQ from '../../components/Home/FAQ/FAQ'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Sponsor from '../../components/Home/Sponsor/Sponsor'
import Tracks from '../../components/Home/Tracks/Tracks'

export default function Home() {
    return (
        <div className="App">

      <Navbar/>

       <div id='home' className="section">
        <Jumbotron/>
      </div>
      
      <div id='aboutus' className="section-column">
        <AboutUs/>
        <Registration/>
      </div>

      <div id='tracks' className="section">
      <Tracks />
      </div>
      
      <div id='timeline' className="section">
        <Timeline/>
      </div>

      <div id='sponsor' className="section">
        <Sponsor/>
      </div>

      <div id='faq' className="section">
        <FAQ/>
      </div>
      
      <div className="section-footer">
        <Footer/>
      </div>
    </div>
    );
}
