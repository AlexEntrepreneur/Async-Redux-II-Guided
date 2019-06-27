import React from 'react';
import styled from 'styled-components';

const Quote = (props) => {
  const favouritedQuote = {
    ...props.quote,
    favourite: !props.quote.favourite
  }

  return (
    <StyledQuote highlight={props.isQuoteOfTheDay} favourite={props.quote.favourite}>
      <h2 className='text'>{ props.quote.text }</h2>
      <p className='author'>{ props.quote.author }</p>
      <div>
        <button onClick={() => props.deleteQuote(props.quote.id)}>DELETE</button>
        <button onClick={() => props.markFavourite(props.quote.id, favouritedQuote)}>MARK FAVOURITE</button>
        <button onClick={() => props.makeQuoteOfTheDay(props.quote.id)}>MAKE QUOTE OF THE DAY</button>
      </div>
    </StyledQuote>
  );
}

const StyledQuote = styled.div`
  margin: 12px;
  padding: 32px 16px;
  border: 2px solid white;
  background-color: ${props => (props.highlight ? 'rgba(0, 0, 0, 0.2)' : 'none')};
  border-radius: 5px;
  
  ${props => (props.favourite ? 'border: 2px solid gold' : 'initial')};

  .text {
    margin-bottom: 8px;
  }

  .author {
    font-weight: bold;
    margin-bottom: 32px;
  }
`;

export default Quote;