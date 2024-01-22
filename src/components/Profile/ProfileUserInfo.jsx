import { jwtDecode } from 'jwt-decode';

export const getLoggedInUser = () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        
        const decodedToken = jwtDecode(token);
        return decodedToken.user; 
      } catch (error) {
        console.error('Erro ao decodificar o token:', error);
        return null;
      }
    }
    return null;
  };