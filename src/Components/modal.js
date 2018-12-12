import React, { Component } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import TodoInput from "./todoInput";

class InputModal extends Component {
  renderError = () => {
    let error;
    if (this.props.errorMsg.length > 0) {
      error = (
        <Alert bsStyle="danger">
          <strong>{this.props.errorMsg}</strong>
        </Alert>
      );
    } else {
      error = null;
    }
    return error;
  };

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.toggleModal}>
        <Modal.Header>
          <Modal.Title>New todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.props.onSubmit}>
            <TodoInput
              onChange={this.props.onChange}
              newTodo={this.props.newTodo}
            />
          </Form>
          {this.renderError()}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.toggleModal}>Cancel</Button>
          <Button bsStyle="primary" onClick={this.props.onSubmit}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      //   <Modal isOpen={this.props.modal} toggle={this.props.toggleModal}>
      //     <ModalHeader toggle={this.props.toggleModal}>New todo</ModalHeader>
      //     <ModalBody className="my-4">
      //       <Form onSubmit={this.props.onSubmit}>
      //         <TodoInput
      //           onChange={this.props.onChange}
      //           newTodo={this.props.newTodo}
      //         />
      //       </Form>
      //       {this.renderError()}
      //     </ModalBody>
      //     <ModalFooter>
      //       <Button color="info" onClick={this.props.onSubmit}>
      //         Add
      //       </Button>
      //       <Button color="secondary" onClick={this.props.toggleModal}>
      //         Cancel
      //       </Button>
      //     </ModalFooter>
      //   </Modal>
    );
  }
}

export default InputModal;
