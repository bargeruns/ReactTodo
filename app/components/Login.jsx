import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

export const Login = React.createClass({
  onLogin() {
    let {dispatch} = this.props;
    dispatch(actions.startLogin());
  },
  render() {
    return (
      <div>
        <h1 className="page-title">ReactTodos</h1>
        <div className="row">
          <div className="columns small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>
                Login with your Github account below.
              </p>
              <button type="" className="button" onClick={this.onLogin}>Login with Github</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});


export default Redux.connect()(Login);