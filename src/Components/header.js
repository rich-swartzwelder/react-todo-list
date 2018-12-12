import React, { Component } from "react";
import { Flex, Text } from "rebass";
import { IoIosAdd } from "react-icons/io";

class Header extends Component {
  render() {
    return (
      <Flex
        className="headerContainer"
        color="white"
        bg="purple"
        width={1}
        py={24}
        pl={20}
        pr={18}
        justifyContent="space-between"
        alignItems="center"
      >
        <Text className="title" fontSize={36} fontWeight="300">
          Things To Do
        </Text>
        <IoIosAdd fontSize={42} onClick={this.props.toggleModal} />
      </Flex>
    );
  }
}

export default Header;
