import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import PostsContext from './PostsContext';
import Post from './Post';
import PostEdit from './PostEdit';

export default function PostCard({match}) {
  const {posts, updatePosts} = useContext(PostsContext);
  const [post, setPost] = useState(null);
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState('');
  const id = Number(match.params.id);
  

  useEffect(() => {
    if (!posts) return;
    setPost(posts.find(o => o.id === id))
  }, [{posts}]);     
 
  const handleEdit = () => {
    setContent(post.content);
    setEditing(true);
  }

  const handleClose = () => {
    setEditing(false);
  }

  const handleDelete = () => {
    fetch(process.env.REACT_APP_POSTS + '/' + id, {
      method: 'DELETE'
    })
    .then(() => {
      updatePosts();
    });
  }

  return (
    <React.Fragment>
      {post && (editing ? <PostEdit handleClose={handleClose} value={content} id={id}/> :
        <Post created={post.created}>
          <div>{post.content}</div>
          <div className="btns-wrap">
            <button className="btn" onClick={handleEdit}>Изменить</button>
            <Link to="/" className="btn" onClick={handleDelete}>Удалить</Link>
          </div>
        </Post>
      )}
    </React.Fragment>
  )
}

PostCard.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
    created: PropTypes.string
  }))
}