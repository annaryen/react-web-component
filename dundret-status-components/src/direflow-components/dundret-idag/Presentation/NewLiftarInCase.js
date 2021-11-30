import React from 'react'

function Liftar({ barnLift, expr, fjl, mellanLift, liikavaara, barnReady, exprReady, fjlReady, mellanReady, liikavaaraReady }) {
  // Lifts open/ready/closed status dots
  const statusDotsOpen = <span className="dots"><span id="dotOpen"></span><span className="dot"></span><span className="dot"></span></span>;
  const statusDotsReady = <span className="dots"><span className="dot"></span><span id="dotReady"></span><span className="dot"></span></span>;
  const statusDotsClosed = <span className="dots"><span className="dot"></span><span className="dot"></span><span id="dotClosed"></span></span>;

  const bbDots = barnLift === "1" ? statusDotsOpen
                : barnReady === "0" ? statusDotsReady
                : statusDotsClosed;
  const exDots = expr === "1" ? statusDotsOpen
                : exprReady === "1" ? statusDotsReady
                : statusDotsClosed;
  const fjDots = fjl === "1" ? statusDotsOpen
                : fjlReady === "1" ? statusDotsReady
                : statusDotsClosed;
  const mlDots = mellanLift === "1" ? statusDotsOpen
                : mellanReady === "1" ? statusDotsReady
                : statusDotsClosed;
  const slDots = liikavaara === "1" ? statusDotsOpen
                : liikavaaraReady === "1" ? statusDotsReady
                : statusDotsClosed;
  
  // Lifts open/ready/closed text
  const liftOpen = <span className="open">Öppen</span>;
  const liftReady = <span className="ready">Startklar</span>
  const liftClosed = <span className="closed">Stängd</span>;

  const bb = barnLift === "1" ? liftOpen 
            : barnReady === "0" ? liftReady
            : liftClosed;
  const ex = expr === "1" ? liftOpen 
            : exprReady === "1" ? liftReady
            : liftClosed;
  const fj = fjl === "1" ? liftOpen 
            : fjlReady === "1" ? liftReady
            : liftClosed;
  const ml = mellanLift === "1" ? liftOpen 
            : mellanReady === "1" ? liftReady
            : liftClosed;
  const sl = liikavaara === "1" ? liftOpen 
            : liikavaaraReady === "1" ? liftReady
            : liftClosed;



  return (
    <div className="status-box">
      <h3>Liftar</h3>
      <p className="value-box">Transportbandet <span className="dotsNvalue">{bbDots} {bb}</span></p>
      <p className="value-box">Dundret Express <span className="dotsNvalue">{exDots} {ex}</span></p>
      <p className="value-box">Fjälliften <span className="dotsNvalue">{fjDots} {fj} </span></p>
      <p className="value-box">Mellanliften <span className="dotsNvalue">{mlDots} {ml} </span></p>
      <p className="value-box">Liikavaaraliften <span className="dotsNvalue">{slDots} {sl} </span></p>
    </div>
  )
}

export default Liftar
