import React from 'react';
import "./styles.css";

const WeatherDetail = () => {
    return (
        <div className='weather-detail'>
            <div className="detail-title"> Weather Detail</div>
            <div className="detail-box">
                <div>Max/Min Temp</div>
                <div>8/10</div>
            </div>
            <div className="detail-box">
                <div>Humidity</div>
                <div>8/10</div>
            </div>
            <div className="detail-box">
                <div>Wind</div>
                <div>8/10</div>
            </div>
            <div className="detail-box">
                <div>Cloudy</div>
                <div>8/10</div>
            </div>
        </div>
    )
}

export default WeatherDetail;