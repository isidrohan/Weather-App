import { useEffect,useState } from 'react';
import Descriptions from './components/Descriptions';
import coolbg from './images/cool.jpg'
import hotbg from './images/hot.jpg'
import './index.css';
import {getFormattedData} from './components/Weatherservice'

function App() {

  const [city, setCity] = useState('munger')
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState('metric')
  const [bg, setBg] = useState(hotbg)
  useEffect(() => {
    const fetchWeatherData = async ()=>{
      const data = await getFormattedData(city,units)
      setWeather(data)

      // dynamic bg
      const check = units === "metric" ? 20 : 60;
      if (data.temp <= check) setBg(coolbg);
      else setBg(hotbg)
    }
    fetchWeatherData();


  }, [units,city])

  const handleclick = (e)=>{
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isCelsius = currentUnit === "C";
    button.innerText = isCelsius ? "°F" : "°C";
    setUnits(isCelsius ? "metric" : "imperial")
  }

  const enterKeyPress = (e)=>{
    if(e.keyCode ===13){
      setCity(e.target.value)
      e.currentTarget.blur();
    }
  }
  
  return (
    <div className="app" style={{backgroundImage: `url(${bg})`}}>
      <div className="overlay">
        {weather && (
            <div className="container">
            <div className="section section-input">
              <input onKeyDown={enterKeyPress} type="text" name='city' placeholder='Enter City...' />
            <button onClick={(e)=>handleclick(e)}>°F</button>
            </div>
  
            <div className="section section-temp">
              <div className="icon">
                <h2>{weather.name}  {weather.country}</h2>
                <img src={weather.iconURL} alt="weather app" />
                <h3>{weather.description}</h3>
              </div>
              
              <div className="temperature">
                <h1>{`${weather.temp.toFixed()} ${units==='metric' ? "°C" : "°F"}`}</h1>
              </div>
            </div>
  
            {/* description */}
            <Descriptions weather = {weather} units = {units}/>
          </div>
        )
        }
      </div>
    </div>
  );
}

export default App;
