import IdeaShow from "./IdeaShow";
import useIdeasContext from "../hooks/use-ideas-context";

function IdeaList() {
  const { ideas } = useIdeasContext();

  const renderedIdeas = ideas.map((idea) => {
    return <IdeaShow key={idea.id} idea={idea} />;
  });

  return <div className="columns is-multiline">{renderedIdeas}</div>;
}

export default IdeaList;
