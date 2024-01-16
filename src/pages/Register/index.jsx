import React, { useState } from 'react';
import {
  RegisterWrapper,
  RegisterFormContainer,
  RegisterTitle,
  RegisterForm,
  ReturnLink,
  RegisterImage
} from './styled';
import LogoRegister from '../../assets/logotrans.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const RegisterPage = ({ handleRegister }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username && email && password && confirmPassword) {

      handleRegister(username, password);
      navigate('/login');
    } else {
      toast.error('Please fill in all the fields.', {
        style: {
          background: '#333', 
          color: '#fff',
        },
      });
    }
  };

  return (
    <RegisterWrapper>
      <ToastContainer />
      <RegisterImage src={LogoRegister} alt="Login" />
      <RegisterFormContainer>
        <RegisterTitle>Register</RegisterTitle>
        <RegisterForm onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
          <ReturnLink to="/home">Return</ReturnLink>
        </RegisterForm>
      </RegisterFormContainer>
    </RegisterWrapper>
  );
};

export default RegisterPage;