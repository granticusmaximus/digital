import React from "react";
import { Button, CardImg, Row, Col } from "reactstrap";

const MyFriends = props => {
  return (
    <div className="container">
    <h1>List of Friends:</h1>
      <Row>
        <Col>
          <div className="card">
            <CardImg
              top
              width="100%"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
              alt="Card image cap"
            />
            <div className="cardContainer">
              <h4>
                <b>John Winslow</b>
              </h4>
              <p>Software Engineer</p>
              <Button color="primary" size="sm">See Page</Button>{" "}
              <Button color="success" size="sm"> Message</Button>
            </div>
          </div>
        </Col>
        <Col>
          <div className="card">
            <CardImg
              top
              width="100%"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
              alt="Card image cap"
            />
            <div className="cardContainer">
              <h4>
                <b>John Doe</b>
              </h4>
              <p>System Engineer</p>
              <Button color="primary" size="sm">See Page</Button>{" "}
              <Button color="success" size="sm"> Message</Button>
            </div>
          </div>
        </Col>
      </Row>
      <br/><br/><br/>
      <Row>
        <Col>
          <div className="card">
            <CardImg
              top
              width="100%"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
              alt="Card image cap"
            />
            <div className="cardContainer">
              <h4>
                <b>John Burgundy</b>
              </h4>
              <p>Financial Officer</p>
              <Button color="primary" size="sm">See Page</Button>{" "}
              <Button color="success" size="sm"> Message</Button>
            </div>
          </div>
        </Col>
        <Col>
          <div className="card">
            <CardImg
              top
              width="100%"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
              alt="Card image cap"
            />
            <div className="cardContainer">
              <h4>
                <b>John Snow</b>
              </h4>
              <p>King of the north</p>
              <Button color="primary" size="sm">See Page</Button>{" "}
              <Button color="success" size="sm"> Message</Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MyFriends;
