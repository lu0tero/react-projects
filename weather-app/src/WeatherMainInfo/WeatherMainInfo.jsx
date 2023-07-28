/* Css */
import styles from './WeatherMainInfo.module.css';

const WeatherMainInfo = ({weather}) => {
  return (
    <div className={styles.mainInfo}>
        <div className={styles.city}>{weather?.name}</div>
        <div className={styles.country}>{weather?.sys.country}</div>
        <div className={styles.row}>
            <div>
                <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`} alt={weather?.weather[0].description}/>
            </div>
            <div className={styles.weatherConditions}>
                <div className={styles.condition}>{weather?.weather[0].description}</div>
                <div className={styles.current}>{weather?.main.temp}°</div>
            </div>
        </div>
        <iframe title="mapa" src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d194965.92300018758!2d${weather?.coord.lon}293!3d${weather?.coord.lat}6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ses!4v1690371805190!5m2!1sen!2ses`} width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default WeatherMainInfo; 