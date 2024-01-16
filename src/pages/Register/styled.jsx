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

export const RegisterImage = styled.img`
  width: 550px; 
  height: auto;
  margin-right: 20px; 
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  background-color: #d7dee5;
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

  button {
    padding: 15px;
    border: 1px solid transparent;
    border-radius: 6px;
    font-family: 'Arial', sans-serif;
    text-decoration: none;
    transition: background-color 0.3s ease, border-color 0.3s ease; 
    width: 100%;
    box-sizing: border-box;
  }

  input {
    padding: 15px;
    border: none;
    border-radius: 6px;
    outline: none;
    font-family: 'Arial', sans-serif;
    background-color: #333333;
    color: #ffffff;
    transition: border-color 0.3s ease; 
    border: 2px solid transparent; 

    &:focus {
      border-color: white;
    }
  }

  button {
    background-color: #27ae60;
    color: #000000;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      background-color: #00cc00;
    }
  }
`;

export const ReturnLink = styled(Link)`
  display: block;
  padding: 15px;
  border-radius: 6px;
  background-color: #3498db;
  color: #ffffff;
  font-family: 'Arial', sans-serif;
  font-size: 14px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    background-color: #165e8e;
  }
`;