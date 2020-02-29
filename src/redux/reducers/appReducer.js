  
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
      let url = 'api.openweathermap.org/data/2.5/weather?q=marin&appid=394feb0696d7821f8fefccc54a73f174'
      //not going to be able to use fetch here because these are pure functions, whereas this returns a promise - async, going to try and use THUNK

      fetch(url, {method: 'GET'})
        .then(response => response.json())
      return state;
    default:
      return state;
  }
}
