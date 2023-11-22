import {Record} from 'immutable';

const Todo = Record({
  id: '',
  complete: false,
  text: '',
});

export default Todo;