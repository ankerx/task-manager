import { ChangeEvent, useState } from "react";
import { CreateTask } from "../task/CreateTask";
import { ITask, Sections } from "./Section";
import { Task } from "../task/Task";
import { nanoid } from "nanoid";

interface IProps {
  tasks: ITask[];
  sectionName: Sections;
  setTasks: (task: any) => void;
}
export const Board = ({ tasks, sectionName, setTasks }: IProps) => {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const initialState = {
    id: "",
    title: "",
    description: "",
    category: sectionName,
  };
  const [taskFormData, setTaskFormData] = useState(initialState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setTaskFormData({
      ...taskFormData,
      [name]: value,
    });
  };

  const createTask = () => {
    const newTask = {
      id: nanoid(),
      title: taskFormData.title,
      description: taskFormData.description,
      category: sectionName,
    };
    setTasks((prevTasks: ITask[]) => [...prevTasks, newTask]);
    setTaskFormData(initialState);
    setShowModal(false);
  };

  const deleteTask = (id: string) => {
    setTasks((prevTasks: ITask[]) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };
  const editTask = (
    id: string,
    title: string,
    description: string,
    category: string
  ) => {
    const updatedTask = tasks.find((task) => task.id === id);

    if (!updatedTask) return;

    updatedTask.title = title;
    updatedTask.description = description;
    updatedTask.category = category;

    setTasks((prevTasks: ITask[]) => [...prevTasks, { updatedTask }]);

    setShowEditModal(false);
  };

  return (
    <div className=" bg-gray-200 w-full mt-10 mx-5 rounded-md min-h-[50vh]">
      <div className="mx-5 my-2">
        <div className="flex justify-between">
          <h2 className="text-2xl">{sectionName}</h2>
          <button className="text-2xl" onClick={() => setShowModal(true)}>
            +
          </button>
        </div>

        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              id={task.id}
              description={task.description}
              category={task.category}
              title={task.title}
              deleteTask={deleteTask}
              setShowEditModal={setShowEditModal}
              showEditModal={showEditModal}
              editTask={editTask}
            />
          );
        })}
      </div>
      {showModal && (
        <CreateTask
          setShowModal={setShowModal}
          handleChange={handleChange}
          taskFormData={taskFormData}
          createTask={createTask}
        />
      )}
    </div>
  );
};
