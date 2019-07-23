import React from "react";
import { connect } from "react-redux";

const TweetBtn = props => {
  const tweet = event => {
    event.preventDefault();

    const urlTweet = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `${props.quoteText} - ${props.author}`
    )}`;

    window.open(urlTweet, "_blank");
  };

  return (
    <button className="fa fa-twitter" onClick={tweet}>
      Tweet
    </button>
  );
};

const mapStateToProps = state => {
  return {
    quoteText: state.newQuote.quoteText,
    author: state.newQuote.author
  };
};

export default connect(mapStateToProps)(TweetBtn);
