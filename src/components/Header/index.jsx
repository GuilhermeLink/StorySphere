import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeaderWrapper,
  CompanyName,
  NavLinksContainer,
  LoginButton,
  SignUpButton,
  Logo1,
  Title
} from './styled';
import Logo from '../../assets/logo1.png';

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>
        <Logo1 src={Logo} alt="Logo" />
        <CompanyName>StorySphere</CompanyName>
      </Title>
      <NavLinksContainer>
        <Link to="/login">
          <LoginButton>Login</LoginButton>
        </Link>
        <Link to="/signup">
          <SignUpButton>Sign Up</SignUpButton>
        </Link>
      </NavLinksContainer>
    </HeaderWrapper>
  );
};

export default Header;