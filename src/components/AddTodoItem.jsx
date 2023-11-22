import React from 'react';

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
        />
        <div className="input-group-append">
          <button
            className="btn btn-success"
            type="button"
            onClick={this.handleButtonClick}
          >
            <span
              className=""
              style={{
                fontSize: "24px",
                lineHeight: "16px",
              }}
            >
              +
            </span>
          </button>
        </div>
      </div>
    );
  }
}

export default AddTodoItem;