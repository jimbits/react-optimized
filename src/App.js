import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyles from "./css/GlobalStyles";
import Navbar from "./components/sitenav";
import LandingPage from "pages/hookspage";
import TrackedPage from "pages/trackedpage";
import ReduxBasicPage from "pages/reduxpage"
import {Provider} from "react-redux"
import store from "redux/store"
function App() {
  
  return (
    <div>
      <Provider store={store}>
        <Router>
          <GlobalStyles />
          <Navbar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/tracked" component={TrackedPage} />
            <Route path="/reduxbasic" component={ReduxBasicPage} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
