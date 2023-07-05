import React, { useState } from "react";

function IdeaCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
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
