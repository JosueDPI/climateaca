import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import ClimateCard from './components/ClimateCard'
import Loading from './components/Loading'

function App() {

  const [latlon, setlatlon] = useState()
  const [weather, setweather] = useState()
  const [temp, setTemp] = useState()

  useEffect(() => {

  const success = pos => {
    const objLatLon = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    }
    setlatlon(objLatLon)
  }
  const error = err => {}

  navigator.geolocation.getCurrentPosition(success, error)
    
  }, [])

  useEffect(() => {
    if (latlon) {
      const apiKey = "fd1c5bc52c8888bfcc1f4d76c32ba96b"
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latlon.lat}&lon=${latlon.lon}&appid=${apiKey}`
      axios.get(url)
      .then(response => {
        const celsius = (response.data.main.temp - 273.15).toFixed(1)
        const farenheit = (celsius * 9/5 + 32).toFixed(1)
        setTemp({ celsius, farenheit })
        setweather(response.data)
      })
      .catch(err => console.error(err))
    }

    
  }, [latlon])
  
  const appStyle = {
    backgroundImage: `url("/backgrounds/sky.jpg")`
  }

  return (
    <div style={appStyle} className="App">
      {
        weather ?
        <ClimateCard 
        weather= {weather}
        temp= {temp}
        />
        :
        <Loading/>
        
      }
      
    </div>
  )
}

export default App
