import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import GoalItem from '../GoalItem/GoalItem';

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

  const handleAddGoalClick = () => {
    history.push('/addGoal')
  }

  // const handleDelete = () => {
  //   console.log('goal.id', goals.id);

  //   dispatch({
  //     type: 'DELETE_GOAL',
  //     payload: goals.id,
  //   })
  // }

  return (
    <div className="container">
      <>
        <h5>Goals Page!!!</h5>
        <ul>
          {goals.map((goal) => {
            return (
              <>
                {/* <li key={goal.id}>{goal.text}</li> */}
                {/* <button >edit</button> */}
                <GoalItem key={goal.id} goal={goal}/>
                {/* <button
                  onClick={() => handleDelete()}>
                  delete
                </button> */}
              </>
            )
          })}
        </ul>
        <button
          onClick={handleAddGoalClick}
        >Add Goal!</button>

      </>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default GoalsPage;
