import React from 'react';
import { connect } from 'react-redux';
import Quote from './Quote';

import { makeQuoteOfTheDay, markFavourite, deleteQuote, getQuotes } from '../actions/actionCreators';

export class Quotes extends React.Component {
  // state = {
  //   quotes: [],
  //   quoteOfTheDay: null,
  // }
  componentDidMount() {
    this.props.getQuotes();
  }

  render() {
    return (
      <div>
        <h1>My Favorite Quotes</h1>
        <div>
          {
            this.props.quotes.map(quote => (
              <Quote
                key={quote.id}
                quote={quote}
                isQuoteOfTheDay={this.props.quoteOfTheDay === quote.id}
                makeQuoteOfTheDay={this.props.makeQuoteOfTheDay}
                markFavourite={this.props.markFavourite}
                deleteQuote={this.props.deleteQuote}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(reducers) {
  return {
    quotes: reducers.quotes,
    quoteOfTheDay: reducers.quoteOfTheDay,
  };
}

export default connect(
  mapStateToProps,
  { makeQuoteOfTheDay, markFavourite, deleteQuote, getQuotes },
)(Quotes);