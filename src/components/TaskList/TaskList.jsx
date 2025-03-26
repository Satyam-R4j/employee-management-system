import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="h-[350px] overflow-x-auto flex item-center justify-start gap-5 py-5 w-full flex-nowrap mt-10"
    >
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-rose-700 font-bold py-1 px-2 rounded-xl text-black ">
            High
          </h3>
          <h4 className="text-sm">27 jan 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">
          Complete this video
        </h2>
        <p className="text-sm mt-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ullam rerum aliquam ut ad?</p>
      </div>
    </div>
  );
};
export default TaskList;
