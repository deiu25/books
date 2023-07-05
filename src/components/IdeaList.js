import IdeaShow from "./IdeaShow";

function IdeaList({ ideas, onDelete, onEdit }) {
  const renderedIdeas = ideas.map((idea) => {
    return <IdeaShow onEdit={onEdit} onDelete={onDelete} key={idea.id} idea={idea} />
  });

  return <div className="columns is-multiline">{renderedIdeas}</div>;
}

export default IdeaList;
