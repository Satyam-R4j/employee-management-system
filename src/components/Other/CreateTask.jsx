import React, { useState } from "react";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");
  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setNewTask({
      taskTitle,
      taskDescription,
      taskDate,
      asignTo,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });
    console.log(taskTitle, taskDescription, taskDate, asignTo, category);
    const data = JSON.parse(localStorage.getItem("employees"));
    console.log(data);

    data.forEach(function (elem) {
      if (asignTo === elem.firstName) {
        elem.tasks.push(newTask);
        console.log(elem);
      }
    });

    localStorage.setItem("employees", JSON.stringify(data));

    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAsignTo("");
    setCategory("");
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={(e) => submitHandler(e)}
        className="text-white flex flex-wrap w-full   items-start justify-between"
        action=""
      >
        <div className="w-1/2">
          <div className="">
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title </h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              placeholder="Make a UI design"
              type="text"
            />
          </div>
          <div
            className="
     "
          >
            {" "}
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
            />
          </div>
          <div className="">
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to </h3>
            <input
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div className="">
            <h3 className="text-sm text-gray-300 mb-0.5">Category </h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="design, dev, etc"
            />
          </div>
        </div>

        <div className="w-1/2">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            name=""
            id=""
            cols={30}
            rows={10}
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded-xl  text-md mt-4 w-full font-bold">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
