import React from "react";
import Header from "../Other/Header";
import TaskListNumbers from "../Other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

function EmployeeDashboard() {
  return (
    <div className="p-10 bg-[#1C1C1C] ">
      <Header />
      <TaskListNumbers />
      <TaskList />
    </div>
  );
}

export default EmployeeDashboard;
