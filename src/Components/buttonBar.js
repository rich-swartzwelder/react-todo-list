import React, { Component } from "react";
import {
  Badge,
  ButtonToolbar,
  ToggleButton,
  ToggleButtonGroup
} from "react-bootstrap";
import { Flex } from "rebass";
import "./buttonBar.css";

class ButtonBar extends Component {
  state = {};
  render() {
    return (
      <ButtonToolbar className="toolbar">
        <Flex justifyContent="center">
          <ToggleButtonGroup
            name="buttons"
            type="radio"
            defaultValue={1}
            bsSize="xsmall"
            justified
          >
            <ToggleButton name="all" value={1}>
              <div className="buttonInfo">
                <span className="buttonName">All</span>{" "}
                <Badge className="buttonBadge">4</Badge>
              </div>
            </ToggleButton>
            <ToggleButton name="active" value={2}>
              <div className="buttonInfo">
                <span className="buttonName">Active</span>{" "}
                <Badge className="buttonBadge">4</Badge>
              </div>
            </ToggleButton>
            <ToggleButton name="complete" value={3}>
              <div className="buttonInfo">
                <span className="buttonName">Complete</span>{" "}
                <Badge className="buttonBadge">4</Badge>
              </div>
            </ToggleButton>
          </ToggleButtonGroup>
        </Flex>
      </ButtonToolbar>
    );
  }
}

export default ButtonBar;
