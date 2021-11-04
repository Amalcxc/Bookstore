import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../redux/books/books';
import Books from './books';

const BookList = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.booksReducer);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div className="container">
      {list.map((book) => (
        <div className="book" key={book.id}>
          <Books
            title={book.title}
            category={book.category}
            author={book.author}
            completed={book.completed}
            chapter={book.chapter}
            id={book.id}
          />
        </div>
      ))}
    </div>
  );
};

export default BookList;