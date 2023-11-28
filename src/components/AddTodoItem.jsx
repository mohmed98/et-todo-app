import React, { useState } from 'react';
import { useDispatch } from '@wordpress/data';
import { PlusIcon } from '../data/icons/icons';

const AddTodoItem = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const handleButtonClick = () => {
    dispatch('todo').addTodo(title);
    setTitle(''); 
  };

  return (
    <div className="input-group">
      <input
        type="text"
        name="title"
        required
        placeholder="What do you need to do?"
        className="form-control add-new-todo"
        onChange={handleInputChange}
        value={title}
        onKeyDown={(e) => { if (e.key === 'Enter') { handleButtonClick() } }}
      />
      <div className="input-group-append">
        <button
          className="btn btn-success"
          type="button"
          onClick={handleButtonClick}
        >
           <PlusIcon />
        </button>
      </div>
    </div>
  );
}

export default AddTodoItem;