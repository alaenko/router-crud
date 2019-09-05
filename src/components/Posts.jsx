import React, { useContext } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import PostsContext from './PostsContext';
import Post from './Post';
import NewLink from './NewLink';

function Posts({match}) {
  const {posts} = useContext(PostsContext);

  return (
    <ul>
      <Route path={"/"} component={NewLink} />
      {posts && posts.map(o => (
        <li key={o.id}>
        <Link to={match.url + 'posts/' + o.id}>
          <Post created={new Date(o.created).toLocaleString('ru')}>
            <div>{o.content}</div>
          </Post>
        </Link>
        </li>
        
      ))}
    </ul>
  )
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
    created: PropTypes.string
  }))
}

export default Posts

