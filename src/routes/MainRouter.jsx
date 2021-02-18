import React, {useContext} from 'react';
import {NavLink, Redirect, Switch, Route} from 'react-router-dom'
import {UserContext} from "../contexts";
import SettingsProfileForm from "../pages/settings/SettingsProfileForm";

const MainRouter = () => {
  const userContext = useContext(UserContext);

  // Redirection to authentication page if we are not connected
  if (!userContext.userInfos){
    return (
      <Redirect to={"/auth"} />
    )
  }

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
        <Route path={"/settings"} component={SettingsProfileForm}/>
        <Route path={"*"} render={() => <Redirect to={"/404"}/>}/>
      </Switch>
    </div>
  );
};

export default MainRouter;
