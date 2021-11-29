import React, { useState, useEffect } from 'react'
import Liftar from '../Presentation/Liftar';
import Weather from '../Presentation/Weather';

function Status() {
  const [barnLift, setBarnLift] = useState();
  const [expr, setExpr] = useState();
  const [fjl, setFjl] = useState();
  const [mellanLift, setMellanLift] = useState();
  const [liikavaara, setLiikavaara] = useState();
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
      console.log(data);
      setBarnLift(data.BB_DRIFT.Value);
      setExpr(data.EX_DRIFT.Value);
      setFjl(data.FJL_DRIFT.Value);
      setMellanLift(data.ML_DRIFT.Value);
      setLiikavaara(data.SL_DRIFT.Value);
      setTemp(data.TT_DAL_PV.Value);
      setColdEffect(data.WC_DAL_PV.Value);
      setWindSpeed(data.WS_DAL_PV.Value);
      

    } catch (error) {
      console.log(error);
      console.log("Custom error message");
    }
  };

  return (
    <div className="app">
      <Liftar 
        barnLift={barnLift}
        expr={expr}
        fjl={fjl}
        mellanLift={mellanLift}
        liikavaara={liikavaara}
      />
      <Weather 
        temp={temp}
        coldEffect={coldEffect}
        windSpeed={windSpeed}
      />
    </div>
  )
}

export default Status
