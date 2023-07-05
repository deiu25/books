import { useState, useContext } from "react";
import { IdeasContext } from "../context/ideas";

function IdeaEdit({ idea, onSubmit }) {
  const [title, setTitle] = useState(idea.title);
  const { editIdeaById } = useContext(IdeasContext);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editIdeaById(idea.id, title);
  };

  return (
    <form onSubmit={handleSubmit} className="idea-edit">
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary">Update</button>
    </form>
  );
}

export default IdeaEdit;
