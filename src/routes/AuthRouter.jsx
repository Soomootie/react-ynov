import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

const AuthRouter = () => {

  return (
    <div>
      <Switch>
        <Route path={"/auth"} component={() => {}}/>
        <Route path={"*"} render={() => <Redirect to={"/404"}/>}/>
      </Switch>
    </div>
  );
};

export default AuthRouter;
