import './App.scss';
import Jumbotron from './components/Home/Jumbotron/Jumbotron'
import AboutUs from './components/Home/AboutUs/AboutUs'
import Registration from './components/Home/Registration/Registration'
import Timeline from './components/Home/Timeline/Timeline'
import FAQ from './components/Home/FAQ/FAQ'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Sponsor from './components/Home/Sponsor/Sponsor'

function App() {
  return (
    <div className="App">

      <Navbar/>

      <div className="section">
        <Jumbotron/>
      </div>
      
      <div className="section-column">
        <AboutUs/>
        <Registration/>
      </div>

      <div className="section">
        <Timeline/>
      </div>

      <div className="section">
        <Sponsor/>
      </div>

      <div className="section">
        <FAQ/>
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
