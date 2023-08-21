import React, { useState } from "react";
import { observer, Provider } from "mobx-react";
import booksStore from "./stores/BooksStore";

const App = observer(() => {
  const [newBook, setNewBook] = useState('');
  const addNewBook = () => {
    if (!newBook) return;
    booksStore.addBook(newBook);
    setNewBook("");
  }
  const deleteBook = (index) => {
    booksStore.removeBook(index)
  }
  return (
    <Provider bookStore={booksStore}>
      <div>
        <ol>
          {booksStore.books.map((book, index) => (
            <li key={index}>
              {book}
              <button onClick={() => deleteBook(index)}>delete</button>
            </li>
          ))}
        </ol>
        <input type="text" value={newBook} onChange={(e) => setNewBook(e.target.value)} />
        <button onClick={addNewBook}>add</button>
      </div>
    </Provider>
  )
});

export default App;