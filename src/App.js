import 'bulma/css/bulma.min.css';
import { useState } from 'react';
import React from 'react';
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([])

  const editBookById = (id, newtitle) => {
    const updatedBooks = books.map((book) => {
      if(book.id === id) {
        return { ...book, title: newtitle };
      } else {
        return book;
      }
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const createBook = (title) => {
    const updatedBooks = [...books, { id: Math.round(Math.random() * 9999 ), title } ];
       setBooks(updatedBooks);
  };

  return (
    <div className="container mt-5">
      <h1 className="title has-text-centered">Books</h1>
      <BookCreate onCreate={createBook} />
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById}/>
    </div>
    );
  }

export default App;