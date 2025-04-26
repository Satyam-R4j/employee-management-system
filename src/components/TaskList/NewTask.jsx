  import React from "react";
  
  const NewTask = ({data}) => {
    return <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl">
    <div className="flex justify-between items-center">
      <h3 className="bg-red-600 font-bold py-1 px-2 rounded-xl text-black ">
        {data.category}
      </h3>
      <h4 className="text-sm">{data.taskDate}</h4>
    </div>
    <h2 className="mt-5 text-2xl font-semibold">Make this video</h2>
    <p className="text-sm mt-2">
      {data.taskDescription}
    </p>
    <div className=" mt-2 ">
      <button className="w-full">New Task</button>
    </div>
  </div>
  };
  
  export default NewTask;
  