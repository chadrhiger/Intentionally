// SessionPage.jsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SessionItem from '../SessionItem/SessionItem';



function SessionPage() {
  console.log('in SessionPage()');
  const dispatch = useDispatch();
  const goals = useSelector((store) => store.goalsReducer);
  const history = useHistory();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    dispatch({
      type: 'FETCH_GOALS',
    });
    console.log('/goals');
  }, []);


  const goToNextGoal = () => {
      if (currentIndex < goals.length -1) {
        setCurrentIndex(currentIndex + 1)
      }
      else {
        history.push('/goals')
      }
  }

  return (
    <>
      <div>
        { goals.length > 0 &&
          <SessionItem 
          currentGoal={goals[currentIndex]}
          goToNextGoal={goToNextGoal}
          />   
        }
      </div>
    </>
  )
}

export default SessionPage;