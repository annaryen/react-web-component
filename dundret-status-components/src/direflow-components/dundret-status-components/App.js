import React from 'react';
import { Styled } from 'direflow-component';
import styles from './App.css';
import Status from './Logic/Status';

const App = () => {
//   const dispatch = useContext(EventContext);

//   const handleClick = () => {
//     const event = new Event('my-event');
//     dispatch(event);
//   };

//   const renderSampleList = props.sampleList.map((sample) => (
//     <div key={sample} className='sample-text'>
//       → {sample}
//     </div>
//   ));

  return (
    <Styled styles={styles}>
      <div className='app'>
        <Status />
      </div>
    </Styled>
  );
};


{/* 
  import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { EventContext, Styled } from 'direflow-component';
import styles from './App.css';
  
  <div className='top'>
<div className='header-image' />
</div>
<div className='bottom'>
<div className='header-title'>{props.componentTitle}</div>
<div>{renderSampleList}</div>
<button className='button' onClick={handleClick}>
  Click me!
</button>
</div> */}
// App.defaultProps = {
//   componentTitle: 'Dundret Status Components',
//   sampleList: [
//     'Create with React',
//     'Build as Web Component',
//     'Use it anywhere!',
//   ],
// }

// App.propTypes = {
//   componentTitle: PropTypes.string,
//   sampleList: PropTypes.array,
// };

export default App;
