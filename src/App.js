import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import NotFound from "src/pages/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/404" component={NotFound}/>
          <Route path="/auth" component={() => null}/>
          <Route path="/" component={() => null}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
