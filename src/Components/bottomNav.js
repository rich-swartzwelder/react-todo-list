import React, { Component } from "react";
import { Box, Button, Flex } from "rebass";

class BottomNav extends Component {
  render() {
    return (
      <Box justifyContent="space-around" bg="#f2f2f2" p="3">
        <Button>button</Button>
        <Button>button</Button>
        <Button>button</Button>
      </Box>
    );
  }
}

export default BottomNav;
