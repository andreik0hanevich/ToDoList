import React from "react";
import Task from "./Task";
import Button from "./Button";

type PropsType = {
  title: string;
  tasks: TasksType[];
};

export type TasksType = {
  id: number;
  title: string;
  isDone: boolean;
};

const Todolist = (props: PropsType) => {
  const { title, tasks } = props;

  const mappedTasks = tasks.length ? (
    tasks.map((el, index) => {
      return <Task key={el.id} {...el} />;
    })
  ) : (
    <div>No Data</div>
  );

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>{mappedTasks}</ul>
      <div>
        <Button title="All"/>
        <Button title="Active"/>
        <Button title="Completed"/>
      </div>
    </div>
  );
};

export default Todolist;
