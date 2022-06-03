import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const history = useHistory();
  const user = useSelector((store) => store.user);

  const myGoalsClick = () => {
  history.push('/goals');
  }

  const mySessionClick = () => {
    history.push('/user');
    }
  return (
    <div className="container">
      <h2>Hi, {user.username}!</h2>
      <p>What would you like to do?</p>
      <button className="btn" onClick={mySessionClick}>Start Session</button>
      <br></br>
      <button className="btn" onClick={myGoalsClick}>My Goals</button>
      <br></br>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
