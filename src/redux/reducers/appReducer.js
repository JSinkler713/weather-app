  
// import { ADD_ITEM, DELETE_ITEM } from '../actionTypes';
// will have different actions


const initialState = {
  testState: ['testing', 'initial setup', 'using redux']
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    // Make cases here

    default:
      return state;
  }
}
