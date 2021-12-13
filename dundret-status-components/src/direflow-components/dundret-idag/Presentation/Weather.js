import React from 'react'

function Weather({ temp, coldEffect, windSpeed }) {
  return (
    <div className="status-box">
    <h3>Väder</h3>
    <p className="value-box">Temperatur (dal)<span>{temp} °C</span></p>
    <p className="value-box">Köldeffekt (dal)<span>{coldEffect} °C</span></p>
    <p className="value-box">Vind (dal)<span>{windSpeed} m/s</span></p>
    <p className="value-box">Temperatur (topp)<span>- m/s</span></p>
    <p className="value-box">Vind (topp)<span>- m/s</span></p>
  </div>
  )
}

export default Weather
