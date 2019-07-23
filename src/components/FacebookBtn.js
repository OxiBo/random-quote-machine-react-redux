import React from "react";
import { connect } from "react-redux";

const FacebookBtn = props => {
  console.log(props);
  const facebook = event => {
    event.preventDefault();
    const urlFB = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(
      `${props.url}`
    )}`;
    window.open(urlFB, "_blank");
  };
  return (
    <button className="fa fa-facebook" onClick={facebook}>
      Facebook
    </button>
  );
};

const mapStateToProps = state => {
  return {
    url: state.newQuote.url
  };
};

export default connect(mapStateToProps)(FacebookBtn);
