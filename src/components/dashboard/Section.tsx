import { nanoid } from "nanoid";
import { useState } from "react";
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
  const tasksData: ITask[] = [
    {
      id: nanoid(),
      title: "Design app",
      description: "very fast",
      category: "to do",
    },
    {
      id: nanoid(),
      title: "Write tests",
      description: "important",
      category: "review",
    },
    {
      id: nanoid(),
      title: "Make a coffee",
      description: "with milk",
      category: "in progress",
    },
  ];

  const [tasks, setTasks] = useState(tasksData);

  const addTask = (tasks: ITask) => {
    setTasks((prevTasks) => [...prevTasks, tasks]);
  };

  const deleteTask = (id: string) => {
    setTasks((prevTasks: ITask[]) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };

  return (
    <div className="text-center mt-5">
      <h1 className="text-3xl text-blue-600">Task manager app</h1>

      <div className="flex justify-center gap-5 ">
        {sections.map((section, index) => {
          const filteredData: ITask[] = tasks.filter(
            (task) => task.category === section
          );
          console.log(filteredData);

          return (
            <Board
              key={index}
              sectionName={section}
              tasks={filteredData}
              addTask={addTask}
              deleteTask={deleteTask}
              setTasks={setTasks}
            />
          );
        })}
      </div>
    </div>
  );
};
