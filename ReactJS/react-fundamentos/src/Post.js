import React from "react";
import PropTypes from 'prop-types';

function Post (props){
  return (
    <>
      <article>
        <h3>{props.post.title}</h3>
        <small>{props.post.content}</small>
        <br />
        Media: {props.likes /2 }
      </article>

      <br />
    </>
  )
}

Post.propTypes = {
  likes: PropTypes.number.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
}

export default Post;