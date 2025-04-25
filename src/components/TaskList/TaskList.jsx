import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  console.log(data);

  return (
    <div
      id="tasklist"
      className="h-[350px] overflow-x-auto flex item-center justify-start gap-5 py-5 w-full flex-nowrap mt-10"
    >

      {data.tasks.map(()=>{
        return console.log("hello world");
        
      })}

    </div>
  );
};
export default TaskList;
