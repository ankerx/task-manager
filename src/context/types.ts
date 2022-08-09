import { ITask } from "../components/dashboard/Section";

export type Action =
  | { type: "ADD_TASK"; payload: ITask }
  | { type: "REMOVE_TASK"; payload: string }
  | { type: "EDIT_TASK"; payload: ITask };
