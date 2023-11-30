import React from "react";
import TodoList from "./components/TodoList";
import AddTodoItem from "./components/AddTodoItem";
interface Todo {
  id: number;
  title: string;
  complete: boolean;
}

interface AppProps {
  todos: Todo[];
}
const App: React.FC<AppProps> = ({ todos }) =>  {
  

  return (
    <div className='container-md'>
      <Header/>
      <TodoList  todos={todos} />
      <Footer todos={todos} />
    </div>
  );
}

function Header() {

  return (
    <header id="header">
      <h2>ToDo</h2>
      <AddTodoItem />
    </header>
  );
}

interface FooterProps {
  todos: Todo[];
}
function Footer(props: FooterProps) {
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