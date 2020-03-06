
//could do in another file
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
//
let data;
const url = 'api.openweathermap.org/data/2.5/weather?q=marin&appid=394feb0696d7821f8fefccc54a73f174';
const urlTwo = 'http://tweet-stream.glitch.me/api/tweets'
const urlThree = 'https://swapi.co/api/planets/3/'
const urlFour = 'https://api.weather.gov/points/37.540726,-77.436050'
const urlFive = 'https://api.weather.gov/gridpoints/MTR/64,138/forecast'
// heres the async function
export const fetchWeather = () => {
  return dispatch => {
    fetch(urlFive, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
         dispatch(getWeather(data));
      })
  }
}


export const getWeather = weather => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: { weather }
});
    
