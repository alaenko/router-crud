import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import PostsContext from './PostsContext';

export default function PostEdit({handleClose, value, id}) {
  const {handleChange, handleSubmit} = useContext(PostsContext);

  return (
    <div className="card">
      <button className="close" onClick={handleClose}>Закрыть</button>
      <form onSubmit={async (evt) => {
        handleClose();
        handleSubmit(evt, id);
      }}>
        <label>Редактировать публикацию
          <textarea type="text" name="content" defaultValue={value} onChange={handleChange}></textarea>
        </label> 
        <button type="submit">Сохранить</button>
      </form>
    </div>
    
  )
}

PostEdit.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  value: PropTypes.string,
  id: PropTypes.number
}
