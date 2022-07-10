import { useMemo, useContext } from "react";

import { TaskContext } from "../context/task-context";

export const useTask = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return useMemo(() => context, [context]);
};
