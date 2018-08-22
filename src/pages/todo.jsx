import "../App.css";
import React from "react";
import TodoList from "../components/ToDoList";
import { Jumbotron } from "reactstrap";

export const ToDo = () => (
  <div className="container">
    <Jumbotron>
      <h1 className="display-3">ToDo Page</h1>
      <p className="lead">This is Grant's ToDo utility</p>
      <hr className="my-2" />
      <p>I will add more to this utility as time passes by</p>
      <p>
        This app is strictly owned and maintained by Grant Watson. All projects
        on here are open source, but the data is owned by Grant Watson
      </p>
      <hr className="my-2" />
      <p>This is a simple centralized place for all of my todo items</p>
      <p>
        I will add features to this over time, for example to see previously
        deleted todos, adding attributes to todos, etc.
      </p>
    </Jumbotron>
    <TodoList />
  </div>
);
