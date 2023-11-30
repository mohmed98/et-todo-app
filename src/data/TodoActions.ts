import TodoActionTypes from './TodoActionTypes';
import {TodoType} from './types';
const actions = {
  addTodo(title: TodoType['title']) {
    return({
      type: TodoActionTypes.ADD_TODO,
      title,
    });
  },

  deleteTodo(id: TodoType['id']) {
    return({
      type: TodoActionTypes.DELETE_TODO,
      id,
    });
  },

  toggleTodo(id: TodoType['id']) {
    return({
      type: TodoActionTypes.TOGGLE_TODO,
      id,
    });
  },

  updateTodoText(id: TodoType['id'], title: TodoType['title']) { 
    return({
      type: TodoActionTypes.UPDATE_TODO_TEXT,
      title,
      id
    });
  },
};


export default actions;