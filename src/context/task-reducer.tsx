import { nanoid } from "nanoid";
import { Action, State } from "./types";

export const taskReducer = ({ tasks }: State, action: Action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...tasks,
        {
          id: nanoid(),
          title: action.payload.title,
          description: action.payload.description,
          category: action.payload.category,
        },
      ];
    case "REMOVE_TASK":
      return [...tasks.filter((task) => task.id !== action.payload)];
    default:
      return tasks;
  }
};
