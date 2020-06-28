import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {Navigation} from "../Navigation";
import {Main} from "../Main";
import {Contact} from "../Contact";
import {Footer} from "../Footer";

export const App = () => (
    <Router>
      <Navigation/>
      <div id="top"/>
      <Switch>
        <Route path="/SET-Hacks/" component={Main} exact/>
        <Route path="/SET-Hacks/contact" component={Contact} exact/>
      </Switch>
      <Footer/>
    </Router>
);
