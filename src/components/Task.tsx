import React from "react";
import { TasksType } from "./Todolist";

const Task = ({ isDone, title }: TasksType) => {
  return (
    <li>
      <input type="checkbox" checked={isDone} /> <span>{title}</span>
    </li>
  );
};

export default Task;
