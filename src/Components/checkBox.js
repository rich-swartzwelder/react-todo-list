import React, { Component } from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

class Checkbox extends Component {
  handleCheckTodo = () => {
    this.props.onToggleCheck(this.props.todoId);
  };

  render() {
    return this.props.complete ? (
      <MdCheckBox size="32" onClick={this.handleCheckTodo} />
    ) : (
      <MdCheckBoxOutlineBlank size="32" onClick={this.handleCheckTodo} />
    );
  }
}

export default Checkbox;
