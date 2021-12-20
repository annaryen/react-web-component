import React, { useState, useEffect } from 'react'
import Liftar from '../Presentation/Liftar';
import Weather from '../Presentation/Weather';

function Status() {
  // Drift status OPEN for lifts
  const [barnLift, setBarnLift] = useState();
  const [expr, setExpr] = useState();
  const [fjl, setFjl] = useState();
  const [mellanLift, setMellanLift] = useState();
  const [liikavaara, setLiikavaara] = useState();

  // Drift status READY for lifts
  const [barnReady, setBarnReady] = useState();
  const [exprReady, setExprReady] = useState();
  const [fjlReady, setFjlReady] = useState();
  const [mellanReady, setMellanReady] = useState();
  const [liikavaaraReady, setLiikavaaraReady] = useState();

  // Weather
  const [temp, setTemp] = useState();
  const [coldEffect, setColdEffect] = useState();
  const [windSpeed, setWindSpeed] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.dundretlapland.com/backstatus.php");

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      const data = await response.json();
      // Lift drift
      setBarnLift(data.BB_DRIFT.Value);
      setExpr(data.EX_DRIFT.Value);
      setFjl(data.FJL_DRIFT.Value);
      setMellanLift(data.ML_DRIFT.Value);
      setLiikavaara(data.SL_DRIFT.Value);
      // Weahter
      setTemp(data.TT_DAL_PV.Value);
      setColdEffect(data.WC_DAL_PV.Value);
      setWindSpeed(data.WS_DAL_PV.Value);
      // Lift Ready
      setBarnReady(data.BB_STARTKLAR.Value);
      setExprReady(data.EX_STARTKLAR.Value);
      setFjlReady(data.FJL_STARTKLAR.Value);
      setMellanReady(data.ML_STARTKLAR.Value);
      setLiikavaaraReady(data.SL_STARTKLAR.Value);
      

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="app">
       <Weather 
        temp={temp}
        coldEffect={coldEffect}
        windSpeed={windSpeed}
      />
      <Liftar 
        barnLift={barnLift}
        expr={expr}
        fjl={fjl}
        mellanLift={mellanLift}
        liikavaara={liikavaara}
        barnReady={barnReady}
        exprReady={exprReady}
        fjlReady={fjlReady}
        mellanReady={mellanReady}
        liikavaaraReady={liikavaaraReady}
      />
    
    </div>
  )
}

export default Status
