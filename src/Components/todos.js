import React, { Component } from "react";
import TodoFlex from "./todoFlex";
import "./todos.css";

class Todos extends Component {
  renderActiveTodos = () => {
    let activeTodos = this.props.allTodos.filter(todo => !todo.complete);
    if (this.props.showActive) {
      return activeTodos.map(todo => {
        return (
          <TodoFlex
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
          <TodoFlex
            key={todo.id}
            todoTitle={todo.title}
            todoId={todo.id}
            complete={todo.complete}
            onToggleCheck={this.props.onToggleCheck}
            onDeleteTodo={this.props.onDeleteTodo}
            onEdit={this.props.onEdit}
          />
        );
      });
    } else {
      return null;
    }
  };

  render() {
    return (
      <div>
        <div className="columnReverse">
          {this.renderCompleteTodos()}
          {this.renderActiveTodos()}
        </div>
      </div>
    );
  }
}

export default Todos;
