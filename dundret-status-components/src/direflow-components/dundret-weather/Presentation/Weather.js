import React from 'react'

function Weather({ temp, coldEffect, windSpeed }) {
  return (
    <div className="status-box">
    <h3>Väder</h3>
    <p className="value-box">Temperatur<span>{temp} °C</span></p>
    <p className="value-box">Köldeffekt<span>{coldEffect} °C</span></p>
    <p className="value-box">Vindstyrka<span>{windSpeed} m/s</span></p>
  </div>
  )
}

export default Weather
