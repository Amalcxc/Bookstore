const AddBook = () => (
  <form>
    <input type="text" placeholder="Book title" />
    <select disabled>
      <option value="category">Category</option>
    </select>
    <button type="button">ADD BOOK</button>
  </form>
);

export default AddBook;