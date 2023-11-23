import React from 'react';
import App from './App';
import TodoStore from './data/TodoStore';
import TodoActions from './data/TodoActions';

class AppContainer extends React.Component {
  state = this.getCurrentStateFromStores();

  componentDidMount() {
    TodoStore.addChangeListener(this.handleStoreChange);
  }

  componentWillUnmount() {
    TodoStore.removeChangeListener(this.handleStoreChange);
  }

  getCurrentStateFromStores() {
    return {
      todos: TodoStore.getAll(),
    };
  }

  handleStoreChange = () => {
    this.setState(this.getCurrentStateFromStores());
  }

  render() {
    return <App 
      todos={this.state.todos}
      onAddTodo={TodoActions.addTodo}
    />;
  }
}

export default AppContainer;