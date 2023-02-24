import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editNote, getNote } from "../data/notesPetition";
import IconTime from "../assets/IconTime.svg";
import IconDown from "../assets/IconDown.svg";
import { useEffect, useState } from "react";
import Error from "../components/Error";

const NotePage = () => {
  const [errors, setErrors] = useState([]);
  
  const navigate = useNavigate();
  const params = useParams();
  
  const queryClient = useQueryClient();

  const { data: note, isLoading } = useQuery({
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
    console.log(noteUpdate);

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
    <>
      <div className="text-sm breadcrumbs mb-12 sm:text-base ">
        <ul>
          <li className="hover:underline cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="truncate">
            <a>{note?.title}</a>
          </li>
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <section className="min-h-screen w-full px-12 sm:px-28 md:px-36 lg:px-48">
          {errors.length > 0 &&
            errors.map((error, i) => <Error key={i}>{error}</Error>)}

          <input
            type="text"
            name="title"
            className="bg-gray-100 focus:outline-0 font-bold text-2xl tracking-wide mb-2 sm:text-3xl lg:text-5xl lg:mb-6 hover:bg-gray-100"
            defaultValue={note?.title}
          />
          <ul className="text-sm font-semibold mb-4 sm:text-lg lg:mb-8">
            <li className="flex w-full">
              <div className="grid h-8 w-10 flex-grow card place-items-center sm:w-40">
                <img src={IconTime} alt="time icon" className="w-6 h-6 mr-2" />
                Created
              </div>
              <div className="divider divider-horizontal"></div>
              <div className="grid h-8 card hover:bg-gray-200 rounded-box place-items-center font-normal overflow-x-auto  sm:shrink sm:flex-grow pr-2">
                December 4, 2022
              </div>
            </li>
            <li className="flex w-full">
              <div className="grid h-8 w-12 flex-grow card place-items-center">
                <img src={IconDown} alt="down icon" className="w-6 h-6 mr-2" />
                Category
              </div>
              <div className="divider divider-horizontal"></div>
              <div className="grid h-8 flex-grow card hover:bg-base-200 rounded-box place-items-center font-normal overflow-x-auto w-16">
                <select
                  className="select select-bordered select-sm w-full max-w-xs"
                  name="category"
                  defaultValue={note?.category}
                >
                  <option disabled selected>
                    Category
                  </option>
                  <option value="Business">Business</option>
                  <option value="Personal">Personal</option>
                  <option value="Project">Project</option>
                </select>
              </div>
            </li>
          </ul>
          <textarea
            className="bg-gray-100 w-full min-h-screen focus:outline-0 text-lg indent-8 tracking-wide leading-relaxed sm:text-2xl lg:mb-6 lg:text-3xl resize-none hover:bg-gray-100"
            defaultValue={note?.description}
            name="description"
          />
          <input type="submit" value="Edit Note" className="btn btn-block" />
        </section>

        
      </form>
    </>
  );
};

export default NotePage;
