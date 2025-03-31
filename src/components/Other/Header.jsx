import React from "react";

const Header = ({data}) => {
  return (
    <div className="flex text-white items-end justify-between">
      <h1 className="text-2xl font-medium">
        hyyy!!! <br /><span className="text-4xl font-semibold" >{data?.firstName ? data.firstName : "root@kai"}🙌</span>
      </h1>
        <button className="bg-red-600 text-lg text-white px-5 py-2 rounded-2xl font-medium">Log out</button>
    </div>
  );
};

export default Header;
