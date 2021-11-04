import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';
const initialState = [];
// books.js
export const addBook = (payload) => async (dispatchBook) => {
  const books = {
    title: `${payload.title}&&&${payload.author}`,
    category: `${payload.category}`,
    item_id: `${payload.id}`,
  };
  await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/wW8NlIxPxdb6PkWckrhR/books', books);
  dispatchBook({
    type: ADD_BOOK,
    payload,
  });
};

export const getBooks = () => async (get) => {
  const allBooks = [];
  try {
    const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/wW8NlIxPxdb6PkWckrhR/books');
    const books = Object.values(response.data);
    const keys = Object.keys(response.data);
    console.log(books);
    books.forEach((val, i) => {
      const obj = val[0];
      const title = obj.title.split('&&&');
      const book = {
        title: title[0],
        category: 'placeholder category',
        author: title[1],
        completed: 0,
        chapter: 1,
        id: keys[i],
      };
      allBooks.push(book);
    });
  } catch (error) {
    console.error(error);
  }
  get({
    type: GET_BOOKS,
    payload: allBooks,
  });
};

export const removeBook = (id) => async (dispatch) => {
  const getId = {
    item_id: id,
  };
  await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/wW8NlIxPxdb6PkWckrhR/books/${id}`, getId);
  dispatch({
    type: REMOVE_BOOK,
    id,
  });
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    case GET_BOOKS: return action.payload;
    default:
      return state;
  }
};

export default booksReducer;