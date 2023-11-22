import App from './App';
import {Container} from 'flux/utils';
import TodoStore from './data/TodoStore';
import TodoActions from './data/TodoActions';

function getStores() {
  return [TodoStore];
}

function getState() {
  return {
    todos: TodoStore.getState(),
    onDeleteTodo: TodoActions.deleteTodo,
    onAddTodo: TodoActions.addTodo,
    onToggleTodo: TodoActions.toggleTodo,
  };
}

export default Container.createFunctional(App, getStores, getState);