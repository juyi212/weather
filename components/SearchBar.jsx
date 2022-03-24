import React, {useState, useContext} from 'react';
import "./styles.css";
import axios from 'axios';
import { WeatherDataContext } from '../pages/main';

const SearchBar = ({changeCityName}) => {
    //const selectList = ["korea","japen","china","london","europe"]
    const [selected, setSelected] = useState("")
    const {changeWeatherData} = useContext(WeatherDataContext)

    const onChange = (event) => {
        const { target: { value }} = event;
        setSelected(value)
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        const getData = await axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${selected}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
            .then( (res) => {
                changeWeatherData(res.data)
                changeCityName(selected)
                }
                )
            .catch( err => console.log(err))
        setSelected("")
    }

    

    return (
        <div className="searchbar-container">
            <form className="searchbar-box" onSubmit = {onSubmit}>
                <input 
                    className="searchbar" 
                    list="city"
                    onChange={onChange} 
                    value={selected} 
                    placeholder="Enter city name"/>
                <i className="fas fa-search search-icon" size="lg"></i>
            </form>
        </div>
    )
}

export default SearchBar;