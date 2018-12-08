import React, { Component } from "react";
import { Box, Flex } from "rebass";
import Header from "./Components/header";
import ButtonBar from "./Components/buttonBar";
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

  render() {
    return (
      <div className="App">
        <Flex width={1} className="main" justifyContent="center">
          <Flex width={[1, 1 / 3]} my={[0, 70]} flexDirection="column" className='innerContainer'>
            <Header />
            <Box
              bg="#f3f3f3"
              width={1}
              p={3}
              className="bottom"
            >
              <div className="bar" />
              <ButtonBar />
            </Box>
          </Flex>
        </Flex>
      </div>
    );
  }
}

export default App;
