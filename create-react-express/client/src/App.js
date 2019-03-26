import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/search/index";
import Saved from "./pages/saved/index";
import Detail from "./pages/detail/index";
import NoMatch from "./pages/nomatch/index";
import Nav from "./components/Nav/index";



function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Saved} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;