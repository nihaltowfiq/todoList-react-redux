import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";

function ToDoList() {
  const todos = useSelector((state) => state);
  return (
    <Container>
      {todos.map((todo) => {
        return <ToDoItem key={todo.id} todo={todo} />;
      })}
    </Container>
  );
}

export default ToDoList;
