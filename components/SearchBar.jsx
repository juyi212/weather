import React, {useState, useContext} from 'react';
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
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
                <FontAwesomeIcon icon={faSearch} className="search-icon" size="lg"/>         
            </form>
        </div>
    )
}

export default SearchBar;