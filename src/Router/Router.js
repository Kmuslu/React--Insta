import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "../pages/Main"
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Navbar from "../components/Navbar";

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/register" component={Signup} />
        <Route path="/login" component={Signin} />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}

export default AppRouter;