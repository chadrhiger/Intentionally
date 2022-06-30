// GoalItem.jsx 

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function GoalItem({ goal }) {

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
    <tr key={goal.id} >
      <td>{goal.text}</td>
      <td>
        <button 
          onClick={handleDelete} >
          delete
        </button>
        <button 
          onClick={() => history.push(`/editGoal/${goal.id}`)}>
          edit
        </button>
      </td>
    </tr>
  )

}

export default GoalItem;