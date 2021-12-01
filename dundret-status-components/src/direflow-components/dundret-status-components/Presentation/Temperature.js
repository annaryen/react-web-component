import React from 'react'

function Temperature({ temp }) {
  
  return (
    <div className="status-box">
     <p className="value">{temp} °C <br /> <span className="value-text">Temperatur</span></p>
    </div>
  )
}

export default Temperature
