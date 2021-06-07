import './App.scss';
import Jumbotron from './components/Home/Jumbotron/Jumbotron'
import AboutUs from './components/Home/AboutUs/AboutUs'

function App() {
  return (
    <div className="App">
      <div className="section">
        <Jumbotron/>
      </div>
      
      <div className="section">
        <AboutUs/>
      </div>

    </div>
  );
}

export default App;
