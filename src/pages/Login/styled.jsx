import styled from 'styled-components';
import backgroundImage from '../../assets/background.jpg';
import { Link } from 'react-router-dom';

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #000000 0%, #090909 100%);
  background-image: url(${backgroundImage});
  background-size: cover;
`;

export const LoginFormContainer = styled.div`
  background-color: #1f1f1f;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  width: 400px;
  text-align: center;
`;

export const LoginTitle = styled.h2`
  margin-bottom: 30px;
  color: #ffffff;
  font-family: 'Arial', sans-serif;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  input {
    padding: 15px;
    border: none;
    border-radius: 6px;
    outline: none;
    font-family: 'Arial', sans-serif;
    background-color: #333333;
    color: #ffffff;
    transition: border-color 0.3s ease; 
    border: 1px solid transparent; 
  }

  input:focus {
    border-color: white; 
  }
`;

export const StyledLogin = styled(Link)`
  padding: 15px;
  border-radius: 6px;
  background-color: #00ff00;
  color: #000000;
  cursor: pointer;
  font-family: 'Arial', sans-serif;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00cc00;
  }
`;

export const StyledRegister = styled(Link)`
  padding: 15px;
  border-radius: 6px;
  background-color: #ff0000;
  color: #ffffff;
  cursor: pointer;
  font-family: 'Arial', sans-serif;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #cc0000;
  }
`;