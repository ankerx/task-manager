import { ITask } from "../dashboard/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { EditTask } from "./EditTask";
import { ChangeEvent, useState } from "react";
import { useTask } from "../../context/useTask";

interface Props extends ITask {
  setShowEditModal: (showModal: boolean) => void;
  showEditModal: boolean;
  editTask: (task: ITask) => void;
}
export const Task = ({
  title,
  id,
  description,
  category,
  showEditModal,
  setShowEditModal,
  editTask,
}: Props) => {
  const { dispatch } = useTask();

  const [formData, setFormData] = useState({
    title: title,
    description: description,
  });
  const deleteTask = (id: string) => {
    dispatch({ type: "REMOVE_TASK", payload: id });
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex justify-between p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 my-5 ">
      <p>{title}</p>
      <div>
        <button className="mr-5" onClick={() => setShowEditModal(true)}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button className="" onClick={() => deleteTask(id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
      {showEditModal && (
        <EditTask
          setShowEditModal={setShowEditModal}
          formData={formData}
          editTask={editTask}
          id={id}
          category={category}
          handleChange={handleChange}
        />
      )}
    </div>
  );
};
