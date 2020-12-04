export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export const addToDo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const deleteToDo = (todoId) => {
  return {
    type: ADD_TODO,
    payload: todoId,
  };
};

export const updateToDo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};
