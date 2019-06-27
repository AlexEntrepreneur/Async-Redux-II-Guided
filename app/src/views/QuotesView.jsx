import React from 'react';
import Quotes from '../components/Quotes';
import QuoteForm from '../components/QuoteForm';

function QuotesView(props) {
  return (
    <>
      <Quotes />
      <QuoteForm />
    </>
  );
}

export default QuotesView;