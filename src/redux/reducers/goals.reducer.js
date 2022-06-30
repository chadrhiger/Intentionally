

const goalsReducer = (state = [], action) => {
  if (action.type==='SET_GOALS'){
    return action.payload
  }
  else {
    return state
  }  
}




// goals will be on the redux state at:
// goals.user
export default goalsReducer;