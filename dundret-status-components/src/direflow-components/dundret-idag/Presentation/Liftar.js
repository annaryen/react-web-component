import React from 'react'

function Liftar({ barnLift, expr, fjl, mellanLift, liikavaara }) {
  const liftOpen = <span className="open">Öppen</span>;
  const liftClosed = <span className="closed">Stängd</span>;

  const bb = barnLift === "1" ? liftOpen : liftClosed;
  const ex = expr === "1" ? liftOpen : liftClosed;
  const fj = fjl === "1" ? liftOpen : liftClosed;
  const ml = mellanLift === "1" ? liftOpen : liftClosed;
  const sl = liikavaara === "1" ? liftOpen : liftClosed;

  return (
    <div className="status-box">
      <h3>Liftar</h3>
      <p className="value-box">Transportbandet {bb}</p>
      <p className="value-box">Dundret Express {ex}</p>
      <p className="value-box">Fjälliften {fj} </p>
      <p className="value-box">Mellanliften {ml} </p>
      <p className="value-box">Liikavaaraliften {sl} </p>
    </div>
  )
}

export default Liftar
