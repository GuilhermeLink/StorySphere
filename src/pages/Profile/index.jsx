import React, { useState } from 'react';
import {
  SearchBar,
  Sidebar,
  MainContent,
  PageContent,
  SidebarHeader,
  SidebarNav,
  SearchResults,
  UserImg,
  RecentlyRead
} from './styled';
import { useNavigate } from 'react-router-dom';
import UserProfile from '../../assets/user.png';
import { getLoggedInUser } from '../../components/Profile/ProfileUserInfo';
import PlaceholderImage from '../../assets/nothing.png';

const Profile = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearchResults, setHasSearchResults] = useState(false);
  const loggedInUser = getLoggedInUser();

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
          <UserImg src={UserProfile} alt="User" />
          <span>{loggedInUser ? loggedInUser.name : 'User Name'}</span>
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

        {hasSearchResults && (
          <SearchResults>
            {searchResults.map((book) => (
              <div key={book.id} onClick={() => handleResultClick(book)}>
                <img src={book.volumeInfo.imageLinks?.thumbnail || ''} alt={book.volumeInfo.title} />
                <p>{book.volumeInfo.title}</p>
              </div>
            ))}
          </SearchResults>
        )}

        {!hasSearchResults && (
          <RecentlyRead>
            <h2>Recently Read:</h2>
            <div>
              {loggedInUser?.recentlyReadBooks && loggedInUser.recentlyReadBooks.length > 0 ? (
                loggedInUser.recentlyReadBooks.map((book) => (
                  <div key={book.id} onClick={() => handleResultClick(book)}>
                    <img src={book.thumbnail || ''} alt={book.title} />
                    <p>{book.title}</p>
                  </div>
                ))
              ) : (
                <div>
                  <img src={PlaceholderImage} alt="Nothing here yet" />
                  <p>Nada por aqui ainda</p>
                </div>
              )}
            </div>
          </RecentlyRead>
        )}
      </MainContent>
    </PageContent>
  );
};

export default Profile;