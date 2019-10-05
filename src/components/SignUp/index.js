import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "../Firebase";
import { compose } from "recompose";
import * as ROUTES from "../../constants/routes";

// SignUppage
const SignUpPage = () => (
  <div>
    <h1>SignUp with us today !</h1>

    <SignUpForm />
  </div>
);

//Initialize the state for Users
const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

//Signup Form for new users
class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  //Submit event when the form is submited
  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  //The form change event
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <form onSubmit={this.onSubmit} method="post">
        <label htmlFor="username">FullName </label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={this.onChange}
          placeholder="Full Name"
        />
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={this.onChange}
          placeholder="Email Address"
        />
        <label htmlFor="passwordOne">Password</label>
        <input
          type="password"
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          placeholder="Password"
        />
        <label htmlFor="passwordTwo">Confirm Password</label>
        <input
          type="password"
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          placeholder="Password"
        />
        <button type="submit" disabled={isInvalid}>
          SignUp
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

//SingUp Link
const SignUpLink = () => (
  <p>
    Don't have an account ? <Link to={ROUTES.SIGN_UP}>Sign Up </Link>
  </p>
);

const SignUpForm = compose(
  withRouter,
  withFirebase
)(SignUpFormBase);

export default SignUpPage;
export { SignUpForm, SignUpLink };
