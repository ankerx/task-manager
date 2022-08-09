import { nanoid } from "nanoid";
import { ITask } from "../components/dashboard/Section";
import { Action } from "./types";

export const taskReducer = (state: ITask[], action: Action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: nanoid(),
          title: action.payload.title,
          description: action.payload.description,
          category: action.payload.category,
        },
      ];
    case "REMOVE_TASK":
      return [...state.filter((task) => task.id !== action.payload)];
    case "EDIT_TASK":
      const updatedTask = action.payload;

      const updatedTasks = state.map((task) => {
        if (task.id === updatedTask.id) {
          return updatedTask;
        }
        return task;
      });

      return updatedTasks;

    default:
      throw new Error(`Unhandled action type`);
  }
};
