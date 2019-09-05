import React, { useEffect, useState } from 'react';
import PostsContext from './PostsContext';

export default function PostsProvider(props) {
  const [posts, setPosts] = useState(null);
  const [newText, setNewText] = useState('');
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    if (update) {
      fetch(process.env.REACT_APP_POSTS)
      .then(res => res.json())
      .then(data => {
        setPosts(data)
      });

      setUpdate(false);
    }
  }, [{update}]); 

  const updatePosts = () => setUpdate(true);
  const handleChange = (evt) => {
    const value = evt.target.value;
    setNewText(value);
  }

  const handleSubmit = (evt, id) => {
    evt.preventDefault();
    const data = {
      id: id,
      content: newText
    }
    fetch(process.env.REACT_APP_POSTS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    })
    .then(() => updatePosts())
  }

  return (
    <PostsContext.Provider value={{posts, handleChange, handleSubmit, updatePosts}}>
      {props.children}
    </PostsContext.Provider>
  )
}