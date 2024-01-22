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

export const UserImg = styled.img`
  background-color: #fff;
  max-width: 20px;
  max-height: 20px;
`

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
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
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
  overflow-y: auto;
  justify-content: center;
  flex: 1;

  div {
    cursor: pointer;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    transition: transform 0.3s ease-in-out;
    width: 200px; 
    height: 300px; 

    img {
      width: 100%;
      height: 80%; 
      object-fit: cover; 
      border-radius: 5px;
      margin-bottom: 10px;
    }

    p {
      margin-top: 10px;
      font-weight: bold;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const RecentlyRead = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column; 

  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
  }

  div > div {
    cursor: pointer;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    transition: transform 0.3s ease-in-out;

    img {
      width: 100%;
      height: 80%;
      object-fit: cover;
      border-radius: 5px;
      margin-bottom: 10px;
    }

    p {
      margin-top: 10px;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &:hover {
      transform: scale(1.05);
    }
  }

  div > div.no-books {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 100%; 
      height: auto;
      margin-bottom: 10px;
    }

    p {
      font-size: 1rem;
    }
  }
`;