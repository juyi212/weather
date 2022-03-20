import React, {useContext, useState, useEffect } from 'react';
import "./styles.css";
import { WeatherDataContext } from '../pages/main';

const currentCelsisTemp = (max, min) => { 
    return [(max - 273.15).toFixed(2), (min - 273.15).toFixed(2)]
}


const WeatherDetail = () => {
    const [maxTemp, setMaxTemp] = useState("0")
    const [minTemp, setMinTemp] = useState("0")
    const {weatherData} = useContext(WeatherDataContext)

    useEffect(() => {
        if (weatherData.main.temp) {
            let [max_temp, min_temp] = currentCelsisTemp(weatherData.main.temp_max, weatherData.main.temp_min)
            setMaxTemp(max_temp)
            setMinTemp(min_temp)
            console.log(maxTemp)
        }
    }, [weatherData.main.temp])



    return (
        <div className='weather-detail'>
            <div className="detail-title"> Weather Detail</div>
            <div className="detail-box">
                <div>Max/Min Temp</div>
                <div>{maxTemp}°C/ {minTemp}°C</div>
            </div>
            <div className="detail-box">
                <div>Humidity</div>
                <div>{weatherData.main.humidity}%</div>
            </div>
            <div className="detail-box">
                <div>Wind</div>
                <div>{weatherData.main.speed}km/h</div>
            </div>
            <div className="detail-box">
                <div>Cloudy</div>
                <div>{weatherData.clouds.all}%</div>
            </div>
        </div>
    )
}

export default WeatherDetail;