import { useContext } from "react";
import { IdeasContext } from "../context/ideas";
import IdeaShow from "./IdeaShow";

function IdeaList() {
  const { ideas } = useContext(IdeasContext);

  const renderedIdeas = ideas.map((idea) => {
    return <IdeaShow key={idea.id} idea={idea} />;
  });

  return <div className="columns is-multiline">{renderedIdeas}</div>;
}

export default IdeaList;
