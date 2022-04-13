import React, { useState } from "react";

import Post from '../Post';
import Header from '../Header';
import { ThemeProvider } from "../../context/ThemeContext";

import { Title } from "./styles";

function App() {
  const [ posts, setPosts ] = useState([
    { id: Math.random(), title: 'Title#01', content: 'Cont#01', likes: 20, read: true, removed: false},
    { id: Math.random(), title: 'Title#02', content: 'Cont#02', likes: 20, read: false, removed: true},
    { id: Math.random(), title: 'Title#03', content: 'Cont#03', likes: 20, read: false, removed: false},
  ]);

  function handleRefresh(){
    setPosts((prevState) => [ 
      ...prevState, 
      {
        id: Math.random(),
        title: `Title#0${prevState.length + 1}`,
        content: `Cont#0${prevState.length + 1}`,
        likes: 50,
        read: false,
      },
    ]);
  }

  function handleRemovePost(postId){
    setPosts((prevState) => (
      prevState.map(post => (
        post.id === postId
          ? { ...post, removed: true }
          : post
      ))
    ));
  }

  return (
    <ThemeProvider>  
      <Header>
        <Title as="h2">
          Posts da Semana
          <button onClick={handleRefresh}>Atualizar</button>
        </Title>
      </Header>

      <hr />

      {posts.map( post => (
        <Post 
          key={post.id}
          onRemove={handleRemovePost}
          post={post}
        />
      ))}
    </ThemeProvider>

  );
}

export default App;