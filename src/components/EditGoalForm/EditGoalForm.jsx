// EditGoalForm.jsx

import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function EditGoalForm() {
  useEffect(() => {
    console.log('editGoal is:', editGoal);
    dispatch({
      type: 'FETCH_ONE_GOAL',
      payload: goalId
    })
  }, [])

  const editGoal = useSelector(store => store.goalsReducer);

  const params = useParams();
  const goalId = params.id;
  console.log('params.id is:', params.id);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'UPDATE_GOAL',
      payload: editGoal
    })
    history.push('/');
    console.log('editGoal **********************', editGoal);
  }

  return (
    <div>
      <h2>Edit Goal:</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder={editGoal.text} // goal to be edited should be in the input field on click
          value={editGoal.text}
          onChange={(e) => {
            dispatch({
              type: 'EDIT_GOAL_TEXT',
              // 'EDIT_GITHUB_USERNAME',
              payload: e.target.value
            })
          }}
        />
        <button>Update Goal</button>
      </form>
      <button
        onClick={() => history.push('/')}>
        Cancel
      </button>
    </div>
  );
}

export default EditGoalForm;