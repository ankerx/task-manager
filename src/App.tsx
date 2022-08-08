import { Section } from "./components/dashboard/Section";
import TaskProvider from "./context/task-context";
export const App = () => {
  return (
    <TaskProvider>
      <>
        <Section />
      </>
    </TaskProvider>
  );
};
