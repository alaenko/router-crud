import React, {useContext, useState} from 'react';
import { Redirect, Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import PostsContext from './PostsContext';

export default function New({match}) {
  const {handleChange, handleSubmit} = useContext(PostsContext);
  const [redirect, setRedirect] = useState(false)

  return (
    redirect ? <Route path="*" render={() => (<Redirect to="/" />)} />  :
    <div className="card">
      <Link to="/" className="close">Закрыть</Link>
      <form onSubmit={(evt) => {
        handleSubmit(evt, 0);
        setRedirect(true)
        }}>
      <label>Публикация
        <input type="text" name="content" onChange={handleChange}></input>
      </label> 
      <button type="submit" className="btn">Опубликовать</button>
    </form>
    </div>
    
  )
}

New.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func
}
