// goals.saga.js

import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchGoals() {
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

function* goalsSaga() {
  // corresponds to dispatch sent from component GoalsPage.jsx
  yield takeLatest('FETCH_GOALS', fetchGoals);
}

export default goalsSaga;