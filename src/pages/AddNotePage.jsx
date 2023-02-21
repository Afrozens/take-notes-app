import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { setNote } from "../data/notesPetition";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import FormNote from "../components/FormNote";
import Error from "../components/Error";
import { useState } from "react";

const AddNotePage = () => {
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const addNoteMutation = useMutation({
    mutationFn: setNote,
    onSuccess: () => {
      queryClient.invalidateQueries("notes");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const notes = Object.fromEntries(formData);

    if (Object.values(notes).includes("")) {
      return setErrors(["Todos los campos son obligatorios"]);
    }

    addNoteMutation.mutate({
      ...notes,
      id: uuid(),
    });

    return navigate("/");
  };

  return (
    <div className="w-4/5 flex flex-col items-center py-6 ">
      <h2 className="font-semibold text-3xl leading-10 tracking-widest mb-4 flex-wrap">
        Create Note
      </h2>

      <div className="max-w-md bg-gray-100 shadow-md rounded-md md:w-3/4 mx-auto px-5 py-10 mt-2 flex flex-col items-center">
        {errors.length > 0 &&
          errors.map((error, i) => <Error key={i}>{error}</Error>)}

        <form onSubmit={handleSubmit}>
          <FormNote />

          <input type="submit" value="Create Note" className="btn btn-block" />
        </form>
      </div>
    </div>
  );
};

export default AddNotePage;
