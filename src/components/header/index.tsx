import { useState } from "react";
import logo from "../../assets/logo.png";
import { HeaderContainer } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo" />
    </HeaderContainer>
  );
};

export default Header;
