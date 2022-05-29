// GoalItem.jsx 

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function GoalItem({goal}) {
 
  const history = useHistory();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch({
      type: 'DELETE_GOAL',
      payload: goal.id
    });
    console.log('goal id:', goal.id);
  }

  return (
    <div key={goal.id} >
      <h3>{goal.text}</h3>
      <button onClick={handleDelete} >delete</button>
    </div>
  )

}

export default GoalItem;