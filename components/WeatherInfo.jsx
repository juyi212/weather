import React, {useContext} from 'react';
import "./styles.css";
import { WeatherDataContext } from '../pages/main';

const WeatherInfo = ({cityName}) => {
    const {weatherData} = useContext(WeatherDataContext)
    return (
        <div className='weather-info'>
            <div>{weatherData.sys.country}</div>
            <div>{cityName}</div>
        </div>
    )
}

export default WeatherInfo;