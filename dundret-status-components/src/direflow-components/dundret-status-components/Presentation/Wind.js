import React from 'react'

function Wind({ windSpeed }) {
  const speed = Math.floor(windSpeed);
  return (
    <div className="status-box">
      <p className="value">{speed} m/s<br /> <span className="value-text">Vindstyrka</span></p>
    </div>
  )
}

export default Wind
