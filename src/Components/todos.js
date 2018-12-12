import React, { Component } from "react";
import Todo from "./todo";
import { ListGroup } from "react-bootstrap";

class Todos extends Component {
  renderActiveTodos = () => {
    let activeTodos = this.props.allTodos.filter(todo => !todo.complete);
    if (this.props.showActive) {
      return activeTodos.map(todo => {
        return (
          <Todo
            key={todo.id}
            todoTitle={todo.title}
            todoId={todo.id}
            complete={todo.complete}
            onToggleCheck={this.props.onToggleCheck}
            onDeleteTodo={this.props.onDeleteTodo}
            onEdit={this.props.onEdit}
            onChange={this.props.onChange}
            errorMsg={this.props.errorMsg}
          />
        );
      });
    } else {
      return null;
    }
  };

  renderCompleteTodos = () => {
    let completeTodos = this.props.allTodos.filter(todo => todo.complete);
    if (this.props.showComplete) {
      return completeTodos.map(todo => {
        return (
          <Todo
            key={todo.id}
            todoTitle={todo.title}
            todoId={todo.id}
            complete={todo.complete}
            onToggleCheck={this.props.onToggleCheck}
            onDeleteTodo={this.props.onDeleteTodo}
            onEdit={this.handleEditTodo}
          />
        );
      });
    } else {
      return null;
    }
  };

  render() {
    return (
      <ListGroup>
        {this.renderCompleteTodos()}
        {this.renderActiveTodos()}
      </ListGroup>
    );
  }
}

export default Todos;
