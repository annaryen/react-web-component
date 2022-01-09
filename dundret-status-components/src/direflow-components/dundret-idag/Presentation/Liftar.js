import React from 'react'

function Liftar({ barnLift, expr, fjl, mellanLift, liikavaara, barnReady, exprReady, fjlReady, mellanReady, liikavaaraReady }) {
  
  const liftOpen = <span className="dots-and-text">
                      <span className="status-text">
                        Öppen
                      </span>
                      <span className="dots">
                        <span id="dot-open"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                      </span>                    
                    </span>;

  const liftReady = <span className="dots-and-text">
                      <span className="status-text">
                        Startklar
                      </span>
                      <span className="dots">
                        <span className="dot"></span>
                        <span id="dot-ready"></span>
                        <span className="dot"></span>
                      </span>
                    </span>;

  const liftClosed = <span className="dots-and-text">
                        <span className="status-text">
                          Stängd
                        </span>
                        <span className="dots">
                          <span className="dot"></span>
                          <span className="dot"></span>
                          <span id="dot-closed"></span>
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
      <p className="value-box">Snölandsliften {bb} </p>
      <p className="value-box">Dundret Express {ex} </p>
      <p className="value-box">Fjälliften {fj} </p>
      <p className="value-box">Mellanliften {ml} </p>
      <p className="value-box">Stugliften {sl} </p>
      <div className="status-explained">
        <span id="status-closed">Stängd = Liften är inte igång</span>
        <span id="status-ready">Startklar = Liften förbereds för dagen</span>
        <span id="status-open">Öppen = Liften snurrar</span>
      </div>
    </div>
  )
}

export default Liftar
