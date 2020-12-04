import React from "react";
import { Container, Row } from "react-bootstrap";

function ToDoInput() {
  return (
    <Container fluid>
      <Row className="m-4">
        <input className="col form-control" type="text" />
        <button className="btn btn-success mx-2">Add</button>
      </Row>
    </Container>
  );
}

export default ToDoInput;
