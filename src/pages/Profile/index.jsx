import React from 'react';
import {
  SearchBar,
  Sidebar,
  MainContent,
  PageContent,
  SidebarHeader,
  SidebarNav,
} from './styled';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
      localStorage.removeItem('token');  
      navigate('/home');
    };


    return (
      <PageContent>
        <Sidebar>
          <SidebarHeader>
            <img src="perfil.jpg" alt="Profile" />
            <span>User Name</span>
          </SidebarHeader>
          <SidebarNav>
            <button>Dashboard</button>
            <button>Boards</button>
            <button>Profile</button>
            <button onClick={handleLogout}>Logout</button>
          </SidebarNav>
        </Sidebar>
        <MainContent>
          {/* Barra de Pesquisa */}
          <SearchBar>
            <input type="text" placeholder="Search..." />
            <button type="button">Search</button>
          </SearchBar>
  
          {/* Layout Principal */}
          <div style={{ display: 'flex' }}>
            {/* Barra Lateral para Últimos Adicionados */}
            <Sidebar>
              <h2>Last Added</h2>
              <ul>
                <li>Book 1</li>
                <li>Book 2</li>
                <li>Manga 1</li>
                {/* ... outros itens ... */}
              </ul>
            </Sidebar>
  
            {/* Espaço Central para Visualização de Livros/Mangas */}
            <MainContent>
              <h1>Book/Manga Viewer</h1>
              {/* ... outros componentes ... */}
            </MainContent>
          </div>
        </MainContent>
      </PageContent>
    );
  };
  
  export default Profile;