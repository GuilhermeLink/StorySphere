import React, { useState } from 'react';
import {
  SearchBar,
  Sidebar,
  MainContent,
  PageContent,
  SidebarHeader,
  SidebarNav,
  SearchResults,
} from './styled';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearchResults, setHasSearchResults] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/home');
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`);
      const data = await response.json();
      setSearchResults(data.items || []);
      setHasSearchResults(true);
    } catch (error) {
      console.error('Erro ao buscar resultados:', error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleResultClick = (book) => {
    // Lidar com o clique em um resultado (abrir modal, adicionar aos "em leitura", etc.)
    console.log('Clicou em:', book);
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
      <MainContent hasSearchResults={hasSearchResults}>
        <SearchBar>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button type="button" onClick={handleSearch}>
            Search
          </button>
        </SearchBar>

        <SearchResults>
          {searchResults.map((book) => (
            <div key={book.id} onClick={() => handleResultClick(book)}>
              <img src={book.volumeInfo.imageLinks?.thumbnail || ''} alt={book.volumeInfo.title} />
              <p>{book.volumeInfo.title}</p>
            </div>
          ))}
        </SearchResults>

      </MainContent>
    </PageContent>
  );
};

export default Profile;