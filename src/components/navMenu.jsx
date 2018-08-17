import "../App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "../pages/home";
import { ToDo } from "../pages/todo";
import { Notes } from "../pages/notes";
import { PreviousNotes } from "../pages/previousNotes";

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
          <li>
            <Link to={"/notes"} className="nav-link">
              Notes
            </Link>
          </li>
          <li>
            <Link to={"/previous"} className="nav-link">
              Previous Notes
            </Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/todo" component={ToDo} />
        <Route path="/notes" component={Notes} />
        <Route path="/previous" component={PreviousNotes} />
      </Switch>
    </div>
  </Router>
);

export default NaviRoute;