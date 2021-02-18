import React, {useState, useCallback, useEffect} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import UserContext from "./contexts/UserContext";
import {userService} from "./services";
import {AuthRouter, MainRouter} from "./routes";
import NotFound from "./pages/NotFound";

function App() {
  const [userInfos, setUserInfos] = useState(null);

  /**
   * Refresh user infos from api
   * @type {function(): Promise<void>}
   */
  const refreshUserInfos = useCallback(() => {
    return userService.getInfos().then((user) => {
      setUserInfos(user);
    });
  }, []);

  useEffect(() => {
    refreshUserInfos().catch();
  }, [refreshUserInfos]);

  return (
    <div className="App">
      <UserContext.Provider value={{
        userInfos,
        refreshUserInfos
      }}>
        <BrowserRouter>
          <Switch>
            <Route path="/404" component={NotFound}/>
            <Route path="/auth" component={AuthRouter}/>
            <Route path="/" component={MainRouter}/>
          </Switch>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
