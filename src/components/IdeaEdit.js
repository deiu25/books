import { useState } from "react";
import useIdeasContext from "../hooks/use-ideas-context";

function IdeaEdit({ idea, onSubmit }) {
  const [title, setTitle] = useState(idea.title);
  const { editIdeaById } = useIdeasContext();

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
