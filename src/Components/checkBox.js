import React, { Component } from "react";
// import { IoIosCheckboxOutline, IoIosSquareOutline } from "react-icons/io";
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'

class Checkbox extends Component {
  handleCheckTodo = () => {
    this.props.onToggleCheck(this.props.todoId);
  };

  render() {
    return this.props.complete ? (
      <MdCheckBox onClick={this.handleCheckTodo} />
    ) : (
      <MdCheckBoxOutlineBlank onClick={this.handleCheckTodo} />
    );
  }
}

export default Checkbox;
