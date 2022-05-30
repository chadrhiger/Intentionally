// EditGoalForm.jsx

import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function EditGoalForm() {
  useEffect(() => {
    dispatchEvent({
      type: 'FETCH_ONE_GOAL',
      payload: goalId
    })
  }, [])

  const editGoal = useSelector(store => store.editGoal);

  const params = useParams();
  const goalId = params.id;

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'UPDATE_GOAL',
      payload: editGoal
    })
    history.push('/');
  }

  return (
    <div>
      <h2>Edit Goal:</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder='{goal.text}' // goal to be edited should be in the input field on click
          value={editStudent.github_name}
          onChange={(e) => {
            dispatch({
              type: 'EDIT_GOAL',
              // 'EDIT_GITHUB_USERNAME',
              payload: e.target.value
            })
          }}
        />
        <button>Update Goal</button>
      </form>
    </div>
  );
}

export default EditGoalForm;