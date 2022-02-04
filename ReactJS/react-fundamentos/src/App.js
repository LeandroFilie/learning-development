import React, { useState } from "react";

import Post from './Post';
import Header from './Header';

function App() {
  const [ posts, setPosts ] = useState([
    { id: Math.random(), title: 'Title#01', content: 'Cont#01', likes: 20},
    { id: Math.random(), title: 'Title#02', content: 'Cont#02', likes: 20},
    { id: Math.random(), title: 'Title#03', content: 'Cont#03', likes: 20},
  ]);


  function handleRefresh(){
    setPosts((prevState) => [ 
      ...prevState, 
      {
        id: Math.random(),
        title: `Title#0${prevState.length + 1}`,
        content: `Cont#0${prevState.length + 1}`,
        likes: 50,
      },
    ]);
  }

  function handleRemovePost(postId){
    setPosts((prevState) => (
      prevState.filter(post => post.id !== postId)
    ));
  }

  return (
    <>  
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
        likes={post.likes}
        onRemove={handleRemovePost}
        post={{
          id: post.id,
          title: post.title,
          content: post.content,
        }}
      />
    ))}

     {/*  <Post 
        likes={20}
        post={{
          title: 'Título da notícia 1',
          content: 'Conteúdo da notícia 1'
        }}
      />

      <Post 
      likes={10}
        post={{
          title: 'Título da notícia 2',
          content: 'Conteúdo da notícia 2'
        }}
      />

      <Post 
      likes={50}
        post={{
          title: 'Título da notícia 3',
          content: 'Conteúdo da notícia 3'
        }}
      /> */}


    </>

  );
}

export default App;