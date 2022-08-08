import { createContext, useMemo, useReducer } from "react";
import { ITask } from "../components/dashboard/Section";
import { initialData } from "./initial-data";
import { taskReducer } from "./task-reducer";

type TaskProviderProps = { readonly children: React.ReactNode };

const initialState: ITask[] = initialData;

export const TaskContext = createContext<ITask[]>(initialState);

const TaskProvider = ({ children }: TaskProviderProps) => {
  const [state, dispatch] = useReducer(taskReducer, initialState as ITask[]);

  const value = useMemo(() => ({ state, dispatch }), [state]);
  // const value = { state, dispatch };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export default TaskProvider;
