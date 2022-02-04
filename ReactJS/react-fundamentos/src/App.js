import React, { useState } from "react";

import Post from './Post';
import Header from './Header';
import { ThemeProvider } from "./ThemeContext";

function App() {
  const [ posts, setPosts ] = useState([
    { id: Math.random(), title: 'Title#01', content: 'Cont#01', likes: 20, read: true},
    { id: Math.random(), title: 'Title#02', content: 'Cont#02', likes: 20, read: false},
    { id: Math.random(), title: 'Title#03', content: 'Cont#03', likes: 20, read: false},
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
      prevState.filter(post => post.id !== postId)
    ));
  }

  function handleReadPost(postId){
    setPosts((prevState) => (
      prevState.map(post => (
        post.id === postId 
        ? {...post, read: true}
        : {...post}
      ))
    ))
  }

  return (
    <ThemeProvider>  
      <Header>
        <h2>
          Posts da Semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      <hr />

      {posts.map( post => (
        <Post 
          key={post.id}
          onRemove={handleRemovePost}
          onRead={handleReadPost}
          post={post}
        />
      ))}
    </ThemeProvider>

  );
}

export default App;