import React from "react";
import { FormData } from "./EditTask";

interface Props {
  formData: FormData;
  category: string;
  sections: string[];
  handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const EditTaskForm = ({
  formData,
  handleChange,
  category,
  handleSelectChange,
  sections,
}: Props) => {
  return (
    <div className="relative p-6 flex-auto">
      <form className="flex text-center flex-col">
        <label>Title</label>
        <input
          name="title"
          type="text"
          value={formData.title}
          placeholder="Title"
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md"
        />

        <label>Description</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="border border-gray-300 p-2 rounded-md"
        />
        <label>Category</label>
        <select
          className="border border-gray-300 p-2 rounded-md"
          onChange={handleSelectChange}
          defaultValue={category}
        >
          {sections.map((section: string, index) => {
            return (
              <option value={section} key={index}>
                {section}
              </option>
            );
          })}
        </select>
      </form>
    </div>
  );
};
