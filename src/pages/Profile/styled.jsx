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
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
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

export const SearchResults = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-height: 70vh;
  overflow-y: auto;
  justify-content: center;
  flex: 1;

  div {
    cursor: pointer;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    transition: transform 0.3s ease-in-out;
    width: 200px; /* Tamanho fixo para os boxes */
    height: 300px; /* Altura fixa para os boxes */

    img {
      width: 100%;
      height: 80%; /* Altura da imagem em relação ao box */
      object-fit: cover; /* Mantém a proporção da imagem e corta se necessário */
      border-radius: 5px;
      margin-bottom: 10px;
    }

    p {
      margin-top: 10px;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis; /* Adiciona reticências (...) se o texto ultrapassar a largura */
    }

    &:hover {
      transform: scale(1.05);
    }
  }
`;