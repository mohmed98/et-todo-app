import TodoActionTypes from './TodoActionTypes';

const actions = {
  addTodo(text) {
    return({
      type: TodoActionTypes.ADD_TODO,
      text,
    });
  },

  deleteTodo(id) {
    return({
      type: TodoActionTypes.DELETE_TODO,
      id,
    });
  },

  toggleTodo(id) {
    return({
      type: TodoActionTypes.TOGGLE_TODO,
      id,
    });
  },

  updateTodoText(id, text) {
    return({
      type: TodoActionTypes.UPDATE_TODO_TEXT,
      text,
      id
    });
  },
};


export default actions;