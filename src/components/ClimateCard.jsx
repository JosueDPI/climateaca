import { useState } from "react"

const ClimateCard = ({ weather, temp }) => {

  const [isCelsius, setIsCelsius] = useState(true)  
  const  handleChangeTemp= () => setIsCelsius(!isCelsius)

  
  return (
    <div>
        <article className="weather">
            <h1>WeatherApp</h1>
            <h2>{weather?.name}, {weather?.sys.country}</h2>
            <section className="weather__content">
                <header className="weather__img">
                    <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
                </header>
                <article className="weather__footer">
                    <h3>{weather?.weather[0].description}</h3>
                    <ul>
                        <li><span>Win Speed</span> {weather?.wind.speed} m/s</li>
                        <li><span>Clouds</span> {weather?.clouds.all} %</li>
                        <li><span>Pressure</span> {weather?.main.pressure} hPa</li>
                    </ul>
                </article>
            </section>
            <footer>
                <h2>
                    {
                     isCelsius 

                     ? `${temp?.celsius} °C`
                     : `${temp?.farenheit} °F`
                    
                    } 
                </h2>
                <button onClick={handleChangeTemp}>Change to {isCelsius ? "°F" : "°C"}</button>
            </footer>
        </article>
    </div>
  )
}

export default ClimateCard