import React from 'react'

function Temperature({ temp }) {
  const degrees = Math.floor(temp);
  return (
    <div className="status-box">
     <p className="value">{degrees}°C <br /> <span className="value-text">Temperatur</span></p>
    </div>
  )
}

export default Temperature
