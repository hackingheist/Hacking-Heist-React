import './App.scss';
import Jumbotron from './components/Home/Jumbotron/Jumbotron'
import AboutUs from './components/Home/AboutUs/AboutUs'
import Registration from './components/Home/Registration/Registration'
import Timeline from './components/Home/Timeline/Timeline'

function App() {
  return (
    <div className="App">
      <div className="section">
        <Jumbotron/>
      </div>
      
      <div className="section">
        <AboutUs/>
        <Registration/>
      </div>

      <div className="section">
      <Timeline/>
      </div>

    </div>
  );
}

export default App;
