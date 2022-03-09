import { Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Cart from "../pages/Cart";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Animation from "../components/Animation";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <>
          <Animation>
            <Header />
            <Dashboard />
          </Animation>
        </>
      </Route>
      <Route path="/cart">
        <>
          <Animation>
            <Header />
            <Cart />
          </Animation>
        </>
      </Route>
      <Route path="/login">
        <>
          <Animation>
            <Login />
          </Animation>
        </>
      </Route>
    </Switch>
  );
};

export default Routes;
