import React from "react";
import Burger from 'react-css-burger';

function Hamburgers(props) {

  return (
    <Burger
      onClick={props.function}
      active={props.buttonState}
      burger="squeeze"
      scale={0.5}
    />
  );
}

export default Hamburgers;
