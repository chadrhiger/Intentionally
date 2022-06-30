// SessionItem

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function SessionItem({currentGoal, goToNextGoal}) {
  console.log('in SessionItem()');

  // const goals = useSelector((store) => store.goalsReducer);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleYesClick = () => {
    // dispatch({
    //   type: 'CREATE_ONE_ANSWER',
    //   payload: goal.id
    // });
    // goToNextGoal();
    // console.log('goal.id:', goal.id);
    // history.push('/session');
  }

  return (
    <div className='container'
    // key={goal.id} 
    >
      <h3>{currentGoal.text}</h3>
      <button className='btn' onClick={goToNextGoal}>Yes</button>
      <button className='btn' onClick={goToNextGoal}>No</button>
      <br></br>     
          {/* <button onClick={handleYesClick} className="btn">
            yes
          </button>
          <button className="btn">
            no
          </button>         */}
    </div>
  )
}

export default SessionItem;