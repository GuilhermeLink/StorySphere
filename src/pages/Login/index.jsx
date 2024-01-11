import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LoginWrapper,
  LoginFormContainer,
  LoginTitle,
  LoginForm,
  StyledRegister,
  StyledLogin,
} from './styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      toast.error('Preencha todos os campos', {
        autoClose: 1000, 
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
        navigate('/home');
      } else {
        toast.error('Usuário ou senha incorretos');
      }
    } catch (error) {
      console.error('Erro de autenticação:', error);
    }
  };

  return (
    <LoginWrapper>
      <ToastContainer />
      <LoginFormContainer>
        <LoginTitle>Login</LoginTitle>
        <LoginForm onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="User"
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