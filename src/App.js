import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

import { useState } from 'react';
import React, { useContext } from 'react';
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { ThemeContext } from './components/ThemeContext';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const appClass = theme === 'light' ? 'app light' : 'app dark';

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
    <div className={appClass}>
      <button className={`button is-rounded ${theme === 'light' ? 'is-info' : 'is-dark'}`} onClick={toggleTheme}>
        {theme === 'light' ? (
          <span className="icon">
            <i className="fas fa-moon"></i>
          </span>
        ) : (
          <span className="icon">
            <i className="fas fa-sun"></i>
          </span>
        )}
      </button>
      <div className="container mt-5">
        <h1 className="title has-text-centered">Books</h1>
        <BookCreate onCreate={createBook} />
        <BookList onEdit={editBookById} books={books} onDelete={deleteBookById}/>
      </div>
    </div>
  );
  

  }

export default App;