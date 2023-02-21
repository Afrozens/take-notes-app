import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormNote from "../components/FormNote";
import { editNote, getNote } from "../data/notesPetition";

const EditNotePage = () => {
  const [errors, setErrors] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { data: note } = useQuery({
    queryKey: ["note"],
    queryFn: () => getNote(params.noteId),
    cacheTime: 0,
  });

  const editNoteMutation = useMutation({
    mutationFn: editNote,
    onSuccess: () => {
      queryClient.invalidateQueries("note");
      queryClient.invalidateQueries("notes");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const noteUpdate = Object.fromEntries(formData);

    if (Object.values(noteUpdate).includes("")) {
      return setErrors(["Todos los campos son obligatorios"]);
    }
    editNoteMutation.mutate({
      ...noteUpdate,
      id: params.noteId,
    });

    return navigate("/");
  };
  return (
    <div className="w-4/5 flex flex-col items-center py-6">
      <h2 className="font-semibold text-3xl leading-10 tracking-widest mb-4 flex-wrap">
        Edit Note
      </h2>

      <div className="max-w-md bg-gray-100 shadow-md rounded-md md:w-3/4 mx-auto px-5 py-10 mt-2 flex flex-col items-center">
        {errors.length > 0 &&
          errors.map((error, i) => <Error key={i}>{error}</Error>)}
        <form onSubmit={handleSubmit}>
          <FormNote note={note} />

          <input type="submit" value="Edit Note" className="btn btn-block" />
        </form>
      </div>
    </div>
  );
};

export default EditNotePage;

/* 
export const actionEditNote = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const errors = [];
  if (Object.values(data).includes("")) {
    errors.push("Todos los campos son obligatorios");
  }

  if (Object.keys(errors).length) {
    return errors;
  }

  await updateNote(params.noteId, data);

  toast.success("Note Edit successfully", {
    duration: "1000",
    id: params.noteId,
  });

  return redirect("/");
}; */
