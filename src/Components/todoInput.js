import React, { Component } from "react";

class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.todoRef = React.createRef();
  }
  componentDidUpdate() {
    this.todoRef.current.focus();
  }
  render() {
    return (
      <div>
        <React.Fragment>
          <input
            autoFocus
            ref={this.todoRef}
            type="text"
            value={this.props.newTodo}
            onChange={this.props.onChange}
            placeholder="What do you need to do?"
          />
        </React.Fragment>
      </div>
    );
  }
}

export default TodoInput;
