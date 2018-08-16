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
      </Jumbotron>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper porta dictum. Fusce gravida faucibus quam, quis convallis orci rhoncus quis. Praesent sodales risus neque, ut suscipit sapien bibendum at. Aliquam erat volutpat. Pellentesque sit amet elementum est. Ut id ligula nec turpis ultrices varius eu non risus. Nulla metus lacus, ultrices in tortor ac, dignissim fringilla lacus. Sed gravida enim dolor. Donec nec blandit justo, commodo suscipit est. Cras et diam id ligula hendrerit pellentesque quis a felis. Sed tempus lectus tortor, vehicula accumsan nulla sagittis ut. Duis et nisi nisi.
      </p>
    </div>
  );