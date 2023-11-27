import React from 'react';
import TodoActions from '../data/TodoActions';
import { PencilIcon, TrashIcon } from '../data/icons/icons';
class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editingTodoId: null,
            editingTodoText: '',
        };
    }
    handleUpdateClick = (id, text) => {
        this.setState({
            editingTodoId: id,
            editingTodoText: text,
        });
    };

    handleSaveClick = () => {
        TodoActions.updateTodoText(this.state.editingTodoId, this.state.editingTodoText);
        this.setState({
            editingTodoId: null,
            editingTodoText: '',
        });
    };

    handleCancelClick = () => {
        this.setState({
            editingTodoId: null,
            editingTodoText: '',
        });
    };

    render() {
  
        const { todo } = this.props;
        return (

            <li key={todo.id} className="list-group-item d-flex align-items-center justify-content-between gap-3 ">
                <div className="d-flex gap-3">
                    <input
                        className=""
                        type="checkbox"
                        checked={todo.complete}
                        onChange={() =>  TodoActions.toggleTodo(todo.id)}
                    />
                    {this.state.editingTodoId === todo.id ? (
                        <input
                            type="text"
                            value={this.state.editingTodoText}
                            onChange={e => this.setState({ editingTodoText: e.target.value })}
                        />
                    ) : (
                        <label className="form-check-label me-1">{todo.text}</label>
                    )}
                </div>
                <div className='d-flex gap-3'>

                    {this.state.editingTodoId === todo.id ? (
                        <>
                            <button className="btn btn-success" onClick={this.handleSaveClick}>
                                Save
                            </button>
                            <button className="btn btn-secondary" onClick={this.handleCancelClick}>
                                Cancel
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                className="btn btn-danger"
                                onClick={() =>  TodoActions.deleteTodo(todo.id)}
                            >
                               <TrashIcon/>
                            </button>
                            <button
                                className="btn btn-secondary"
                                onClick={() => this.handleUpdateClick(todo.id, todo.text)}
                            >
                               <PencilIcon className={'text-white'}/>
                            </button>
                        </>

                    )}
                </div>

            </li>

        );
    }
}

export default TodoItem;