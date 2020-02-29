  
import { ADD_ITEM, DELETE_ITEM, GET_WEATHER} from '../actionTypes';
// will have different actions


const initialState = {
  testState: ['testing', 'initial setup', 'using redux']
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    // Make cases here
    case GET_WEATHER:
      console.log('trying to get weather')
      // do fetch request to get weather
    default:
      return state;
  }
}
