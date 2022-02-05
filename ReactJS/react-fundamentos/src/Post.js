import React from "react";
import PropTypes from 'prop-types';

import PostHeader from "./PostHeader";

import styles from './Post.scss';
console.log(styles);
console.log(`${styles.post}.${styles.deleted}`);

export default function Post (props){
  return (
    <article 
      className={
        props.post.removed
          ? `${styles.post} ${styles.deleted}`
          : styles.post
      }
    >
      <PostHeader
        onRemove={props.onRemove}
        onRead={props.onRead}
        post={{
          id: props.post.id,
          title: props.post.title,
          read: props.post.read,
        }}
      />
      <br />
      <small>{props.post.content}</small>
      <br />
      Media: {props.post.likes /2 }
    </article>
  )
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  onRead: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
    removed: PropTypes.bool.isRequired,
  }).isRequired,
}