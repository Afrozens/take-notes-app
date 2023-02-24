import { useMutation, useQueryClient } from "@tanstack/react-query";
import { v4 as uuid } from "uuid";
import { useContext, useState } from "react";
import { setTask } from "../data/tasksPetition";
import IconAdd from "../assets/IconAdd.svg";

const FormTodoTask = () => {
  const [form, setForm] = useState({ task: "" });

  const queryClient = useQueryClient();
  const addTaskMutation = useMutation({
    mutationFn: setTask,
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
    },
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      ...form,
      isCompleted: false,
      id: uuid(),
    };

    if (form.task.length > 0) {
      addTaskMutation.mutate(newTask);
      console.log(form);
    }

    setForm({ task: "" });
  };

  return (
    <form className="form-control w-full" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          placeholder="Search…"
          className="input input-bordered text-gray-700"
          name="task"
          onChange={handleChange}
        />
        <button className="btn btn-square">
          <img src={IconAdd} alt="add icon" className="h-6 w-6" />
        </button>
      </div>
    </form>
  );
};
export default FormTodoTask;
