import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';

class BooksStore {
    books = [];

    constructor() {
        makeAutoObservable(this);
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(index) {
        this.books.splice(index, 1);
    }
}

const booksStore = new BooksStore();

// const BooksComponent = observer(() => {
//     const handleAddBook = () => {
//         booksStore.addBook('New Book');
//     };

//     const handleRemoveBook = (index) => {
//         booksStore.removeBook(index);
//     };

//     return (
//         <div>
//             <button onClick={handleAddBook}>Add Book</button>
//             <ul>
//                 {booksStore.books.map((book, index) => (
//                     <li key={index}>
//                         {book}{' '}
//                         <button onClick={() => handleRemoveBook(index)}>Remove</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// });

export default booksStore;
