import React from "react";
import { Navbar } from "react-bootstrap";

const Header = (props) => {
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Header;
