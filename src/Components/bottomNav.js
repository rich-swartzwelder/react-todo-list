import React, { Component } from "react";
import { Flex, Box, Text } from "rebass";
import BtnBadge from "./badge";
import "./bottomNav.css";

class BottomNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeButton: 1
    };
  }

  handleRadioClick = (activeButton, todos) => {
    this.setState({ activeButton });
    this.props.showTodos(todos);
  };

  render() {
    return (
      <Flex width={1} className="navContainer">
        <Flex
          className="button btn1"
          width={1 / 3}
          onClick={() => this.handleRadioClick(1, "all")}
          active={this.state.activeButton === 1}
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <Text className="buttonName">All</Text>
          </Box>
          <Flex className="btnBadge">
            <BtnBadge number={this.props.activeTodosNum} />
          </Flex>
        </Flex>

        <Flex
          className="button btn2"
          width={1 / 3}
          onClick={() => this.handleRadioClick(2, "active")}
          active={this.state.activeButton === 2}
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <Text className="buttonName">Active</Text>
          </Box>
          <Flex className="btnBadge">
            <BtnBadge number={this.props.activeTodosNum} />
          </Flex>
        </Flex>

        <Flex
          className="button btn3"
          width={1 / 3}
          onClick={() => this.handleRadioClick(3, "complete")}
          active={this.state.activeButton === 3}
          justifyContent="center"
          alignItems="center"
        >
          <span className="buttonName">Complete</span>
          <BtnBadge number={this.props.completeTodosNum} />
        </Flex>
      </Flex>
    );
  }
}

export default BottomNav;
