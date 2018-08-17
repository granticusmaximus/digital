import "../App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "../pages/home";
import { ToDo } from "../pages/todo";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { Lost } from "../pages/lost";
import { DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown } from "reactstrap";

const NaviRoute = () => (
  <Router>
    <div>
      <nav className="navbar navbar-expand-lg navbar-primary bg-light">
        <ul className="navbar-nav mr-auto">
          <li>
            <Link to={"/"} className="nav-link">
              {" "}
              Home{" "}
            </Link>
          </li>
          <li>
            <Link to={"/todo"} className="nav-link">
              ToDo List
            </Link>
          </li>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Account
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link to={"/register"} className="nav-link">
                  Register
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link to={"/lost"} className="nav-link">
                  Recover your password
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </ul>
      </nav>
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/todo" component={ToDo} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/lost" component={Lost} />
      </Switch>
    </div>
  </Router>
);

export default NaviRoute;
