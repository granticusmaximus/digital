import "../App.css";
import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "../pages/home";
import { ToDo } from "../pages/todo";
import { Note } from "../pages/Note";
import { Register } from "../pages/register";
import MyAccount from "../pages/user/account";
import MyFriends from "../pages/user/friends";
import App from "./containers/App";
import NotFoundPage from "./containers/NotFoundPage.js";
import FormPage from "./containers/FormPage";
import Dashboard from "./containers/DashboardPage";
import AboutPage from "./containers/AboutPage";
import CustomerListPage from "./containers/CustomerListPage";
import CustomerFormPage from "./containers/CustomerFormPage";

import OrderListPage from "./containers/OrderListPage";
import OrderFormPage from "./containers/OrderFormPage";
import ProductFormPage from "./containers/ProductFormPage";
import ProductListPage from "./containers/ProductListPage";
import LoginPage from "../containers/LoginPage.js";

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
            <Link to={"/note"} className="nav-link">
              Notes
            </Link>
          </li>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              My Account
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <li>
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>
              </DropdownItem>
              <DropdownItem>
                <li>
                  <Link to={"/register"} className="nav-link">
                    Register
                  </Link>
                </li>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <li>
                  <Link to={"/user/account"} className="nav-link">
                    My Account
                  </Link>
                </li>
              </DropdownItem>
              <DropdownItem>
                <li>
                  <Link to={"/user/friends"} className="nav-link">
                    My List of Friend
                  </Link>
                </li>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </ul>
      </nav>
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/todo" component={ToDo} />
        <Route path="/note" component={Note} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={Register} />
        <Route path="/user/account" component={MyAccount} />
        <Route path="/user/friends" component={MyFriends} />
        <Route path="/" component={App}>
          <Route path="dashboard" component={Dashboard} />
          <Route path="form" component={FormPage} />
          <Route path="customer" component={CustomerFormPage} />
          <Route path="customer/:id" component={CustomerFormPage} />
          <Route path="order" component={OrderFormPage} />
          <Route path="order/:id" component={OrderFormPage} />
          <Route path="product" component={ProductFormPage} />
          <Route path="product/:id" component={ProductFormPage} />
          <Route path="customers" component={CustomerListPage} />
          <Route path="orders" component={OrderListPage} />
          <Route path="products" component={ProductListPage} />
          <Route path="about" component={AboutPage} />
          <Route path="*" component={NotFoundPage} />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default NaviRoute;
