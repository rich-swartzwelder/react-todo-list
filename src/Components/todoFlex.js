import React, { Component } from "react";
import Checkbox from "./checkBox";
import EditInput from "./editInput";
import { MdEdit, MdDelete } from "react-icons/md";
import { Flex, Box } from "rebass";

import "./todoFlex.css";

class TodoFlex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      isValid: true
    };
  }

  handleEditToggle = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  handleEditTodo = id => {
    this.props.onEdit(id);
    this.handleEditToggle(id);
  };

  render() {
    return (
      <div className="item">
        <Flex alignItems="center" pb={1} px={3}>
          <Box width={1 / 16} alignItems="center" mr={3}>
            <Checkbox
              className="checkBox"
              complete={this.props.complete}
              onToggleCheck={this.props.onToggleCheck}
              todoId={this.props.todoId}
            />
          </Box>
          <Box width={3 / 4} className="todoTitle" alignItems="center">
            {this.state.isEditing ? (
              <EditInput
                defValue={this.props.todoTitle}
                onChange={this.props.onChange}
                handleEditTodo={this.handleEditTodo}
                todoId={this.props.todoId}
              />
            ) : (
              this.props.todoTitle
            )}
          </Box>
          <Flex width="auto" justifyContent="space-around" className="icons">
            <MdEdit
              size="32"
              className="editIcon"
              onClick={() => this.handleEditToggle(this.props.todoId)}
            />
            <MdDelete
              size="32"
              className="deleteIcon"
              onClick={() => this.props.onDeleteTodo(this.props.todoId)}
            />
          </Flex>
        </Flex>
      </div>
    );
  }
}

export default TodoFlex;
