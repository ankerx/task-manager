import { ChangeEvent, SetStateAction, useContext, useState } from "react";
import { CreateTask } from "../task/CreateTask";
import { ITask, Sections } from "./Section";
import { Task } from "../task/Task";
import { nanoid } from "nanoid";
import { useTask } from "../../context/useTask";
import { TaskContext } from "../../context/task-context";
interface IProps {
  tasks: ITask[];
  sectionName: Sections;
  addTask: (tasks: ITask) => void;
  deleteTask: (id: string) => void;
  setTasks: React.Dispatch<SetStateAction<ITask[]>>;
}
export const Board = ({
  tasks,
  sectionName,
  addTask,
  deleteTask,
  setTasks,
}: IProps) => {
  const { state: data, dispatch: saveTask } = useTask();
  console.log(data);

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

    // addTask(newTask);
    saveTask(newTask);
    setTaskFormData(initialState);

    setShowModal(false);
  };

  const editTask = (
    id: string,
    title: string,
    description: string,
    category: string
  ) => {
    setTasks((prevState) => {
      const newState = prevState.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            title: title,
            description: description,
            category: category,
          };
        }
        return task;
      });
      return newState;
    });
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
        {tasks.length === 0 && (
          <div
            className="flex justify-between p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 my-5 cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <button>Add first task</button>
          </div>
        )}
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
