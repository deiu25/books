import { useState } from "react";
import useIdeasContext from "../hooks/use-ideas-context";

function IdeaCreate() {
  const [title, setTitle] = useState("");
  const { createIdea } = useIdeasContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createIdea(title);
    setTitle("");
  };

  return (
    <div className="box has-text-centered">
      <h3 className="title is-4">Create an idea</h3>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input className="input" value={title} onChange={handleChange} />
          </div>
        </div>
        <button className="button is-primary">Create</button>
      </form>
    </div>
  );
}

export default IdeaCreate;
