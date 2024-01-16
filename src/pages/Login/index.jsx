import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LoginWrapper,
  LoginFormContainer,
  LoginTitle,
  LoginForm,
  StyledRegister,
  StyledLogin,
  LoginImage
} from './styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LogoLogin from '../../assets/logo.png';

const LoginPage = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      toast.error('Please complete all fields', {
        style: {
          background: '#333', 
          color: '#fff',
        },
      });
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (username === 'usuarioteste' && password === 'senhaincorreta') {
        handleLogin();
        navigate('/profile');
      } else {
        toast.error('User or password incorrect', {
          style: {
            background: '#333', 
            color: '#fff',
          },
        });
      }
    } catch (error) {
      console.error('Autentication error:', error);
    }
  };

  return (
    <LoginWrapper>
      <ToastContainer />
      <LoginImage src={LogoLogin} alt="Login" />
      <LoginFormContainer>
        <LoginTitle>Login</LoginTitle>
        <LoginForm onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <StyledLogin as="button" type="submit">
            Submit
          </StyledLogin>
          <StyledRegister to="/signup">Register</StyledRegister>
        </LoginForm>
      </LoginFormContainer>
    </LoginWrapper>
  );
};

export default LoginPage;