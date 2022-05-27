// goals.saga.js

import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchGoals() {
  console.log('in fetchGoals()');
  // get all goals from the DB
  try {
    const goals = yield axios.get('/api/goals');
    console.log('get all:', goals.data);
    yield put({
      // corresponds to GoalsReducer
      type: 'SET_GOALS',
      payload: goals.data
    });
  } catch {
    console.log('get all goals error');
  }
}

function* createGoal(action) {
  console.log('createGoal saga function, doodz!');
  // POST new goal to DB
  try {
    console.log('createGoal action.payload is:', action.payload);
    const response = yield axios({
      method: 'POST',
      url: '/api/goals',
      data: { text: action.payload},
    });
    console.log('createGoal response is:', response);
    yield put({
      type: 'FETCH_GOALS',
    });
  } catch {
    console.log('POST goals error');
  }
}

function* goalsSaga() {
  // corresponds to dispatch sent from component GoalsPage.jsx
  yield takeLatest('FETCH_GOALS', fetchGoals);
  yield takeLatest('CREATE_GOAL', createGoal);
}

export default goalsSaga;