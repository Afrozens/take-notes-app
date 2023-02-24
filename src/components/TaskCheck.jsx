import { useMutation, useQueryClient } from "@tanstack/react-query";
import IconCheck from "../assets/IconCheck.svg";
import { updateTask } from "../data/tasksPetition";

const TaskCheck = ({ task }) => {
  const queryClient = useQueryClient()
  const updateTaskMutation = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
    },
  });
  return (
    <label
      htmlFor={task.id}
      className={`w-6 h-6 flex justify-center items-center px-2 rounded-full border-gray-400 border relative ${
        task.isCompleted ? "bg-green-200" : "bg-white"
      }`}
    >
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={(e) => {
          updateTaskMutation.mutate({
            ...task,
            isCompleted: e.target.checked,
          });
        }}
        name="iscompleted"
        id={task.id}
        className="w-0 h-0"
      />
      <img
        src={IconCheck}
        alt="check icon"
        className={`${task.isCompleted ? "block" : "hidden"} ' w-4 h-4 absolute '`}
      />
    </label>
  );
};

export default TaskCheck;
