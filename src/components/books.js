import AddBook from './addBooks';

function books(prop) {
  const {
    title, chapter, category, completed, Author,
  } = prop;
  return <div className='Lesson-Panel'>
    <AddBook />
    <span>{category}</span>
    <span>{title}</span>
    <span>{Author}</span>
    <div className='books-buttons'>
      <button className='Comments'>Comments</button>
      <button className='Remove'>Remove</button>
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

export default books;