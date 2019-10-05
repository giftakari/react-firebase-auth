import React from "react";
import {withRouter} from react-router-dom;
import {compose} from 'recompose';
import {SignUpLink} from './SignUp';
import {withFirebase} from '../Firebase';
import *as ROUTES from '../../constants/routes';

const SignIn = () => (
  <>
    <form action="">
      <input type="text" />
    </form>
  </>
);

export default SignIn;
