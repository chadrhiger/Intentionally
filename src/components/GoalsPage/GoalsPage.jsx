// GoalPage.jsx

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

  return (
    <div className="container">
      <thead>
        <th>Goals Page!!!</th>
        <th>
          <button
            onClick={handleAddGoalClick}
          >Add Goal!</button>
        </th>
      </thead>
      <tr>
        <td>
          {goals.map((goal) => {
            return (
              <>
                <GoalItem key={goal.id} goal={goal} />
              </>
            )
          })}
        </td>
      </tr>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default GoalsPage;
