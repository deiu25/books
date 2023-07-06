import { createContext, useState } from "react";
import axios from "axios";

const IdeasContext = createContext();

function Provider({ children }) {
  const [ideas, setIdeas] = useState([]);

  const fetchIdeas = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setIdeas(response.data);
  };

  const editIdeaById = async (id, newtitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newtitle,
    });
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

  const valueToShare = {
    ideas,
    deleteIdeaById,
    editIdeaById,
    createIdea,
    fetchIdeas,
  };

  return (
    <IdeasContext.Provider value={valueToShare}>
      {children}
    </IdeasContext.Provider>
  );
}

export { IdeasContext, Provider };
