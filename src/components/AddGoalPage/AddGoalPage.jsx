import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function AddGoalsPage() {
  console.log('in AddGoalsPage()');

  const history = useHistory();



  const handleGoalsClick = () => {
    // dispatch({ 
    //   type: 'FETCH_MOVIE',
    //   payload: movie.id
    // });
    // dispatch({
    //   type: 'FETCH_GENRE',
    //   payload: movie.id
    // });
    // console.log('genre id:', movie.id);
    history.push('/goals');
  }

  return (
    <>
      <p>Add Goals on this Page Someday!!</p>
      <button onClick={handleGoalsClick}>Back to Goals</button>
    </>
  );


}

// this allows us to use <App /> in index.js
export default AddGoalsPage;



