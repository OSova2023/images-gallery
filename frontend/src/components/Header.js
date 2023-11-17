import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { ReactComponent as Logo } from "../images/logo.svg";

const navbarStyle = {
  backgroundColor: "orange",
};

const Header = ({ title }) => {
  return (
    <div>
      <Navbar style={navbarStyle} data-bs-theme="light">
        <Container>
          <Logo alt={title} style={{ maxWidth: "30rem", maxHeight: "2rem" }} />
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
