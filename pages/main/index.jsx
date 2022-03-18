import React, {createContext, useState, useEffect} from 'react';
import "./index.css";
import WeatherDetail from '../../components/WeatherDetail'
import WeatherInfo from '../../components/WeatherInfo'
import SearchBar from '../../components/SearchBar';

export const WeatherDataContext = createContext()

const z = new Date()
const initialItems = {
    coord: {},
    weather: [],
    main: {},
    visibility: '',
    wind: {},
    rain: {},
    clouds: {},
    sys: {},
    timezone: -z.getTimezoneOffset()/60,
}

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


const MainPage = () => {
    const [weatherData, setWeatherData] = useState(initialItems)
    const [today, setToday] = useState(getToday(weatherData))
    const changeWeatherData = (newData) => {
        setWeatherData({
            coord: newData.coord,
            weather: newData.weather,
            main: newData.main,
            visibility: newData.visibility,
            wind: newData.wind,
            rain: newData.rain,
            clouds: newData.clouds,
            sys: newData.sys,
            timezone : newData.timezone
        })

    }
    useEffect(() => {
        setToday(getToday(weatherData))
    }, [weatherData.coord])


    return (
        <WeatherDataContext.Provider value={{weatherData, changeWeatherData}}>
            <section>
                <SearchBar />
                <WeatherDetail />
            </section>
            <div className="container">
                <div className="date">
                    <div>{today}</div>
                </div>
                <WeatherInfo />
            </div>
        </WeatherDataContext.Provider>
    )
}

export default MainPage;