import React, { useState } from 'react';
import { useDispatch } from '@wordpress/data';
import { PencilIcon, TrashIcon } from '../data/icons/icons';

const TodoItem = ({ todo }) => {
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editingTodoText, setEditingTodoText] = useState('');
  const dispatch = useDispatch();

  const handleUpdateClick = (id, text) => {
    setEditingTodoId(id);
    setEditingTodoText(text);
  };

  const handleSaveClick = () => {
    dispatch('todo').updateTodoText(editingTodoId, editingTodoText);
    setEditingTodoId(null);
    setEditingTodoText('');
  };

  const handleCancelClick = () => {
    setEditingTodoId(null);
    setEditingTodoText('');
  };

  return (
    <li key={todo.id} className="list-group-item d-flex align-items-center justify-content-between gap-3 ">
      <div className="d-flex gap-3">
        <input
          className=""
          type="checkbox"
          checked={todo.complete}
          onChange={() =>  dispatch('todo').toggleTodo(todo.id)}
        />
        {editingTodoId === todo.id ? (
          <input
            type="text"
            value={editingTodoText}
            onChange={e => setEditingTodoText(e.target.value)}
          />
        ) : (
          <label className="form-check-label me-1">{todo.text}</label>
        )}
      </div>
      <div className='d-flex gap-3'>
        {editingTodoId === todo.id ? (
          <>
            <button className="btn btn-success" onClick={handleSaveClick}>
              Save
            </button>
            <button className="btn btn-secondary" onClick={handleCancelClick}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              className="btn btn-danger"
              onClick={() =>  dispatch('todo').deleteTodo(todo.id)}
            >
              <TrashIcon/>
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => handleUpdateClick(todo.id, todo.text)}
            >
              <PencilIcon className={'text-white'}/>
            </button>
          </>
        )}
      </div>
    </li>
  );
}

export default TodoItem;