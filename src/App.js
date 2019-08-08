import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyles from "./css/GlobalStyles";
import Navbar from "./components/sitenav";
import LandingPage from "pages/hookspage";
import TrackedPage from "pages/trackedpage";


function App() {
  return (
    <div>
      <Router>
        <GlobalStyles />
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/tracked" component={TrackedPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
