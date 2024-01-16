import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #202020;
  padding: 0 20px;
  height: 80px;
  background-color: #111;
  color: #fff;
`;

export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 20%;
  height: 70%;
  padding: 10px 0;
`;

export const Logo1 = styled.img` 
  width: 100%;
  max-width: 60px;
  margin-left: 10px;
`;

export const CompanyName = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
  margin: 0;
  margin-left: 5px;
`;

export const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const LoginButton = styled.button`
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    background-color: #2980b9;
  }
`;

export const SignUpButton = styled.button`
  background-color: #27ae60;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    background-color: #219a52;
  }
`;