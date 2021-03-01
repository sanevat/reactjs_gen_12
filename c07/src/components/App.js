// vendor imports
import React, { useState, useEffect } from 'react';
// components
import UserDetailsWrapper from './UserDetailsWrapper';
// contexts
import { userDetailsContext } from '../data/contexts/userDetailsContext';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [showIncrementButton, setShowIncrementButton] = useState(true);
  const [userDetails, setUserDetails] = useState({
    fname: 'Ivana',
    lname: 'Kozolovska'
  });

  useEffect(() => {
    if (counter === 10) {
      setShowIncrementButton(false);
    } else if (counter === 0) {
      setShowIncrementButton(true);
    }
  }, [counter]);

  const onClickIncrement = () => {
    setCounter(state => {
      return state + 1;
    });
  };

  const onClickDecrement = () => {
    setCounter(state => {
      return state - 1;
    });
  };

  return (
    <div className='app'>
      {/* <p>Counter: {counter}</p>
      {showIncrementButton
        ?
        <button onClick={onClickIncrement}>+</button>
        :
        <button onClick={onClickDecrement}>-</button>
      } */}
      <userDetailsContext.Provider value={userDetails}>
        {/* <UserDetailsWrapper data={userDetails} /> */}
        <UserDetailsWrapper />
      </userDetailsContext.Provider>
    </div>
  );
};

export default App;
