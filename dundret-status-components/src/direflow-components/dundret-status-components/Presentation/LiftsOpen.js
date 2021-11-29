import React from 'react'

function LiftsOpen({ barnLift, expr, fjl, mellanLift, liikavaara }) {
  let numbersOpen = 0;
  if (barnLift === "1") {
    numbersOpen += 1;
  }
  if (expr === "1") {
    numbersOpen += 1;
  }
  if (fjl === "1") {
    numbersOpen += 1;
  }
  if (mellanLift === "1") {
    numbersOpen += 1;
  }
  if (liikavaara === "1") {
    numbersOpen += 1;
  }

  return (
    <div className="status-box">
     <p className="value">{numbersOpen} <br /> <span className="value-text">Liftar öppna</span></p>
    </div>
  )
}

export default LiftsOpen
