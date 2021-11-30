import React from 'react'

function Liftar({ barnLift, expr, fjl, mellanLift, liikavaara, barnReady, exprReady, fjlReady, mellanReady, liikavaaraReady }) {
  
  const liftOpen = <span className="dotsNvalue">
                      <span className="status-text">
                        Öppen
                      </span>
                      <span className="dots">
                        <span id="dotOpen"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                      </span>                    
                    </span>;

  const liftReady = <span className="dotsNvalue">
                      <span className="status-text">
                        Startklar
                      </span>
                      <span className="dots">
                        <span className="dot"></span>
                        <span id="dotReady"></span>
                        <span className="dot"></span>
                      </span>
                    </span>;

  const liftClosed = <span className="dotsNvalue">
                        <span className="status-text">
                          Stängd
                        </span>
                        <span className="dots">
                          <span className="dot"></span>
                          <span className="dot"></span>
                          <span id="dotClosed"></span>
                        </span>
                      </span>;

  const bb = barnLift === "1" ? liftOpen 
            : barnReady === "1" ? liftReady
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
      <p className="value-box">Barnliften {bb} </p>
      <p className="value-box">Dundret Express {ex} </p>
      <p className="value-box">Fjälliften {fj} </p>
      <p className="value-box">Mellanliften {ml} </p>
      <p className="value-box">Liikavaaraliften {sl} </p>
    </div>
  )
}

export default Liftar
