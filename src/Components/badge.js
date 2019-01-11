import React, { Component } from "react";
import { Flex, Text } from "rebass";
import "./badge.css";

class BtnBadge extends Component {
  render() {
    return (
      <Flex className="bdg" justifyContent="center" alignItems="center">
        <Text className="bdgNumber">{this.props.number}</Text>
      </Flex>
    );
  }
}

export default BtnBadge;
