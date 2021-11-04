import { Route, Switch } from "react-router";
import { Store } from "../Pages/store";
import { Login } from "../Pages/home";
import { SignUp } from "../Pages/signUp";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/store">
        <Store />
      </Route>
      <Route path="/signUp">
        <SignUp />
      </Route>
    </Switch>
  );
}

export default Routes;
