import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';



function GoalsPage() {
  console.log('in GoalsPage()');
 
  const goals = useSelector((store) => store.goals);
  // const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'FETCH_GOALS',
    });
    console.log('/goals');
  }, []);


  return (
    <div className="container">
      <>
        <h5>Goals Page!!!</h5>
        <ul>
          {goals && goals.map((goals) => {
            return (<li>{goals.text}</li>)
          })}
        </ul>
      </>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default GoalsPage;
