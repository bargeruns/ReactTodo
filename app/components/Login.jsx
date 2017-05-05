import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

export const Login = React.createClass({
  onLogin(provider) {
    let {dispatch} = this.props;
    if (provider === 'github') dispatch(actions.startLoginGithub());
    dispatch(actions.startLoginGoogle());
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
                Login with your Github or Google account below.
              </p>
              <div className="row">
                <button type="" className="button" onClick={() => this.onLogin('github')}>Login with Github</button>
              </div>
              <div className="row">
                <button type="" className="button" onClick={() => this.onLogin('google')}>Login with Google</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});


export default Redux.connect()(Login);