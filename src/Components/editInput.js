import React, { Component } from "react";
import { Flex } from "rebass";
import "./editInput.css";

class EditInput extends Component {
  handleSubmitEdit = event => {
    event.preventDefault();
    this.props.handleEditTodo(this.props.todoId);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitEdit} className="editForm">
          <Flex alignItems="center">
            <input
              className="editTextField"
              autoFocus
              // ref={this.editRef}
              type="text"
              defaultValue={this.props.defValue}
              onChange={this.props.onChange}
            />
            <span className="saveButton" onClick={this.handleSubmitEdit}>
              Save
            </span>
          </Flex>
        </form>
      </div>
    );
  }
}

export default EditInput;
