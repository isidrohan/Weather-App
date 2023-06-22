const api_key = '9c1b54b4fbaddc0e8a469a7259fec5e5';

const makeiconURL = (iconID)=>`https://openweathermap.org/img/wn/${iconID}@2x.png`
const getFormattedData = async(city, units="metric")=>{
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${api_key}`

    const response = await fetch(URL);
    const resJson = await response.json();

    const {
        weather,
        main: {temp,feels_like,temp_min,temp_max,pressure,humidity},
        wind: {speed},
        sys: {country},
        name,
    } = resJson;

    const{description,icon } = weather[0];

    return{
        description,
        iconURL : makeiconURL(icon),
        temp,
        feels_like,
        temp_min,
        temp_max,
        pressure,
        humidity,
        speed,
        country,
        name
    }
};

export {getFormattedData};

