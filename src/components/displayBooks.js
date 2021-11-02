import React from 'react';
import AddBook from './addBooks';
import ListOfBooks from './listOfBooks';

const Books = () => (
  <>
    <div className="display-Books">
      <ListOfBooks />
      <h2>ADD NEW BOOK</h2>
      <AddBook />
    </div>
  </>
);

export default Books;