import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';


export default function Header({ onToggleTheme, selectedTheme }) {
  const history = useHistory();

  function handleNavigation() {
    history.push('/posts');
  }

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button
        type="button"
        onClick={onToggleTheme}
      >
        {selectedTheme === 'dark' ? '🌞' : '🌚'}
      </button>
      <button onClick={handleNavigation} style={{ color: '#fff' }}>Navegar</button>
    </Container>
  );
}
