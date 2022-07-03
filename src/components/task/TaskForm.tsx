import React from "react";
import { ITask } from "../dashboard/Section";

interface Props {
  taskFormData: ITask;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TaskForm = ({ taskFormData, handleChange }: Props) => {
  return (
    <div className="relative p-6 flex-auto">
      <form className="flex text-center flex-col">
        <label>Title</label>
        <input
          name="title"
          type="text"
          value={taskFormData.title}
          placeholder="Title"
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md"
        />

        <label>Description</label>
        <input
          type="text"
          name="description"
          value={taskFormData.description}
          onChange={handleChange}
          placeholder="Description"
          className="border border-gray-300 p-2 rounded-md"
        />
      </form>
    </div>
  );
};
