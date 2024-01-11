import styled from 'styled-components';
import backgroundImage from '../../assets/background.jpg';
import { Link } from 'react-router-dom';

export const RegisterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #000000 0%, #090909 100%);
  background-image: url(${backgroundImage});
  background-size: cover;
`;

export const RegisterFormContainer = styled.div`
  background-color: #1f1f1f;
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  width: 400px;
  text-align: center;
`;

export const RegisterTitle = styled.h2`
  margin-bottom: 30px;
  color: #ffffff;
  font-family: 'Arial', sans-serif;
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  input,
  button {
    padding: 15px;
    border: 1px solid transparent; /* Remove a borda inicial */
    border-radius: 6px;
    font-family: 'Arial', sans-serif;
    text-decoration: none;
    transition: background-color 0.3s ease, border-color 0.3s ease; /* Adiciona a transição para a borda */
    width: 100%;
    box-sizing: border-box;
  }

  input {
    background-color: #333333;
    color: #ffffff;

    &:focus {
      border-color: white; /* Adiciona a borda branca ao focar no input */
    }
  }

  button {
    background-color: #00ff00;
    color: #000000;
    cursor: pointer;

    &:hover {
      background-color: #00cc00;
    }
  }
`;

export const ReturnLink = styled(Link)`
  display: block;
  padding: 15px;
  border: 1px solid #ffffff;
  border-radius: 6px;
  background-color: #1f1f1f;
  color: #ffffff;
  font-family: 'Arial', sans-serif;
  text-decoration: none;
  transition: background-color 0.3s ease;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    background-color: #00ff00;
    border: 1px solid transparent;
  }
`;