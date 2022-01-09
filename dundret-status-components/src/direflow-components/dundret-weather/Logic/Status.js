import React, { useState, useEffect } from 'react'
import Weather from '../Presentation/Weather';

function Status() {
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
      // Weahter
      setTemp(data.TT_DAL_PV.Value);
      setColdEffect(data.WC_DAL_PV.Value);
      setWindSpeed(data.WS_DAL_PV.Value);
      

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="api-component dundret-weather">
       <Weather 
        temp={temp}
        coldEffect={coldEffect}
        windSpeed={windSpeed}
      />    
    </div>
  )
}

export default Status
