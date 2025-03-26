import React from "react";
import Header from "../Other/Header";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-10">
      <Header />
      <div className="">
        <form className="text-white" action="">
          <div className=""><h3>Task Title </h3>
          <input placeholder="Make a UI design" type="text" /></div>
          <div className=""><h3>Description</h3>
          <textarea name="" id=""></textarea></div>
          <h3>Date</h3>
          <input type="date" />
          <h3>Assign to </h3>
          <input type="text" placeholder="Employee name" />
          <h3>Category </h3>
          <input type="text" placeholder="design, dev, etc" />
          <button>Create Task</button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
