import { ITask } from "../dashboard/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { EditTask } from "./EditTask";
import { ChangeEvent, useState } from "react";

interface Props extends ITask {
  deleteTask: (id: string) => void;
  setShowEditModal: (showModal: boolean) => void;
  showEditModal: boolean;
  editTask: (
    id: string,
    title: string,
    description: string,
    category: string
  ) => void;
}
export const Task = ({
  title,
  id,
  description,
  category,
  deleteTask,
  showEditModal,
  setShowEditModal,
  editTask,
}: Props) => {
  const [formData, setFormData] = useState({
    title: title,
    description: description,
  });

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
