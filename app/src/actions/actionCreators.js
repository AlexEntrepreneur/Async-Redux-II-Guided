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

    axios.get('http://localhost:5000/api/quotes')
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

    axios.post('http://localhost:5000/api/quotes', quote)
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

    axios.delete(`http://localhost:5000/api/quotes/${id}`)
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

    axios.put(`http://localhost:5000/api/quotes/${id}`, quote)
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

export function login() {
  // Implement login Action Creator
}

export function makeQuoteOfTheDay(id) {
  return {
    type: MAKE_QUOTE_OF_THE_DAY,
    payload: id,
  };
}