import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent } from "react";
import { ITask } from "../dashboard/Section";
import { TaskForm } from "./TaskForm";

interface Props {
  setShowModal: (showModal: boolean) => void;
  taskFormData: ITask;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  createTask: () => void;
}

export const CreateTask = ({
  setShowModal,
  handleChange,
  taskFormData,
  createTask,
}: Props) => {
  return (
    <>
      <div className="justify-center items-center flex flex-grow overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-1 right-2 text-xl  text-red-500 z-50"
          >
            <FontAwesomeIcon icon={faClose} className="text-2xl" />
          </button>
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Add task</h3>
            </div>

            <TaskForm taskFormData={taskFormData} handleChange={handleChange} />
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                onClick={createTask}
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Add task
              </button>
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
