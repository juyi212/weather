import React, {useContext, useState, useEffect} from 'react';
import "./styles.css";
import { WeatherDataContext } from '../pages/main';
import { currentCelsisTemp } from './WeatherDetail'

const getToday = (data) => {
    // 날짜는 우째 구하나..?
    const now = new Date();
    const getCurrentTime = now.getTime();
    const currentTime = new Date(
      getCurrentTime + data.timezone * 1000 - 9 * 60 * 60 * 1000
    );
  
    const getHour = currentTime.getHours();
    const getMin = currentTime.getMinutes();
  
    const hour = getHour >= 10 ? getHour : `0${getHour}`;
    const min = getMin >= 10 ? getMin : `0${getMin}`;
  
    return `${hour}:${min}`;
}

export const changeIcon = (icon) => {
    if (icon === 'Clouds') {
        return <i className="fas fa-cloud-sun fa-3x" ></i>
    } else if ( icon === "Clear") {
        return <i className="fas fa-sun fa-3x" ></i>
    } else if ( icon === "Thunderstorm") {
        return <i className="fas fa-bolt fa-3x"></i>
    } else if ( icon === "Drizzle") {
        return <i className="fas fa-water fa-3x"></i>
    } else if ( icon === "Rain") {
        return <i className="fas fa-umbrella fa-3x"></i>
    } else if ( icon === "Snow") {
        return <i className="fas fa-snowlake fa-3x"></i>
    } else if ( icon === "Atmosphere") {
        return <i className="fas fa-smog fa-3x"></i>
    } else {
        return <i className="fas fa-cloud fa-3x"></i>
    }
}


const WeatherInfo = ({cityName}) => {
    const {weatherData} = useContext(WeatherDataContext)
    const [today, setToday] = useState("")
    const [temperature, setTemperature] = useState("")

    useEffect(() => {
        setToday(getToday(weatherData))
        setTemperature(currentCelsisTemp(weatherData.main.temp))
    }, [weatherData.coord])

    return (
        <div className='weather-info'>
            <div className="country-info">
                <h1>{cityName}, {weatherData.sys.country}</h1>
            </div>
            <div>{today}</div>

                {weatherData.weather[0] && 
                    <div className="temperature-container">
                        <div>
                            {changeIcon(weatherData.weather[0].main)}
                        </div>
                        <div className='temperature-info'>
                            <div>{temperature}°C</div>
                            <div>{weatherData.weather[0].description}</div>
                        </div>
                    </div>
                }

        </div>
    )
}

export default WeatherInfo;