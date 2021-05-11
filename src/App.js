import './App.css';
import Homepage from "./components/home.js/homepage";
import Loginpage from "./components/login.js/loginpage";
import Registerpage from "./components/register.js/registerpage";
import BrowseBootcamps from "./components/browseCamps/browseCamps"


import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <Router>
            <div>
            <nav  className="navbar">
              <img className="logo"/>
                  <NavLink to="/" class="links">
                    <div className="devCamperLi">DevCamper</div>
                  </NavLink>
                  <NavLink to="/login" class="links" >
                    <div className="loginLi">Login</div>
                  </NavLink>
                  <NavLink to="/register" class="links">
                    <div className="registerLi">Register</div>
                  </NavLink>
                  <NavLink to="/browseBootcamp" class="links">
                    <div className="browsecampsLi">Browse Bootcamps</div>
                  </NavLink>
            </nav>
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
        </Router>
      </div>
      
    </div>
  );
}

export default App;
