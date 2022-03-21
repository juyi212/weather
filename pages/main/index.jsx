import React, {createContext, useState, useEffect, useCallback} from 'react';
import "./index.css";
import WeatherDetail from '../../components/WeatherDetail'
import WeatherInfo from '../../components/WeatherInfo'
import SearchBar from '../../components/SearchBar';

export const WeatherDataContext = createContext()

const initialItems = {
    coord: {},
    weather: [],
    main: {},
    visibility: '',
    wind: {},
    rain: {},
    clouds: {},
    sys: {},
    timezone: 0,
}


const MainPage = () => {
    const [weatherData, setWeatherData] = useState(initialItems)
    const [cityName, setCityName] = useState("")
    console.log(weatherData)
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

    const changeCityName = useCallback((event) => {
        setCityName(event)
    })

    return (
        <WeatherDataContext.Provider value={{weatherData, changeWeatherData}}>
            <div className="container">
                <h1>Weather web</h1>
                <SearchBar changeCityName = {changeCityName}/>

                {/* <div className="detail">
                    <div>
                        <WeatherInfo cityName = {cityName}/>
                    </div>
                    <WeatherDetail />
                </div> */}

                {cityName && 
                    <div className="detail">
                        <div>
                            <WeatherInfo cityName = {cityName}/>
                        </div>
                        <WeatherDetail />
                    </div>
                    }
            </div>
        </WeatherDataContext.Provider>
    )
}

export default MainPage;