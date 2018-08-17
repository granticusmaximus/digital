import "../App.css";
import React from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Switch, Route, Link } from "react-router-dom";
import { PreviousNotes } from "./previousNotes";

export const Notes = () => (
  <div className="container">
    <h2>Notes Page</h2>
    <Form>
      <FormGroup row>
        <Label for="Title" sm={2}>
          Title:
        </Label>
        <Col sm={10}>
          <Input
            type="title"
            name="title"
            id="Title"
            placeholder="Please input title of note"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="Date" sm={2}>
          Date Made:
        </Label>
        <Col sm={10}>
          <Input
            type="date"
            name="date"
            id="Date"
            placeholder="Please input date of note creation"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="MessageText" sm={2}>
          Message
        </Label>
        <Col sm={10}>
          <Input
            type="textarea"
            name="text"
            id="MessageText"
            placeholder="Please input note here"
          />
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button outline color="primary">Save Save Note</Button>{" "}
          <Button outline color="primary">Previous Notes</Button>{" "}
        </Col>
      </FormGroup>
    </Form>
    <Switch>
      <Route path="/previous" component={PreviousNotes} />
    </Switch>
  </div>
);
