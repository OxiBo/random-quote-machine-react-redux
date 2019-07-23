import React from "react";
import { connect } from "react-redux";

const Quote = props => {
  const { newQuote: { quoteText, author }, error, isLoading  } = props;
  return (
    <div className="quote">
      {error && <p className="error">{error}</p>}

        <blockquote>
          {quoteText && isLoading && error ? (
            <p> Loading...</p>
          ) : (
            quoteText
          )}
        </blockquote>
        <p id="author">{author}</p>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    newQuote: state.newQuote,
    error: state.error,
    isLoading: state.isLoading,
  }
}

export default connect(mapStateToProps)(Quote);
