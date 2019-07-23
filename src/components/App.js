import React, { Component } from "react";
import { connect } from "react-redux";

import Quote from "./Quote";
import NewQuote from "./NewQuote";
import TweetBtn from "./TweetBtn";
import FacebookBtn from "./FacebookBtn";

class App extends Component {
  
  render() {
    const { quote, firstLoad } = this.props;
    return (
      <div className="container">
        <header>
          <h1>Random Quote Engine</h1>
        </header>
        <main>
          <Quote />

          <div className="button-container">
            <NewQuote />
            {firstLoad && quote && <TweetBtn />}
            {firstLoad && quote && <FacebookBtn />}
          </div>
        </main>

        <footer>Written and coded by OxiBo, 2019</footer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quote: state.newQuote.quoteText,
    firstLoad: state.firstLoad
  };
};

export default connect(mapStateToProps)(App);
