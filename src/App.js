import React, { Component } from "react";
import { Box, Flex, Text } from "rebass";
import { IoIosAdd } from "react-icons/io";
import ButtonBar from "./Components/buttonBar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Flex justifyContent="center" width={1} flexDirection="column">
          
          <Box
            color="white"
            bg="#f3f3f3"
            width={[1, 1 / 2]}
            p={3}
            className="bottom"
          >
            <div className="bar">
              <ButtonBar />
            </div>
          </Box>
        </Flex>
      </div>
    );
  }
}

export default App;
