import React, { Component } from "react";
import Checkbox from "./checkBox";
// import {
//   IoMdTrash,
//   IoMdCreate
// } from "react-icons/io";
import { MdEdit, MdDelete } from "react-icons/md";

import { Grid, Row, Col, ListGroupItem } from "react-bootstrap";

import "./todo.css";

class Todo extends Component {
  render() {
    return (
      <ListGroupItem className="todoContainer">
        <Grid>
          <Row>
            <Col xs={1} className="checkBox">
              <Checkbox
                complete={this.props.complete}
                onToggleCheck={this.props.onToggleCheck}
                todoId={this.props.todoId}
              />
            </Col>
            <Col xs={8} className="todoTitle">
              {this.props.todoTitle}
            </Col>
            <Col xs={1} className="editIcon">
              <MdEdit />
            </Col>
            <Col xs={1} className="deleteIcon">
              <MdDelete
                onClick={() => this.props.onDeleteTodo(this.props.todoId)}
              />
            </Col>
          </Row>
        </Grid>
      </ListGroupItem>
    );
  }
}

export default Todo;
