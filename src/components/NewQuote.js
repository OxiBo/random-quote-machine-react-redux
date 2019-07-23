import React from "react";
import { connect } from "react-redux";

import { fetchQuote, isLoading } from "../actions";

const NewQuote = props => {
  const getNewQuote = e => {
    e.preventDefault();
    props.isLoading();
    props.fetchQuote();
  };
  return (
    <button className="fa fa-quote-right" onClick={getNewQuote}>
      Get a new quote
    </button>
  );
};

export default connect(
  null,
  { fetchQuote, isLoading }
)(NewQuote);
