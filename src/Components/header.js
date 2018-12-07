import React, { Component } from "react";
import { Flex, Text } from "rebass";
import { IoIosAdd } from "react-icons/io";

class Header extends Component {
  render() {
    return (
      <Flex
        color="white"
        bg="purple"
        width={1}
        py={24}
        px={20}
        justifyContent="space-between"
        alignItems="center"
      >
        <Text className="title" fontSize={36} fontWeight="300">
          Things To Do
        </Text>
        <IoIosAdd fontSize={42} />
      </Flex>
    );
  }
}

export default Header;
