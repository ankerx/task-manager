import { nanoid } from "nanoid";

export const initialData = [
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
