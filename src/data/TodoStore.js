import { OrderedMap } from 'immutable';
import { ReduceStore } from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';
import Counter from './Counter';
import Todo from './Todo';
class TodoStore extends ReduceStore {
  constructor() {
    super(TodoDispatcher);
  }

  getInitialState() {
    const storedState = localStorage.getItem('todoState');
    if (storedState) {
      return OrderedMap(JSON.parse(storedState));
    }
    return OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case TodoActionTypes.ADD_TODO:
        {
          if (!action.text) {
            return state;
          }
          const id = Counter.generateId();
          const newState = state.set(id, new Todo({
            id,
            text: action.text,
            complete: false,
          }));
          
          return newState
        }
      case TodoActionTypes.DELETE_TODO:
        {
          const newState = state.delete(action.id);
          
          return newState
        }
        case TodoActionTypes.UPDATE_TODO_TEXT:
          {
            const newState = state.update(
              action.id,
              todo => new Todo({
                ...todo,
                text: action.text,
              }),
            );
            
            return newState
          }
      case TodoActionTypes.TOGGLE_TODO:
        return state.update(
          action.id,
          todo => todo.set('complete', !todo.complete),
        );

      default:

        return state;
    }
  }
}

export default new TodoStore();