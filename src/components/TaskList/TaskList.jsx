import React from "react";
import AcceptTask from "./AcceptTask";

const TaskList = ({data}) => {
  return (
    <div
      id="tasklist"
      className="h-[350px] overflow-x-auto flex item-center justify-start gap-5 py-5 w-full flex-nowrap mt-10"
    >

      <AcceptTask/>
    
    </div>
  );
};
export default TaskList;
