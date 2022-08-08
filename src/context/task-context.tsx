import { createContext, useMemo, useReducer } from "react";
import { ITask } from "../components/dashboard/Section";
import { initialData } from "./initial-data";
import { taskReducer } from "./task-reducer";
import { Action } from "./types";

type TaskProviderProps = { readonly children: React.ReactNode };
type Dispatch = (action: Action) => void;
const initialState: ITask[] = initialData;

export const TaskContext = createContext<
  { state: ITask[]; dispatch: Dispatch } | undefined
>(undefined);

const TaskProvider = ({ children }: TaskProviderProps) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export default TaskProvider;
