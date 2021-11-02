import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const Books = (prop) => {
  const {
    title, chapter, category, id, completed, author,
  } = prop;

  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(removeBook(id));
  };

  return <div className='Lesson-Panel'>
    <span>{category}</span>
    <span>{title}</span>
    <span>{author}</span>
    <div className='books-buttons'>
      <button className='Comments'>Comments</button>
      <button className='Remove' onClick={removeHandler} type="button">Remove</button>
      <button className='Edit'>Edit</button>
    </div>
    <div>
     <span>{completed}</span>
    </div>
    <div>
    <span className="Current-Chapter">Current Chapter</span>
    <span>{chapter}</span>
    <button className='Update-progress'>Update progress</button>
    </div>
  </div>;
}

Books.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  completed: PropTypes.number.isRequired,
  chapter: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default Books;