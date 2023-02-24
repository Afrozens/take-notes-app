import IconRightArrow from "../assets/IconRightArrow.svg";
import IconDelete from "../assets/IconDelete.svg";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNote } from "../data/notesPetition";

const CardNote = ({ note }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const delNoteMutation = useMutation({
    mutationFn: deleteNote,
    onSuccess: () => {
      queryClient.invalidateQueries("notes");
    },
  });

  return (
    <div className="h-64 max-w-sm bg-white rounded-lg p-6 mb-8 shadow-md">
      <h4 className="text-gray-400 mb-6 text-md">Junio</h4>
      <div className="flex">
        <span
          className={`badge badge-xs indicator-item mr-4 ${
            (note.category === "Personal" && "badge-accent") ||
            (note.category === "Project" && "badge-secondary") ||
            (note.category === "Business" && "badge-primary")
          }`}
        ></span>
        <h3 className="h-[28px] font-semibold text-xl mb-4 truncate">
          {note.title}
        </h3>
      </div>
      <div className="h-[98px]">
        <p className="h-[70px] text-gray-700 truncate whitespace-pre-line indent-1">
          {note.description}
        </p>
        <button onClick={() => navigate(`/notes/${note.id}`)}>
          <img
            src={IconRightArrow}
            alt="right arrow icon"
            className="h-6 w-6"
          />
        </button>
      </div>
      <div className="flex flex-wrap justify-end">
        <button onClick={() => delNoteMutation.mutate(note.id)}>
          <img src={IconDelete} alt="add icon" className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
};

export default CardNote;
