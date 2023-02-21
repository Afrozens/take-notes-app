import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getNotes } from "../data/notesPetition";
import CardNote from "../components/CardNote";
import CategoryFilter from "../components/CategoryFilter";
import { useContext } from "react";
import CategoryFiltersContext from "../contexts/CategoryFiltersContext";

const HomePage = () => {
  const { category, selectFilter } = useContext(CategoryFiltersContext);
  const {
    isLoading,
    data: notes,
    isError,
    error,
  } = useQuery({
    queryKey: ["notes"],
    queryFn: getNotes,
    select: (data) => selectFilter(data),
  });
  console.log(notes);
  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error {error.message}</div>;

  return (
    <>
      <div className="w-full pt-6 pb-4 px-4 flex gap-2 items-center justify-center sm:justify-between">
        <CategoryFilter />

        <div className="hidden sm:block">
          <Link
            to="/notes/add"
            className="text-lg font-semibold text-[#ADC178] hover:underline hover:decoration-[#ADC178]"
          >
            Add new note
          </Link>
        </div>
      </div>
      <div className="w-full py-6 px-4 grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-2 lg:grid-cols-4 lg:gap-2 xl:gap-4">
        {notes.map((note) => (
          <CardNote key={note.id} note={note} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
