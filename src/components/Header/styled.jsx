import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 30px;
  background-color: #111;
  color: #fff;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
`;

export const Logo1 = styled.img` 
  margin: 0;
`;

export const CompanyName = styled.h3`
  font-size: 1.6rem;
  font-weight: 500;
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