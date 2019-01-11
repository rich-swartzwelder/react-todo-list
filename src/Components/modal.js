import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { Button, Text } from "rebass";
import TodoInput from "./todoInput";

class InputModal extends Component {
  renderError = () => {
    let error;
    if (this.props.errorMsg.length > 0) {
      error = (
        <Text color="red" fontWeight="600" fontSize={2}>
          {this.props.errorMsg}
        </Text>
      );
    } else {
      error = null;
    }
    return error;
  };

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>New todo</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={this.props.onSubmit}>
            <TodoInput
              onChange={this.props.onChange}
              newTodo={this.props.newTodo}
            />
          </form>
          {this.renderError()}
        </Modal.Body>

        <Modal.Footer>
          <Button bg="#a9a9a9" onClick={this.props.toggleModal}>
            Cancel
          </Button>
          <Button bg="#0088cc" ml={2} onClick={this.props.onSubmit}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default InputModal;
