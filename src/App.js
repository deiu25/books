import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

import { useState, useEffect, useContext } from "react";
import IdeaCreate from "./components/IdeaCreate";
import IdeaList from "./components/IdeaList";
import { ThemeContext } from "./components/ThemeContext";
import axios from "axios";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const appClass = theme === "light" ? "app light" : "app dark";

  const [ideas, setIdeas] = useState([]);

  const fetchIdeas = async () => {
    const response = await axios.get("http://localhost:3001/books");

    setIdeas(response.data);
  };

  useEffect(() => {
    fetchIdeas();
  }, []);

  const editIdeaById = async (id, newtitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, { title: newtitle });
    const updatedIdeas = ideas.map((idea) => {
      if (idea.id === id) {
        return { ...idea, ...response.data };
      } 
        return idea;

    });
    setIdeas(updatedIdeas);
  };

  const deleteIdeaById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedIdeas = ideas.filter((idea) => {
      return idea.id !== id;
    });
    setIdeas(updatedIdeas);
  };

  const createIdea = async (title) => {
    const response = await axios.post("http://localhost:3001/books", { title });
    const updatedIdeas = [...ideas, response.data];
    setIdeas(updatedIdeas);
  };

  return (
    <div className={appClass}>
      <button
        className={`theme-button button ${
          theme === "light" ? "is-info" : "is-dark"
        }`}
        onClick={toggleTheme}
      >
        {theme === "light" ? (
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
        <h1 className="title has-text-centered">Ideas</h1>
        <hr className="custom-hr" />
        <IdeaCreate onCreate={createIdea} />
        <IdeaList
          onEdit={editIdeaById}
          ideas={ideas}
          onDelete={deleteIdeaById}
        />
      </div>
    </div>
  );
}

export default App;
