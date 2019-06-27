import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/actionCreators';

function LoginView(props) {
  const onLogin = (event) => {
    event.preventDefault();
    
    const usernameInput = event.target['username'];
    const passwordInput = event.target['password'];
    const credentials = {
      username: usernameInput.value,
      password: passwordInput.value
    };

    usernameInput.value
      && passwordInput.value
      && props.login(credentials)
      .then(() => props.history.push('/'));
  }
  
  return (
    <div className="form-container">
      <form onSubmit={onLogin} className="quote-form">
        <input name="username" value="lambda" placeholder="Username" readOnly />
        <input type="password" value="1234" name="password" placeholder="Password" readOnly />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default connect(
  null,
  { login }
)(LoginView);

