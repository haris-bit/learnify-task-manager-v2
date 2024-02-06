// import icons for home, all tasks, create task and create project
import { FaHome } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { motion } from "framer-motion";

import Link from "next/link";

const Header = () => {
  return (
    <div
      className="flex w-full h-16 items-center justify-around shadow-sm
            shadow-black
            "
    >
      {/* div for logo */}
      <Link href="/" className="text-xl font-bold">
        Lernify
      </Link>
      {/* div for nav */}
      <div className="flex gap-4 ">
        <Link
          href="/"
          className="mx-2 flex justify-center items-center gap-1
        hover:text-gray-500 transition duration-300 ease-in-out
        "
        >
          <FaHome />
          Home
        </Link>

        <Link href="/alltasks">
          <div
            className="mx-2 mx-2 flex justify-center items-center gap-1
                  hover:text-gray-500 transition duration-300 ease-in-out

          "
          >
            <FaTasks />
            All Tasks
          </div>
        </Link>

        <Link
          href="/createtask"
          className="mx-2 mx-2 flex justify-center items-center gap-1
                  hover:text-gray-500 transition duration-300 ease-in-out

          "
        >
          <FaPlus />
          Create Task
        </Link>

        <Link
          href="/createproject"
          className="mx-2 mx-2 flex justify-center items-center gap-1
                  hover:text-gray-500 transition duration-300 ease-in-out

          "
        >
          <FaProjectDiagram />
          Create Project
        </Link>
      </div>
      {/* Div for User Profile */}
    </div>
  );
};

export default Header;
