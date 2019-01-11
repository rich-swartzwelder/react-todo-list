import React, { Component } from "react";
import { Flex } from "rebass";
import Header from "./Components/header";
import BottomNav from "./Components/bottomNav";
import InputModal from "./Components/modal";
import Todos from "./Components/todos";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      newTodo: "",
      allTodos: [],
      currentId: 0,
      errorMsg: "",
      showActive: true,
      showComplete: true
    };
  }

  generateNewId = () => {
    this.setState({ currentId: this.state.currentId + 1 });
  };

  handleToggleModal = () => {
    this.setState({ modal: !this.state.modal });
    this.handleResetState();
  };

  validateTodo = () => {
    let errorMsg;
    let tempValidate = this.state.newTodo;
    if (tempValidate.length === 0) {
      errorMsg = "Error: This field cannot be empty.";
      this.setState({ errorMsg });
      return false;
    } else {
      errorMsg = "";
      this.setState({ errorMsg });
      tempValidate = "";
      return true;
    }
  };

  handleEnterTodo = e => {
    this.setState({ newTodo: e.target.value });
  };

  handleSubmitTodo = e => {
    e.preventDefault();

    const isValid = this.validateTodo();

    if (isValid) {
      this.setState({
        allTodos: [
          ...this.state.allTodos,
          {
            title: this.state.newTodo,
            id: this.state.currentId,
            complete: false
          }
        ]
      });

      this.scrollToTop();
      this.setState({ newTodo: "" });
      this.generateNewId();
      this.handleToggleModal();
    }
  };

  handleCheckTodo = id => {
    this.setState({
      allTodos: this.state.allTodos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    });
  };

  handleSubmitEdit = id => {
    const isValid = this.validateTodo();

    if (isValid) {
      this.setState({
        allTodos: this.state.allTodos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              title: this.state.newTodo
            };
          } else {
            return todo;
          }
        })
      });
      this.setState({ newTodo: "" });
    }
  };

  handleDeleteTodo = todo => {
    let tempTodos = this.state.allTodos.filter(e => e.id !== todo);

    this.setState({
      allTodos: [...tempTodos]
    });
  };

  handleResetState = () => {
    let errorMsg = "";
    this.setState({ errorMsg });
    this.setState({ newTodo: "" });
  };

  handleShowTodos = todos => {
    if (todos === "all") {
      this.setState({ showActive: true });
      this.setState({ showComplete: true });
    }

    if (todos === "active") {
      this.setState({ showActive: true });
      this.setState({ showComplete: false });
    }

    if (todos === "complete") {
      this.setState({ showActive: false });
      this.setState({ showComplete: true });
    }
  };

  render() {
    let allTodosNum = this.state.allTodos.length;
    let activeTodosNum = this.state.allTodos.filter(todo => !todo.complete)
      .length;
    let completeTodosNum = this.state.allTodos.filter(todo => todo.complete)
      .length;

    return (
      <div className="App">
        <Flex width={1} className="main" justifyContent="center">
          <Flex
            width={[1, 1, 1 / 2, 1 / 3]}
            my={[0, 0, 70]}
            flexDirection="column"
            className="innerContainer"
          >
            <Header
              className="header"
              toggleModal={this.handleToggleModal}
              show={this.state.modal}
              onChange={this.handleEnterTodo}
              newTodo={this.state.newTodo}
              onSubmit={this.handleSubmitTodo}
              errorMsg={this.state.errorMsg}
            />

            <InputModal
              show={this.state.modal}
              onChange={this.handleEnterTodo}
              newTodo={this.state.newTodo}
              onSubmit={this.handleSubmitTodo}
              toggleModal={this.handleToggleModal}
              errorMsg={this.state.errorMsg}
            />

            <div className="todoContainer">
              <Todos
                id="todos"
                allTodos={this.state.allTodos}
                onToggleCheck={this.handleCheckTodo}
                onDeleteTodo={this.handleDeleteTodo}
                onChange={this.handleEnterTodo}
                onEdit={this.handleSubmitEdit}
                errorMsg={this.state.errorMsg}
                showActive={this.state.showActive}
                showComplete={this.state.showComplete}
              />
            </div>
            <BottomNav
              className="footer"
              allTodosNum={allTodosNum}
              activeTodosNum={activeTodosNum}
              completeTodosNum={completeTodosNum}
              showTodos={this.handleShowTodos}
            />
          </Flex>
        </Flex>
      </div>
    );
  }
}

export default App;
