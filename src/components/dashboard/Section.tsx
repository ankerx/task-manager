import { useState } from "react";
import { Board } from "./Board";

const sections = ["to do", "in progress", "review", "done"] as const;
export type Sections = typeof sections[number];

export interface ITask {
  id: string;
  title: string;
  description: string;
  category: string;
}
export const Section = () => {
  const tasksData: ITask[] = [
    {
      id: "1",
      title: "Design app",
      description: "very fast",
      category: "to do",
    },
    {
      id: "2",
      title: "Write tests",
      description: "important",
      category: "review",
    },
    {
      id: "3",
      title: "Make a coffee",
      description: "with milk",
      category: "in progress",
    },
  ];

  const [tasks, setTasks] = useState(tasksData);

  return (
    <div className="text-center mt-5">
      <h1 className="text-3xl text-blue-600">Task manager app</h1>

      <div className="flex justify-center gap-5">
        {sections.map((section, index) => {
          const filteredData: ITask[] = tasks.filter(
            (task) => task.category === section
          );

          return (
            <Board
              key={index}
              sectionName={section}
              tasks={filteredData}
              setTasks={setTasks}
            />
          );
        })}
      </div>
    </div>
  );
};
