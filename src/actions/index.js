import { newQuote } from "../apis/getQuote";

export const fetchQuote = () => async dispatch => {
  const response = await newQuote();
  if (response.error) {
    dispatch({ type: "ERROR", payload: response.error, isLoading: false });
  } else {
    dispatch({ type: "FETCH_QUOTE", payload: response });
  }
};

export const isLoading = () => {
  return {
    type: "IS_LOADING",
    isLoading: true
  };
};
