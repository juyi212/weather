import React, {useEffect} from 'react';
import "./styles.css";
import {changeIcon} from './WeatherInfo'
import {currentCelsisTemp} from './WeatherDetail'

const DailyWeather = ({dailyWeather}) => {
    return (
        <div className='weather-daily-box'>
            <div>{dailyWeather.dt_txt}</div>
            <div>{changeIcon(dailyWeather.weather[0].main)}</div>
            <br></br>
            <div>{currentCelsisTemp(dailyWeather.main.temp)}°C</div>
        </div>
    )
}

export default DailyWeather;