import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import SignInPage from "../pages/auth/SignInPage";
import AuthPage from "../pages/auth/AuthPage";

/**
 * Authentication router
 * @return {JSX.Element}
 * @constructor
 */
const AuthRouter = () => {

  return (
    <div>
      <Switch>
        <Route exact path={"/auth"} component={AuthPage}/>
        <Route path={"/auth/sign-in"} component={SignInPage}/>
        <Route path={"*"} render={() => <Redirect to={"/404"}/>}/>
      </Switch>
    </div>
  );
};

export default AuthRouter;
