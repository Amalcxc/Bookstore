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
    <div>
      <span className='Categories'>{category}</span>
      <h2 className='Title'>{title}</h2>
      <h6 className='Author'>{author}</h6>
      <div className='books-buttons'>
        <button className='Comments'>Comments</button>
        <button className='Remove' onClick={removeHandler} type="button">Remove</button>
        <button className='Edit'>Edit</button>
      </div>
    </div>
    <div className='Percent-c'>
     <div class="Oval-2"></div>
     <div>
      <h3 className='Percent-Complete'>{completed}%</h3>
      <h3 className='Completed'>completed</h3>
     </div>

    </div>
    <div className='chapter'>
    <h3 className="Current-Chapter">Current Chapter</h3>
    <h3 className='Current-Lesson'>Chapter {chapter}</h3>
    <button className='Update-progress'>Update progress</button>
    </div>
  </div>;
};

Books.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  completed: PropTypes.number.isRequired,
  chapter: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default Books;