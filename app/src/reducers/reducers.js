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
} from '../actions/actionTypes';

export function quotesReducer(sliceOfState = [], action) {
  switch (action.type) {
    case GET_QUOTES_SUCCESS:
      return action.payload;
    case ADD_QUOTE_SUCCESS:
      return action.payload;
    case DELETE_QUOTE_SUCCESS:
      return action.payload;
    case MARK_FAVOURITE_SUCCESS:
      return action.payload;
    default:
      return sliceOfState;
  }
}

export function quoteOfTheDayReducer(sliceOfState = null, action) {
  switch (action.type) {
    case MAKE_QUOTE_OF_THE_DAY:
      return action.payload;
    case DELETE_QUOTE_SUCCESS:
      if (action.payload.id === sliceOfState) {
        return null;
      }
      return sliceOfState;
    default:
      return sliceOfState;
  }
}

export function errorMessageReducer(sliceOfState = '', action) {
  switch (action.type) {
    case GET_QUOTES_FAILURE:
      return action.payload;
    case GET_QUOTES_SUCCESS:
      return sliceOfState = '';

    case ADD_QUOTE_FAILURE:
      return action.payload;
    case ADD_QUOTE_SUCCESS:
      return sliceOfState = '';

    case DELETE_QUOTE_FAILURE:
      return action.payload;
    case DELETE_QUOTE_SUCCESS:
      return sliceOfState = '';

    case LOGIN_FAILURE:
      return action.payload;
    case LOGIN_SUCCESS:
      return sliceOfState = '';

    case MARK_FAVOURITE_FAILURE:
      return action.payload;
    case MARK_FAVOURITE_SUCCESS:
      return sliceOfState = '';

    default:
      return sliceOfState;
  }
}

export function requestPendingReducer(sliceOfState = false, action) {
  switch (action.type) {
    case GETTING_QUOTES:
      return sliceOfState = true;
    case GET_QUOTES_SUCCESS:
      return sliceOfState = false;
    case GET_QUOTES_FAILURE:
      return sliceOfState = false;

    case ADDING_QUOTE:
      return sliceOfState = true;
    case ADD_QUOTE_SUCCESS:
      return sliceOfState = false;
    case ADD_QUOTE_FAILURE:
      return sliceOfState = false;

    case DELETING_QUOTE:
      return sliceOfState = true;
    case DELETE_QUOTE_SUCCESS:
      return sliceOfState = false;
    case DELETE_QUOTE_FAILURE:
      return sliceOfState = false;

    case LOGGING_IN:
      return sliceOfState = true;
    case LOGIN_SUCCESS:
      return sliceOfState = false;
    case LOGIN_FAILURE:
      return sliceOfState = false;

    case MARKING_FAVOURITE:
      return sliceOfState = true;
    case MARK_FAVOURITE_SUCCESS:
      return sliceOfState = false;
    case MARK_FAVOURITE_FAILURE:
      return sliceOfState = false;

    default:
      return sliceOfState;
  }
}
