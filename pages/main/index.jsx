import React from 'react';
import "./index.css";
import WeatherDetail from '../../components/WeatherDetail'
import WeatherInfo from '../../components/WeatherInfo'
import SearchBar from '../../components/SearchBar';

const MainPage = () => {
    return (
        <>
            <section>
                <SearchBar />
                <WeatherDetail />
            </section>
            <div className="container">
                <span className="date">날짜</span>
                <WeatherInfo />
            </div>
        </>
    )
}

export default MainPage;