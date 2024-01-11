import React, { useState } from 'react';
import {
  RegisterWrapper,
  RegisterFormContainer,
  RegisterTitle,
  RegisterForm,
  ReturnLink
} from './styled';

const RegisterPage = ({ handleRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(username, password);
  };

  return (
    <RegisterWrapper>
      <RegisterFormContainer>
        <RegisterTitle>Register</RegisterTitle>
        <RegisterForm onSubmit={handleSubmit}>
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
          <button type="submit">Submit</button>
          <ReturnLink to="/home">Return</ReturnLink>
        </RegisterForm>
      </RegisterFormContainer>
    </RegisterWrapper>
  );
};

export default RegisterPage;