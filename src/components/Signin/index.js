import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { SignUpLink } from "../SignUp";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

const SignInPage = () => (
  <div>
    <h1>Sign In</h1>
    <SignInPage />
    <SignUpLink />
  </div>
);

//Declare Inititial state
const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

//SignIn base form
class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  //Form submit event
  onsubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  //Change event
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  //Render Method
  render() {
    // Destructure date from this.state
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <form onSubmit={this.onsubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={this.onChange}
          placeholder="Email Address"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.onChange}
          placeholder="Password"
        />
        <button disabled={isInvalid}>Sign In</button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase);

export default SignInPage;

export { SignInForm };
