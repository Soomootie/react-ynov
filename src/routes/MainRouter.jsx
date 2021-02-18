import React from 'react';
import {NavLink, Redirect, Switch, Route} from 'react-router-dom'

const MainRouter = () => {

  return (
    <div>
      <header>
        <NavLink to={"/"}>Main Page</NavLink>
        <NavLink to={"/blog"}>Blog</NavLink>
        <NavLink to={"/settings"}>Settings</NavLink>
      </header>
      <Switch>
        <Route exact path={"/"} component={() => null}/>
        <Route path={"/blog"} component={() => null}/>
        <Route path={"/settings"} component={() => null}/>
        <Route path={"*"} render={() => <Redirect to={"/404"}/>}/>
      </Switch>
    </div>
  );
};

export default MainRouter;
