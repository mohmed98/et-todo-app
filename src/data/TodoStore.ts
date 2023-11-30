import {createReduxStore, register} from '@wordpress/data';
import TodoActionTypes from './TodoActionTypes';
import Counter from './Counter';
import Todo from './Todo';
import actions from './TodoActions';
import { Action, State } from './types';
const DEFAULT_STATE = {
  todos: new Map(),
};

const reducer = (state = DEFAULT_STATE, action: Action) => {  
  switch (action.type) {
    case TodoActionTypes.ADD_TODO: {
      const id = Counter.generateId();
      const newTodo = new Todo({
        id,
        title: action.title,
        complete: false,
      });
      return {
        ...state,
        todos: new Map(state.todos.set(id, newTodo)),
      };
    }
    case TodoActionTypes.DELETE_TODO: {
      const newTodos = new Map(state.todos);
      newTodos.delete(action.id);
      return {
        ...state,
        todos: newTodos,
      };
    }
    case TodoActionTypes.UPDATE_TODO_TEXT: {
      const todoToUpdate = state.todos.get(action.id);
      if (todoToUpdate) {
        const updatedTodo = new Todo({
          id: action.id,
          complete: todoToUpdate.complete,
          title: action.title,
        });
        return {
          ...state,
          todos: new Map(state.todos.set(action.id, updatedTodo)),
        };
      }
      return state;
    }
    case TodoActionTypes.TOGGLE_TODO: {
      const todoToToggle = state.todos.get(action.id);
      if (todoToToggle) {
        const toggledTodo = new Todo({
          id: action.id,
          title: todoToToggle.title,
          complete: !todoToToggle.complete,
        });
        return {
          ...state,
          todos: new Map(state.todos.set(action.id, toggledTodo)),
        };
      }
      return state;
    }
    default:
      return state;
  } 
};
const selectors = {
  getTodos: (state: State) => {
    return Array.from(state.todos.values());
  },
};
export const STORE_NAME = 'todo';

const storeConfig = {
  reducer,
  actions,
  selectors,
};


export const store = createReduxStore(STORE_NAME, storeConfig);
register( store );

