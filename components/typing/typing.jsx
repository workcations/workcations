import React from "react";
import Typed from "typed.js";

const words = [
  "^200 High Speed Internet",
  "^200 Sanitized Stays",
  "^200 Work Friendly Spaces",
  "^200 Homely Meals",
];

import { Container } from "./typing.style";

class Typing extends React.Component {
  componentDidMount() {
    const options = {
      strings: words,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
      cursorChar: "|",
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }
  componentWillUnmount() {
    // Please don't forget to cleanup animation layer
    this.typed.destroy();
  }

  render() {
    return (
      <Container>
        <span
          style={{ whiteSpace: "pre" }}
          ref={(el) => {
            this.el = el;
          }}
        />
      </Container>
    );
  }
}
export default Typing;
