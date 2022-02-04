import React from "react";
import PropTypes from 'prop-types';

function Post (props){
  // Renderização condicional I
  // if(props.post.read){
  //   return <h2>{props.post.title} já lido</h2>
  // }
  return (
    <>
      <article>
        <strong>
          {/* Renderização condicional II */}
          {/* {props.post.read ? <s>{props.post.title}</s> : props.post.title} */}

          {/* Renderização condicional III */}
          {props.post.read && <s>{props.post.title}</s>}
          {!props.post.read && props.post.title}
        </strong>
        <button onClick={() => props.onRemove(props.post.id)}>
          Remover
        </button>
        {
          !props.post.read && (
            <button onClick={() => props.onRead(props.post.id)}>
              Marcar como lido
            </button>
          )
        }

        <br />
        <small>{props.post.content}</small>
        <br />
        Media: {props.post.likes /2 }
      </article>

      <br />
    </>
  )
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
}

export default Post;