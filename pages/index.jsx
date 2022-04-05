import React, {createContext, useState, useEffect, useCallback, memo} from 'react';
import "./index.css";
import WeatherDetail from '../components/WeatherDetail'
import WeatherInfo from '../components/WeatherInfo'
import SearchBar from '../components/SearchBar';
import DailyWeather from '../components/DailyWeather';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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

const settings =  {
    infinite: false,
    slidesToShow: 8,
    slidesToScroll: 3
}


const MainPage = memo(() => {
    const [thereIsNoResult,setThereIsNoResult] = useState(false)
    const [weatherData, setWeatherData] = useState(initialItems)
    const [cityName, setCityName] = useState("")
    const [forcastToggle, setForcastToggle] = useState(false)
    const [dailyWeatherData, setDailyWeatherData] = useState(["1","2","3","4","5","7","8","9"])
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
    
    useEffect(async() => {
        if (cityName !== ""){
            const DailyWeatherData = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
                .catch((err) => console.log(err))
                const newData = DailyWeatherData.data.list
                const newDailyWeatherData = newData.splice(0,20)
                setDailyWeatherData(newDailyWeatherData)
        }
    },[cityName])

    const changeCityName = useCallback((event) => {
        if (event === "err") {
            setThereIsNoResult(true)
            setCityName("")
        } else {
            setCityName(event)
            setThereIsNoResult(false)
        }
    })

    const onChangeToggle = () => setForcastToggle((prev) => !prev)

    return (
        <WeatherDataContext.Provider value={{weatherData, changeWeatherData}}>
            <div className="container">
                <h1>Weather web</h1>
                <SearchBar changeCityName = {changeCityName}/>
                {cityName &&
                    <div className="weather-detail-box">
                        <div className="detail">
                            <div>
                                <WeatherInfo cityName = {cityName}/>
                            </div>
                            <WeatherDetail />
                        </div> 
                        <div className="forcast" onClick ={onChangeToggle}> 3 hour forecast ▼</div>
                        {forcastToggle &&
                            <Slider {...settings}>
                                    {dailyWeatherData.map((daily, i) => (          
                                        <DailyWeather key={i} dailyWeather={daily}/>
                                    ))}
                            </Slider>
                            }
                    </div> 
                }
                {thereIsNoResult && 
                    <div className="no-result">
                        Sorry, No matching results found !
                    </div>
                }
            </div>
        </WeatherDataContext.Provider>
    )
})

export default MainPage;