"use client";

import { FaLock, FaGlobe } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { useState } from "react";
import Link from "next/link";

const CreateProject = () => {
  // Default to private
  const [privacy, setPrivacy] = useState("private");

  const handlePrivacyChange = (value) => {
    setPrivacy(value);
  };

  return (
    <div className="flex w-full h-full">
      <div className="flex flex-col gap-6 w-full h-full p-12 ml-32 mt-8 ">
        <h2 className="text-3xl font-bold">Create Project</h2>

        {/* Title */}
        <div className="flex gap-4 items-center">
          <h4 className="w-1/6 text-gray-700">Title</h4>
          <input
            type="text"
            placeholder="Enter title here..."
            className="border border-gray-400 
                         rounded-lg p-2 shadow-lg
                        hover:outline-none focus:outline-none
                        w-1/2"
          />
        </div>

        {/* Description */}
        <div className="flex gap-4 items-center">
          <h4 className="w-1/6 text-gray-700">Description</h4>
          <textarea
            rows="10"
            cols="58"
            placeholder="Enter description here..."
            className="border border-gray-400 mt-4 ml-[3rem]
                        rounded-lg p-2 shadow-lg focus:outline-none"
          />
        </div>

        {/* Project Privacy Dropdown */}
        <div className="flex gap-4 items-center">
          <h4 className="w-1/6 text-gray-700">Privacy Level</h4>
          <div className="relative inline-block text-left">
            <select
              className="border border-gray-400 rounded-lg p-3 shadow-lg focus:outline-none
                        
                          "
              value={privacy}
              onChange={(e) => handlePrivacyChange(e.target.value)}
            >
              <option value="private">
                <FaLock />
                Private
              </option>
              <option value="public">
                <FaGlobe className="mr-2" />
                Public
              </option>
            </select>
          </div>
        </div>

        {/* Create project button */}
        <button
          className="w-56 text-center text-white font-bold py-2 px-3 border rounded-lg shadow-lg
                    bg-blue-700 hover:bg-blue-500"
        >
          Create Project
        </button>
      </div>

      {/* Back Button */}
      <div className="flex flex-col gap-2 w-full h-full items-center justify-center">
        <Link href="/">
          <div className="flex gap-2 absolute top-4 left-4 cursor-pointer">
            <IoArrowBack className="text-2xl" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CreateProject;
