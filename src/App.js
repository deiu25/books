import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

import { useEffect, useContext } from "react";
import IdeaCreate from "./components/IdeaCreate";
import IdeaList from "./components/IdeaList";
import { ThemeContext } from "./components/ThemeContext";
import { IdeasContext } from "./context/ideas";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const appClass = theme === "light" ? "app light" : "app dark";

  const { fetchIdeas } = useContext(IdeasContext);

  useEffect(() => {
    fetchIdeas();
  }, [fetchIdeas]);


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
        <IdeaCreate />
        <IdeaList />
      </div>
    </div>
  );
}

export default App;
