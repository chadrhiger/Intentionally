

const editGoal = (state = {}, action) => {
  if (action.type === 'SET_EDIT_GOAL') {
    return action.payload;
  } else if (action.type === 'EDIT_GOAL_TEXT') {
    return (
      {
        ...state,
        text: action.payload
      }
    )
  }
  return state;
}

export default editGoal;