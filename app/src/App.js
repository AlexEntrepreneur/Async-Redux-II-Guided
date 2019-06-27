import React from 'react';
import { Route } from 'react-router-dom';
import RestrictedRoute from './HOCs/RestrictedRoute';
import { connect } from 'react-redux';
import QuotesView from './views/QuotesView';
import LoginView from './views/LoginView';

class App extends React.Component {
  // state = {
  //   errorMessage: '',
  //   requestPending: false
  // }

  render () {
    return (
      <div className="App">
        {
          this.props.errorMessage
          && <h2 style={{color: 'red'}}>{ this.props.errorMessage }</h2>
        }
        {/* {
          this.props.requestPending
          && <h2>Loading...</h2>
        } */}
        <RestrictedRoute exact path="/" component={QuotesView} />
        <Route path="/login" component={LoginView} />
      </div>
    );
  }
}

function mapStateToProps(reducers) {
  return {
    requestPending: reducers.requestPending,
    errorMessage: reducers.errorMessage
  };
}

export default connect(
  mapStateToProps
)(App);
