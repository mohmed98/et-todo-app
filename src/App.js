import React, { useState, useEffect } from "react";

import TodoList from "./components/TodoList";

const App = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  useEffect(() => {
    const storedTodos = localStorage.getItem("et-todos");

    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("et-todos", JSON.stringify(todos));
    console.log(todos);
    // check if any todo is complete and show delete button if true 
    const checkComplete = todos.some(todo => todo.complete);
    console.log(checkComplete);
    setShowDelete(checkComplete);
  }, [todos]);

  const onCompleteTodo = (id) => {
    const updatedTodos = [...todos];
    updatedTodos[id].complete = !updatedTodos[id].complete;
    setTodos(updatedTodos);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onEnterPressAdd = (event) => {
    if (event.keyCode === 13) {
      onClickAdd();
    }
  };

  const onClickAdd = () => {
    const newTodo = {
      title,
      complete: false,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
  };
  const onClickDelete = () => {
    const updatedTodos = todos.filter(todo => !todo.complete);
    setTodos(updatedTodos);
  };


  const renderHeader = () => {
    return (
      <div className="todos-app-header card-header">
        <h2>ToDo</h2>
        <div className="input-group">
          <input
            type="text"
            name="title"
            required
            placeholder="What do you need to do?"
            className="form-control add-new-todo"
            onChange={onChangeTitle}
            onKeyDown={onEnterPressAdd}
            value={title}
          />
          <div className="input-group-append">
            <button
              className="btn btn-success"
              disabled={!title}
              type="button"
              onClick={onClickAdd}
            >
              <span
                className=""
                style={{
                  fontSize: "24px",
                  lineHeight: "16px",
                }}
              >
                +
              </span>
            </button>
          </div>
        </div>
        {showDelete ? (


          <div className="d-flex justify-content-between mt-2">
            <p>Delete Selected todos</p>
            <button
              className="btn btn-danger"
              type="button"
              onClick={onClickDelete}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
              </svg>

            </button>
          </div>
        ) : (
          todos?.length > 0 && (

            <p className="mt-2">Select todos you want to delete</p>
          )

        )}
      </div>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col col-md-6 offset-md-3 mt-2">
          <div className="todos-app card">
            {renderHeader()}
            <div className="card-body">
              {todos?.length === 0 ? (
                <p className="text-center">No todos, yay!</p>
              ):(

                <TodoList todos={todos} onComplete={onCompleteTodo} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;