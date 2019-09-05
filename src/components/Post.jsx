import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
  const {created} = props;
  return (
    <div className="card">
      <div>My name</div>
      <div>{new Date(created).toLocaleString('ru')}</div>
      {props.children}
    </div>
  )
}

Post.propTypes = {
  created: PropTypes.number.isRequired
}

export default Post

