import React, { Component } from "react";
// import { FormGroup, FormControl } from "react-bootstrap";
import { Flex } from "rebass";
import "./todoInput.css";

class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.todoRef = React.createRef();
  }

  render() {
    return (
      <div>
        <Flex>
          <input
            className="todoTextField"
            autoFocus
            type="text"
            value={this.props.newTodo}
            onChange={this.props.onChange}
            placeholder="What do you need to do?"
          />
        </Flex>
      </div>
    );
  }
}

export default TodoInput;
