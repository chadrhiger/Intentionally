import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function GoalsPage() {
  console.log('in GoalsPage()');
 
  const goals = useSelector((store) => store.goalsReducer);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'FETCH_GOALS',
    });
    console.log('/goals');
  }, []);

  const handleAddGoalClick= () => {
    history.push('/')
  }

  return (
    <div className="container">
      <>
        <h5>Goals Page!!!</h5>
        <ul>
          {goals.map((goal) => {
            return (<li key={goal.id}>{goal.text}</li>)
          })}
        </ul>
        <button 
        // onClick={history.push('/addGoal')}
        >Add Goal!</button>

      </>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default GoalsPage;
