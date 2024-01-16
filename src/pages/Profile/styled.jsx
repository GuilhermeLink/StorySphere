import styled from 'styled-components';

export const PageContent = styled.div`
  background-color: #f4f5f7;
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Sidebar = styled.div`
  background-color: #111;
  color: #fff;
  width: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  span {
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

export const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;

  button {
    color: #111;
    text-decoration: none;
    background-color: #f1c40f;
    padding: 10px 20px;
    font-size: 1.2rem;
    margin-bottom: 10px;
    border-radius: 5px;
    transition: background-color 0.3s;
    cursor: pointer;

    &:hover {
      background-color: #6f6f6f;
    }
  }
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  input {
    width: 70%;
    padding: 10px;
    border: none;
    border-radius: 5px;
  }

  button {
    width: 25%;
    background-color: #f1c40f;
    color: #111;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;