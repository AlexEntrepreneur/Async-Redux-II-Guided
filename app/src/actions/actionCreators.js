import axios from 'axios';
import { 
  GETTING_QUOTES,
  GET_QUOTES_SUCCESS,
  GET_QUOTES_FAILURE,
  ADDING_QUOTE,
  ADD_QUOTE_SUCCESS,
  ADD_QUOTE_FAILURE,
  DELETING_QUOTE,
  DELETE_QUOTE_SUCCESS,
  DELETE_QUOTE_FAILURE,
  MARKING_FAVOURITE,
  MARK_FAVOURITE_SUCCESS,
  MARK_FAVOURITE_FAILURE,
  MAKE_QUOTE_OF_THE_DAY,
  LOGGING_IN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './actionTypes';

export function getQuotes() {
  return (dispatch) => {
    dispatch({ type: GETTING_QUOTES });

    const token = localStorage.getItem('token');
    const axiosConfig = token ? { headers: { 'Authorization': token }}: null;

    axios.get('http://localhost:5000/api/quotes', axiosConfig)
      .then(res => {
        dispatch({ type: GET_QUOTES_SUCCESS, payload: res.data });
      })
      .catch(err => {
        const error = err.response.data.message;
        dispatch({ type: GET_QUOTES_FAILURE, payload: error });
        console.error(error);
      });
  }
};

export function addQuote(quote) {
  return (dispatch) => {
    dispatch({ type: ADDING_QUOTE });

    const token = localStorage.getItem('token');
    const axiosConfig = token ? { headers: { 'Authorization': token } } : null;

    axios.post('http://localhost:5000/api/quotes', quote, axiosConfig)
      .then(res => {
        dispatch({ type: ADD_QUOTE_SUCCESS, payload: res.data });
      })
      .catch(err => {
        const error = err.response.data.message;
        dispatch({ type: ADD_QUOTE_FAILURE, payload: error });
        console.error(error);
      });
  }
}

export function deleteQuote(id) {
  return (dispatch) => {
    dispatch({ type: DELETING_QUOTE });

    const token = localStorage.getItem('token');
    const axiosConfig = token ? { headers: { 'Authorization': token } } : null;

    axios.delete(`http://localhost:5000/api/quotes/${id}`, axiosConfig)
      .then(res => {
        dispatch({ type: DELETE_QUOTE_SUCCESS, payload: res.data });
      })
      .catch(err => {
        const error = err.response.data.message;
        dispatch({ type: DELETE_QUOTE_FAILURE, payload: error });
        console.error(error);
      })
  }
}

export function markFavourite(id, quote) {
  return (dispatch) => {
    dispatch({ type: MARKING_FAVOURITE });

    const token = localStorage.getItem('token');
    const axiosConfig = token ? { headers: { 'Authorization': token } } : null;

    axios.put(`http://localhost:5000/api/quotes/${id}`, quote, axiosConfig)
      .then(res => {
        dispatch({ type: MARK_FAVOURITE_SUCCESS, payload: res.data });
      })
      .catch(err => {
        const error = err.response.data.message;
        dispatch({ type: MARK_FAVOURITE_FAILURE, payload: error });
        console.error(error);
      });
  }
}

export function login(credentials) {
  return (dispatch) => {
    dispatch({ type: LOGGING_IN });

    return axios.post('http://localhost:5000/api/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      })
      .catch(err => {
        const error = err.response.data.message;
        dispatch({ type: LOGIN_FAILURE, payload: error });
        console.error(error);
      });
  }
}

export function makeQuoteOfTheDay(id) {
  return {
    type: MAKE_QUOTE_OF_THE_DAY,
    payload: id,
  };
}