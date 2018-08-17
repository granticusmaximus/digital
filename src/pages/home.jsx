import '../App.css';
import React from 'react';
import { Jumbotron } from 'reactstrap';

export const Home = () => (
    <div className="container">
      <Jumbotron>
        <h1 className="display-3">Welcome to the Modo Utility</h1>
        <p className="lead">This is Grant Watson's Swiss Army knive utility</p>
        <hr className="my-2" />
        <p>I will add more to this utility as time passes by</p>
        <p>This app is strictly owned and maintained by Grant Watson. All projects on here are open source, but the data is owned by Grant Watson</p>
        <hr className="my-2" />
        <h3>List of Utilities on this app:</h3>
        <p>ToDo List</p>
        <p>Notes App</p>
      </Jumbotron>
    </div>
  );