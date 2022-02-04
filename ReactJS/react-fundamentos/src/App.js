import React from "react";

import Post from './Post';
import Header from './Header';

const posts = [
  { title: 'Title#01', content: 'Cont#01', likes: 20},
  { title: 'Title#02', content: 'Cont#02', likes: 20},
  { title: 'Title#03', content: 'Cont#03', likes: 20},
]

function App() {
  return (
    <>  

    <Header>
      <Post 
      likes={10}
        post={{
          title: 'Passado por children',
          content: '--------'
        }}
      />
    </Header>

    <hr />

    {posts.map( post => (
      <Post 
        key={post.title}
        likes={post.likes}
        post={{
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