/* Hooks */
import { useState, useEffect } from "react";

/* Components */
import WeatherForm from "../WeatherForm/WeatherForm";
import WeatherMainInfo from "../WeatherMainInfo/WeatherMainInfo";
import Loading from '../Loading/Loading';

/* Css */
import styles from './WeatherApp.module.css';

const WeatherApp = () => {

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.name ?? ''}`
  }, [weather])

  async function loadInfo(city = 'london'){
      try {
        const request = await fetch(`${import.meta.env.VITE_APP_URL}?q=${city}&appid=${import.meta.env.VITE_APP_KEY}`);

        const json = await request.json();

        setTimeout(() => {
          setWeather(json);
        }, 2000);

        console.log(json)
        
      } catch (error) {throw new error}
  }
  
  function handleChangeCity(city){
    setWeather(null);
    loadInfo(city)
  }

  return (
    <div className={styles.weatherContainer}>
      <WeatherForm onChangeCity={handleChangeCity}/>
      {weather ? <WeatherMainInfo weather={weather}/> : <Loading/> }
    </div>
  )
}

export default WeatherApp;
