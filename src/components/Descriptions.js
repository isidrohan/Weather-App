import React from 'react'
import { GoArrowDown , GoArrowUp } from "react-icons/go";
import { BiHappy } from "react-icons/bi";
import { GiWhirlwind } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";


import './Description.css';

const Descriptions = ({weather,units}) => {
    const tempUnit = units === 'metric' ? "°C" : "°F";
    const windUnit = units === 'metric' ? "m/s" : "m/h";

    const card = [
        {
            id: 1,
            icon: <GoArrowDown/>,
            title: "min",
            data: weather.temp_min.toFixed(),
            unit: tempUnit
        },
        {
            id: 2,
            icon: <GoArrowUp/>,
            title: "max",
            data: weather.temp_max.toFixed(),
            unit: tempUnit
        },
        {
            id: 3,
            icon: <BiHappy/>,
            title: "feels like",
            data: weather.feels_like.toFixed(),
            unit: tempUnit
        },
        {
            id: 4,
            icon: <GiWhirlwind/>,
            title: "pressure",
            data: weather.pressure.toFixed(),
            unit: "hPa"
        },
        {
            id: 5,
            icon: <WiHumidity/>,
            title: "humidity",
            data: weather.humidity.toFixed(),
            unit: "%"
        },
        {
            id: 6,
            icon: <WiHumidity/>,
            title: "wind speed",
            data: weather.speed.toFixed(),
            unit: windUnit
        },
    ];

  return (
    <div className="section section-description">
        {card.map(({id,icon,title,data,unit})=>(
            <div key={id} className="card">
                <div className="des-icon">
                    {icon}
                    <small>{title}</small>
                </div>
                <h2>{`${data} ${unit}`}</h2>
            </div>
        ))}
    </div>
  )
}

export default Descriptions;