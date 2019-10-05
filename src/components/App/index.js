import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp/";
import SignIn from "../SignIn";
import PassWordForgetPage from "../PasswordForget";
import Homepage from "../Home";
import AccountPage from "../Account";
import AdminPage from "../Admin";

import * as ROUTES from "../../constants/routes";

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <hr />
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />

        <Route path={ROUTES.PASSWORD_FORGET} component={PassWordForgetPage} />

        <Route path={ROUTES.HOME} component={Homepage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route exact path={ROUTES.ADMIN} component={AdminPage} />
      </div>
    </Router>
  );
};
export default App;
