import Login from "./Components/auth/auth";
import {BrowserRouter as Router, Route, Switch,Redirect} from "react-router-dom";
import Dashboard from "./Components/pages";
import {isLogin} from "./Reducers/auth";

function App() {
  return (
      <div className="App">
      <Router>
          <Switch>
              <Route path='/' render={() => (
                  isLogin() ?
                      <Dashboard/>
                      : <Login/>
              )} />
              <Route path='/dashboard' render={() => (
                  isLogin() ?
                      <Dashboard/>
                      : <Redirect to="/" />
              )} /> />
          </Switch>
      </Router>
      </div>
  );
}

export default App;
