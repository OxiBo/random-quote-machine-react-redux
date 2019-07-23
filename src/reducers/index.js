const defaultQuoteState = {
  newQuote: {
    quoteText: "Get Your New Quote",
    author: "",
    url: ""
  },
  firstLoad: false,
  isLoading: false,
  error: ""
};

const fetchQuoteReducer = (state = defaultQuoteState, action) => {
  switch (action.type) {
    case "FETCH_QUOTE":
      return { ...state, newQuote: action.payload, isLoading: false, firstLoad: true, error: "" };
    case "IS_LOADING":
      return { ...state, isLoading: action.isLoading };
    case "ERROR":
      return { ...state, error: action.payload, isLoading: false };

    default:
      return state;
  }
};

export default fetchQuoteReducer;
