import React from "react";
import TodoList from "./components/TodoList";
import AddTodoItem from "./components/AddTodoItem";

function App(props) {
  

  return (
    <div className='container-md'>
      <Header {...props} />
      <TodoList {...props} />
      <Footer {...props} />
    </div>
  );
}

function Header(props) {

  return (
    <header id="header">
      <h2>ToDo</h2>
      <AddTodoItem {...props} />
    </header>
  );
}


function Footer(props) {
  const todosArray = Array.from(props.todos.values());
  if (todosArray.length === 0) {
    return null;
  }

  const remaining = todosArray.filter(todo => !todo.complete).length;
  const phrase = remaining === 1 ? ' item left' : ' items left';

  return (
    <footer id="footer">
      <span id="todo-count">
        <strong>
          {remaining}
        </strong>
        {phrase}
      </span>
    </footer>
  );
}

export default App;