import { useMutation, useQueryClient } from "@tanstack/react-query";
import IconDelete from "../assets/IconDelete.svg";
import { deleteTask } from "../data/tasksPetition";
import TaskCheck from "./TaskCheck";

const CardTask = ({ task }) => {
  const queryClient = useQueryClient()
  const delTaskMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
    },
  });
  return (
    <li className="task text-gray-700">
      <TaskCheck task={task}/>
      <span className="grow overflow-x-auto px-2">{task.task}</span>
      <img src={IconDelete} alt="delete icon" className="w-6 h-6 ml-2" onClick={() => delTaskMutation.mutate(task.id)}/>
    </li>
  );
};

export default CardTask;
