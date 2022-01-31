import React from 'react';
import axios from 'axios';
import { useEffect,useCallback,useState } from 'react';
function Weather() {
    const [weatherInfo, setWeatherInfo] = useState({})

    const API_KEY = 'd9deeb36de4cc6b19671a781b111c8df';

    const fetchWeather = useCallback(async () => {
        const { data } =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=amman&appid=${API_KEY}`)
        console.log('data', data);
        setWeatherInfo(data)
        // const json = await response.json()
      }, [])

    useEffect(() => {
        window.scroll(0, 0)
        fetchWeather()
      }, [fetchWeather])
      return (
          <div>
               <div class="profile__meta">
                        <h3>City: {weatherInfo.name}</h3>
                        <span>Temp: { (weatherInfo?.main?.temp-273.15).toString().slice(0,3)} c&deg;</span>
                      </div>
          </div>
      );
    }
    
export default Weather


