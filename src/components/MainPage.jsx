import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';

const MainPage = ({city}) => {

    const [ info, setInfo] = useState({})

useEffect (() => {
    getInfo()
}, [city])

 const getInfo = async () => {
    if (city && city.length > 2) {
       const {data} = await axios(`http://api.weatherapi.com/v1/current.json?key=bd67ef5acf9844469c3110139222212&q=${city}`)
       setInfo(data)
       console.log(data);
    }
 }
    return (
        <section className='main' id='main'>
            <div className="container">
                <div className='weather'>
                    <div className="weather__place">
                    <p className="weather__location"><span className='bolder'>{info?.location?.name}</span>, time {info?.location?.localtime.slice(-5)}</p>

                    </div>
                    <div className="weather__content">
                    <h2 className="weather__temp">{info?.current?.temp_c}°</h2>
                    <p className="weather__desc">{info?.current?.condition?.text}</p>
                    <div className="d-flex">
                        <p className="weather__info">Feels like: {info?.current?.feelslike_c}°</p>
                        <p className="weather__info">Pressure in: {info?.current?.pressure_in}</p>
                        <p className="weather__info">Wind kph: {info?.current?.wind_kph}</p>
                    </div>
                    </div>
                    <img className='weather__img' src={info?.current?.condition?.icon} alt='' />
                </div>
            </div>
        </section>
    );
};

export default MainPage;