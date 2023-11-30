import {Record} from 'immutable';

const Todo = Record({
  id: '',
  complete: false,
  title: '',
});

export default Todo;