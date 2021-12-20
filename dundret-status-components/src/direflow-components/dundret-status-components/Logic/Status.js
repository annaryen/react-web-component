import React, { useEffect, useState } from 'react'
import LiftsOpen from '../Presentation/LiftsOpen';
import Temperature from '../Presentation/Temperature';
import WebCam from '../Presentation/WebCam';
import Wind from '../Presentation/Wind';

function Status() {
  const [barnLift, setBarnLift] = useState();
  const [expr, setExpr] = useState();
  const [fjl, setFjl] = useState();
  const [mellanLift, setMellanLift] = useState();
  const [liikavaara, setLiikavaara] = useState();
  const [temp, setTemp] = useState();
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
      setBarnLift(data.BB_DRIFT.Value);
      setExpr(data.EX_DRIFT.Value);
      setFjl(data.FJL_DRIFT.Value);
      setMellanLift(data.ML_DRIFT.Value);
      setLiikavaara(data.SL_DRIFT.Value);
      setTemp(data.TT_DAL_PV.Value);
      setWindSpeed(data.WS_DAL_PV.Value);
      

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='app'>
      <Temperature temp={temp} />
      <Wind windSpeed={windSpeed} />
      <LiftsOpen 
        barnLift={barnLift}
        expr={expr}
        fjl={fjl}
        mellanLift={mellanLift}
        liikavaara={liikavaara}      
      />
      <WebCam />
    </div>
  )
}

export default Status
