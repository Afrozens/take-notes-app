import IconNotification from "../assets/IconNotification.svg";
import { useQuery } from "@tanstack/react-query";
import { getNotes } from "../data/notesPetition";

const Notification = () => {
  const { data: notes } = useQuery({
    queryKey: ["notesLength"],
    queryFn: getNotes,
  });
  return (
    <>
      <span className="indicator-item badge badge-info">{notes && notes.length}</span>
      <img
        src={IconNotification}
        alt="notification icon"
        className="w-8 h-8 cursor-pointer"
      />
    </>
  );
};

export default Notification;
