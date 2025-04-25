import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[350px] overflow-x-auto flex item-center justify-start gap-5 py-5 w-full flex-nowrap mt-10"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} />;
        }
        if (elem.NewTask) {
          return <NewTask key={idx} />;
        }
        if (elem.completed) {
          return <CompleteTask key={idx} />;
        }
        if (elem.failed) {
          return <FailedTask key={idx} />;
        }
      })}
    </div>
  );
};
export default TaskList;
