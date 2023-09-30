import React, { useState, useEffect } from "react";

import TodoList from "./components/TodoList";

const App = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("et-todos");

    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("et-todos", JSON.stringify(todos));
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

  const renderHeader = () => {
    return (
      <div className="todos-app-header card-header">
        <h2>ToDo</h2>
        <div className="input-group">
          <input
            type="text"
            name="title"
            placeholder="What do you need to do?"
            className="form-control add-new-todo"
            onChange={onChangeTitle}
            onKeyDown={onEnterPressAdd}
            value={title}
          />
          <div className="input-group-append">
            <button
              className="btn btn-success"
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
              <TodoList todos={todos} onComplete={onCompleteTodo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;