import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

import { useState, useEffect, useContext } from 'react';
import IdeaCreate from "./components/IdeaCreate";
import IdeaList from "./components/IdeaList";
import { ThemeContext } from './components/ThemeContext';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const appClass = theme === 'light' ? 'app light' : 'app dark';

  const [ideas, setIdeas] = useState([])

  useEffect(() => {
    const allIdeas = Array.from({length: 100}, (_, i) => ({ id: i+1, title: `Idea ${i+1}` }));
  
    const randomIdeas = [];
  
    for (let i = 0; i < 4; i++) {
      const randomIdea = allIdeas[Math.floor(Math.random() * allIdeas.length)];
      if (!randomIdeas.find(idea => idea.id === randomIdea.id)) {
        randomIdeas.push(randomIdea);
      } else {
        i--;
      }
    }
  
    setIdeas(randomIdeas);
  }, []);

  const editIdeaById = (id, newtitle) => {
    const updatedIdeas = ideas.map((idea) => {
      if(idea.id === id) {
        return { ...idea, title: newtitle };
      } else {
        return idea;
      }
    });
    setIdeas(updatedIdeas);
  };

  const deleteIdeaById = (id) => {
    const updatedIdeas = ideas.filter((idea) => {
      return idea.id !== id;
    });
    setIdeas(updatedIdeas);
  };

  const createIdea = (title) => {
    const updatedIdeas = [...ideas, { id: Math.round(Math.random() * 9999 ), title } ];
       setIdeas(updatedIdeas);
  };

  return (
    <div className={appClass}>
      <button className={`theme-button button ${theme === 'light' ? 'is-info' : 'is-dark'}`} onClick={toggleTheme}>
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
        <h1 className="title has-text-centered">Ideas</h1>
        <hr className="custom-hr"/>
        <IdeaCreate onCreate={createIdea} />
        <IdeaList onEdit={editIdeaById} ideas={ideas} onDelete={deleteIdeaById}/>
      </div>
    </div>
  );
  

  }

export default App;