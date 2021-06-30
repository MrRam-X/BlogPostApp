import "./App.css";
import BasicNav from "./components/BasicNav";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BasicNav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
