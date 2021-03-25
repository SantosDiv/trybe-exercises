const GET_IMAGE = 'GET_IMAGE';
const REQUEST_IMAGE = 'REQUEST_IMAGE';
const FAILED_REQUEST = 'FAILED_REQUEST';

const getImage = (json) => ({
  type: GET_IMAGE,
  payload: json.message,
});

const requestDog = () => ({
  type: REQUEST_IMAGE,
});

const failedRequest = (error) => ({
  type: FAILED_REQUEST,
  payload: error,
});

const fetchDog = () => {
  return async (dispatch) => {
    dispatch(requestDog());
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const json = await response.json();
      return dispatch(getImage(json));
    } catch (error) {
      return dispatch(failedRequest(error));
    }
  }
}

export default fetchDog;
