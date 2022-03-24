import React, {useContext, useState, useEffect } from 'react';
import "./styles.css";
import { WeatherDataContext } from '../pages/main';

export const currentCelsisTemp = (temp) => { 
    return (temp - 273.15).toFixed(2)
}


const WeatherDetail = () => {
    const [maxTemp, setMaxTemp] = useState("0")
    const [minTemp, setMinTemp] = useState("0")
    const {weatherData} = useContext(WeatherDataContext)

    useEffect(() => {
        if (weatherData.main.temp) {
            let max_temp = currentCelsisTemp(weatherData.main.temp_max)
            let min_temp = currentCelsisTemp(weatherData.main.temp_min)
            setMaxTemp(max_temp)
            setMinTemp(min_temp)
        }
    }, [weatherData.main.temp])



    return (
        <div className='weather-detail'>
            <div className="detail-title"> Weather Detail</div>
            <div className="detail-box">
                <div>Max/Min Temp</div>
                <h1>{maxTemp}°C/ {minTemp}°C</h1>
            </div>
            <div className="detail-box">
                <div>Humidity</div>
                <div>{weatherData.main.humidity}%</div>
            </div>
            <div className="detail-box">
                <div>Wind</div>
                <div>{weatherData.wind.speed}km/h</div>
            </div>
            <div className="detail-box">
                <div>Cloudy</div>
                <div>{weatherData.clouds.all}%</div>
            </div>
        </div>
    )
}

export default WeatherDetail;