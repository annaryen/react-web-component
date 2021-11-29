import React from 'react';
import { Styled } from 'direflow-component';
import styles from './App.css';
import Status from './Logic/Status';


const App = () => {

  return (
    <Styled styles={styles}>
      <div>
        <Status />
      </div>
    </Styled>
  );
};


export default App;
