import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  }

  let content = <h3>{book.title}</h3>
  if(showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book}/>;
  }

  return (
    <div className="column is-one-half is-3-tablet">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
          </figure>
        </div>
        <div className="card-content">
          {content}
          <div className="buttons are-small mt-5">
            <button className="button is-primary" onClick={handleEditClick}>
              Edit 
            </button>
            <button className="button is-danger" onClick={handleDeleteClick}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookShow;
