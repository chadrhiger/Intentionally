import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function AddGoalPage() {
  console.log('in AddGoalPage()');
  const [addGoal, setAddGoal] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();



  const handleGoalsClick = () => {
    history.push('/goals');
    
  }

  const handleSubmit = (event) => {
    event.preventDefault();
      dispatch({
        type: 'CREATE_GOAL',
        payload: addGoal        
    });
    history.push('/goals');

  }

  return (
    <>
      <form>
        <h2>Add Goals Here, my gai!</h2>
        <label htmlFor="addGoal"></label>
        <input
          type="text"
          name="add new goal here"
          value={addGoal}
          onChange={(event) => setAddGoal(event.target.value)} />
        <button className="btn" onClick={handleSubmit}
        >Submit New Goal</button>
      </form>
      <button className="btn" onClick={handleGoalsClick}>Back to Goals</button>
    </>
  );
}

// this allows us to use <App /> in index.js
export default AddGoalPage;



