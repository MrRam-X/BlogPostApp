//import Home from "./pages/Home";
import "./App.css";

//import User from "./components/users/User";
import NavDefault from "./components/default-nav/NavDefault";
import Default from "./pages/Default";

import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Switch } from "react-router-dom";
//import { useState } from "react";
import CreatePost from "./components/users/CreatePost";

function App() {
  //const [user, setUser] = useState(false);
  return (
    <div className="App">
      <header className="container-header">
        <h2>Post Blog App</h2>
      </header>

      <div>
        <NavDefault />
        <Switch>
          <Route path="/" exact>
            <Default />
          </Route>
          <Route path="/create-post">
            <CreatePost />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
