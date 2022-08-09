import { useTask } from "../../context/useTask";
import { Board } from "./Board";

export const sections = ["to do", "in progress", "review", "done"] as const;
export type Sections = typeof sections[number];

export interface ITask {
  id: string;
  title: string;
  description: string;
  category: string;
}
export const Section = () => {
  const { state: data, dispatch } = useTask();

  const deleteTask = (id: string) => {
    dispatch({ type: "REMOVE_TASK", payload: id });
  };

  return (
    <div className="text-center mt-5">
      <h1 className="text-3xl text-blue-600">Task manager app</h1>

      <div className="flex justify-center gap-5 ">
        {sections.map((section, index) => {
          const filteredData: ITask[] = data.filter(
            (task) => task.category === section
          );

          return (
            <Board
              key={index}
              sectionName={section}
              tasks={filteredData}
              deleteTask={deleteTask}
            />
          );
        })}
      </div>
    </div>
  );
};
