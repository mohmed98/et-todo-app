import React from 'react';
import { PlusIcon } from '../data/icons/icons';

class AddTodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleButtonClick = () => {
    this.props.onAddTodo(this.state.title);
    this.setState({ title: '' }); // Clear the input field after adding the todo
  };

  render() {
    return (
      <div className="input-group">
        <input
          type="text"
          name="title"
          required
          placeholder="What do you need to do?"
          className="form-control add-new-todo"
          onChange={this.handleInputChange}
          value={this.state.title}
          onKeyDown={(e) => { if (e.key === 'Enter') {this.handleButtonClick()} }}

        />
        <div className="input-group-append">
          <button
            className="btn btn-success"
            type="button"
            onClick={this.handleButtonClick}
          >
             <PlusIcon />
          </button>
        </div>
      </div>
    );
  }
}

export default AddTodoItem;