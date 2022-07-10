import { createContext, useMemo, useReducer } from "react";
import { taskReducer } from "./task-reducer";
import { State, Action } from "./types";

type taskContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};
type TaskProviderProps = { readonly children: React.ReactNode };

const initialState = { tasks: [] };

export const TaskContext = createContext<taskContextType>({
  state: initialState,
  dispatch: () => {},
});

const TaskProvider = ({ children }: TaskProviderProps) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export default TaskProvider;
