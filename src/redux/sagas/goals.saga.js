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

function* fetchOneGoal(action) {
  console.log('fetchOneGoal saga function hit');
  try {
    const goalId = action.payload;
    const response = yield axios({
      method: 'GET',
      url: `/api/goals/${goalId}`
    })
    console.log(response.data);
  } catch(error) {
    console.log(error);
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

function* deleteGoal(action) {
  try {
    // console.log('action.payload is:', action.payload);
    yield axios({
      method: 'DELETE',
      url: `/api/goals/${action.payload}`
    })
    yield put({
      type: 'FETCH_GOALS'
    })
  } catch (err) {
    console.log(err)
  }}

  function* updateGoal(action) {
    try {
      const goalToEdit = action.payload;
      console.log('goalToEdit in updateGoal', goalToEdit);
      console.log('goalToEdit.text in updateGoal', goalToEdit.text);

      const response = yield axios({
        method: 'PUT',
        url: `/api/goals/${goalToEdit.id}`,
        data: {
          text: goalToEdit.text      
        }
      })
      yield put({
        type: 'FETCH_GOALS'
      })
    } catch (error) {
      console.log(error);
    }
  }

function* goalsSaga() {
  // corresponds to dispatch sent from component GoalsPage.jsx
  yield takeLatest('FETCH_GOALS', fetchGoals);
  yield takeLatest('CREATE_GOAL', createGoal);
  yield takeLatest('DELETE_GOAL', deleteGoal);
  yield takeLatest('UPDATE_GOAL', updateGoal);
  yield takeLatest('FETCH_ONE_GOAL', fetchOneGoal);
}

export default goalsSaga;