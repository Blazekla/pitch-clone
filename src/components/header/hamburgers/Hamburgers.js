import React, { Component } from "react";
import Burger from 'react-css-burger';

class Hamburgers extends Component {
  state = {
    active: false,
  };

  render() {
    return (
      <Burger
        onClick={() => this.setState({ active: !this.state.active })}

        active={this.state.active}
        burger="squeeze"
        scale={0.5}
      />
    );
  }
}

export default Hamburgers;
