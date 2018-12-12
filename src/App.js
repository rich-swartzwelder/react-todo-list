import React, { Component } from "react";
import { Box, Flex } from "rebass";
import Header from "./Components/header";
import ButtonBar from "./Components/buttonBar";
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

    console.log(this.state.allTodos);
    return (
      <div className="App">
        <Flex width={1} className="main" justifyContent="center">
          <Flex
            width={[1, 1, 1 / 2, 1 / 3]}
            my={[0, 0, 70]}
            flexDirection="column"
            className="innerContainer"
          >
            <Header toggleModal={this.handleToggleModal} />

            <InputModal
              show={this.state.modal}
              onChange={this.handleEnterTodo}
              newTodo={this.state.newTodo}
              onSubmit={this.handleSubmitTodo}
              toggleModal={this.handleToggleModal}
              errorMsg={this.state.errorMsg}
            />
            <Todos
              allTodos={this.state.allTodos}
              onToggleCheck={this.handleCheckTodo}
              onDeleteTodo={this.handleDeleteTodo}
              onChange={this.handleEnterTodo}
              // onEdit={this.handleSubmitEdit}
              errorMsg={this.state.errorMsg}
              showActive={this.state.showActive}
              showComplete={this.state.showComplete}
            />

            <Box bg="#f3f3f3" width={1} p={3} className="bottom">
              <ButtonBar
                allTodosNum={allTodosNum}
                activeTodosNum={activeTodosNum}
                completeTodosNum={completeTodosNum}
              />
            </Box>
          </Flex>
        </Flex>
      </div>
    );
  }
}

export default App;
