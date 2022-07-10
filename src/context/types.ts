import { ITask } from "../components/dashboard/Section";

export type Action =
  | { type: "ADD_TASK"; payload: ITask }
  | { type: "REMOVE_TASK"; payload: string };

export type State = {
  tasks: ITask[];
};
