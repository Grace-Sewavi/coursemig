import "react";

const Sidebar = () => {
  return (
    <div className="w-full md:w-64 fixed md:relative mt-32 ">
      <ul className="space-y-4 px-10">
        <li className="flex items-center justify-between bg-white rounded-lg w-56 h-20 hover:shadow-md ">
          <span className="text-sm font-sans pl-3 font-bold">Programming for Data  <br/>Science with Python</span>
          <p className="w-1.5 h-20 bg-orange-500 rounded"></p>
        </li>
        <li className="flex items-center justify-between bg-white rounded-lg w-56 h-20 hover:shadow-md">
          <span className="text-sm font-sans pl-3 font-bold">Data Scientist</span>
          <p className="w-1.5 h-20 bg-blue-500 rounded"></p>
        </li>
        <li className="flex items-center justify-between bg-white rounded-lg w-56 h-20 hover:shadow-md ">
          <span className="text-sm font-sans pl-3 font-bold">Self-Driving Car Engineer</span>
          <p className="w-1.5 h-20 bg-black rounded"></p>
        </li>
        <li className="flex items-center justify-between bg-white rounded-lg w-56 h-20 hover:shadow-md">
          <span className="text-sm font-sans pl-3 font-bold">AI for Business Leaders</span>
          <p className="w-1.5 h-20 bg-teal-500 rounded"></p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;