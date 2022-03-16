import React from 'react';
import "./index.css";
import WeatherDetail from '../../components/WeatherDetail'
import SearchBar from '../../components/SearchBar';

const MainPage = () => {
    return (
        <div>
            <aside >
                <SearchBar />
            </aside>
            <div className="container">
                <span className="date">날짜</span>
                <WeatherDetail />
            </div>
        </div>
    )
}

export default MainPage;