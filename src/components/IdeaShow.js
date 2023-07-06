import { useState } from "react";
import useIdeasContext from "../hooks/use-ideas-context";
import IdeaEdit from "./IdeaEdit";

function IdeaShow({ idea }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteIdeaById } = useIdeasContext();

  const handleDeleteClick = () => {
    deleteIdeaById(idea.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = <h3>{idea.title}</h3>;
  if (showEdit) {
    content = <IdeaEdit onSubmit={handleSubmit} idea={idea} />;
  }

  return (
    <div className="column is-one-half is-3-tablet">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              alt="ideas"
              src={`https://picsum.photos/seed/${idea.id}/300/200`}
            />
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

export default IdeaShow;
