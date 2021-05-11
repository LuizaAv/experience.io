import React from "react";

import Homepage from "./components/home.js/homepage";
import Loginpage from "./components/login.js/loginpage";
import Registerpage from "./components/register.js/registerpage";
import BrowseBootcamps from "./components/browseCamps/browseCamps";

import {
    Switch,
    Route,
  } from "react-router-dom";

function Mainroutes() {
    return(
        <div>
            <Switch>
                <Route exact path="/">
                  <Homepage/>
                </Route>
                <Route path="/login">
                  <Loginpage/>
                </Route>
                <Route path="/register">
                  <Registerpage/>
                </Route>
                <Route path="/browseBootcamp">
                  <BrowseBootcamps/>
                </Route>
                </Switch>
        </div>
    )
}

export default Mainroutes