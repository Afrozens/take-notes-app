import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getTasks } from "../data/tasksPetition";
import CardTask from "./CardTask";

const TaskList = () => {
  const {
    isLoading,
    data: tasks,
    isError,
    error,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });
console.log(tasks)
  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error {error.message}</div>;

  return (
    <>
      <ul className="relative w-full">
        {tasks.map((task) => (
          <CardTask key={task.id} task={task} />
        ))}
      </ul>
    </>
  );
};

export default TaskList;
