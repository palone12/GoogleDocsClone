import React from "react";

const Navbar = () => {
  return (
    <div>
      <img src=""></img>
      <div className="flex flex-row">
        <input placeholder="FileName" />
        <div className="">
          <ul className="flex space-x-2">
            <li>File</li>
            <li>Edit</li>
            <li>View</li>
            <li>Insert</li>
            <li>Format</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
