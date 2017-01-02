import React from 'react';

export const Login = React.createClass({
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
              <button type="" className="button">Login with Github</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});


export default Login;