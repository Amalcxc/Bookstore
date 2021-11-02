import React from 'react';
import { useSelector } from 'react-redux';
import Books from './books';


const BookList = () => {

  const list = useSelector((state) => state.booksReducer);

  return (
    <div className="list-container">
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