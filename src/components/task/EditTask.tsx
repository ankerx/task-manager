import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, useState } from "react";
import { EditTaskForm } from "./EditTaskForm";
import { Sections } from "../dashboard/Section";

export type FormData = {
  title: string;
  description: string;
};

interface Props {
  setShowEditModal: (showModal: boolean) => void;
  id: string;
  formData: FormData;
  category: string;
  editTask: (
    id: string,
    title: string,
    description: string,
    category: string
  ) => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const EditTask = ({
  setShowEditModal,
  formData,
  handleChange,
  editTask,
  id,
  category,
}: Props) => {
  const sections: Sections[] = ["to do", "in progress", "review", "done"];

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  const [selectedValue, setSelectedValue] = useState(category);
  return (
    <>
      <div className="justify-center items-center flex flex-grow overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <button
            onClick={() => setShowEditModal(false)}
            className="absolute top-1 right-2 text-xl  text-red-500 z-50"
          >
            <FontAwesomeIcon icon={faClose} className="text-2xl" />
          </button>
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Edit task</h3>
            </div>

            <EditTaskForm
              category={category}
              formData={formData}
              handleChange={handleChange}
              sections={sections}
              handleSelectChange={handleSelectChange}
            />
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                onClick={() =>
                  editTask(
                    id,
                    formData.title,
                    formData.description,
                    selectedValue
                  )
                }
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Save task
              </button>
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowEditModal(false)}
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
