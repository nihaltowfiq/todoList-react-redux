import React from "react";
import { Col, Row } from "react-bootstrap";

function ToDoItem({ todo }) {
  return (
    <div>
      <Row className="m-3">
        <div>#{todo.id}</div>
        <Col>
          <h4>{todo.name}</h4>
        </Col>
        <button className="btn btn-primary mx-2">Edit</button>
        <button className="btn btn-danger mx-2">Delete</button>
      </Row>
    </div>
  );
}

export default ToDoItem;
