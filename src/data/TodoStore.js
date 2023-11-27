import { EventEmitter } from 'events';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';
import Counter from './Counter';
import Todo from './Todo';

const CHANGE_EVENT = 'change';

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.state = new Map();
    this.dispatchToken = TodoDispatcher.register(this.handleAction.bind(this));
  }

  getAll() {
    return this.state;
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  handleAction(action) {
    switch (action.type) {
      case TodoActionTypes.ADD_TODO: {
        const id = Counter.generateId();
        this.state.set(id, new Todo({
          id,
          text: action.text,
          complete: false,
        }));
        this.emitChange();
        break;
      }
      case TodoActionTypes.DELETE_TODO:
        this.state.delete(action.id);
        this.emitChange();
        break;
      case TodoActionTypes.UPDATE_TODO_TEXT:
        {
          const todoToUpdate = this.state.get(action.id);
          if (todoToUpdate) {
            const updatedTodo = new Todo({
              id: action.id,
              complete: todoToUpdate.complete,
              text: action.text,
            });
            this.state.set(action.id, updatedTodo);
            this.emitChange();
          }
          break;
        }
      case TodoActionTypes.TOGGLE_TODO:
        {
          console.log(action.id);
          const todoToToggle = this.state.get(action.id);
          if (todoToToggle) {
            console.log(todoToToggle);
            const toggledTodo = new Todo({
              id: action.id,
              text: todoToToggle.text,
              complete: !todoToToggle.complete,
            });
            this.state = new Map(this.state.set(action.id, toggledTodo));
            this.emitChange();
          }
          break;
        }
      default:
    }
  }
}

export default new TodoStore();