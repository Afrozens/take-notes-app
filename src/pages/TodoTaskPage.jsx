import React from "react";
import FormTodoTask from "../components/FormTodoTask";
import TaskList from "../components/TaskList";

const TodoTaskPage = () => {
  return (
    <div className="w-4/5 sm:w-3/5 flex flex-col items-center py-6 ">
      <FormTodoTask />
      <h2 className="font-semibold uppercase mt-4 self-start ">to do</h2>
      <TaskList />
    </div>
  );
};

export default TodoTaskPage;
