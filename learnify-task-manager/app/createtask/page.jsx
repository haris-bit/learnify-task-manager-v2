"use client";

// pages/createProject.js

import Link from "next/link";
import React from "react";
import { FaPlus, FaFileAlt, FaUpload } from "react-icons/fa";

// import icon for back button
import { IoArrowBack } from "react-icons/io5";
import Header from "../components/Header";
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";

const CreateProject = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Handle the uploaded file here
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="flex flex-col gap-4 w-full h-full items-center justify-center">
      <Header />
      <div className="mt-40 flex flex-col gap-2 w-full h-full items-center justify-center">
        <h2 className="text-3xl font-bold">Create a new project</h2>

        <p>How would you like to start?</p>

        <div className="flex mt-12 gap-20">
          <div className="flex flex-col items-center justify-center ">
            <Link href="/blankproject">
              <div className="border-2 border-gray-300 rounded-lg p-4 shadow-lg cursor-pointer ">
                <FaPlus className="text-2xl" />
              </div>
            </Link>
            <h3 className="mt-2">Blank Project</h3>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <Link href="/selecttemplate">
              <div className="border-2 border-gray-300 rounded-lg p-4 shadow-lg cursor-pointer">
                <FaFileAlt className="text-2xl" />
              </div>
            </Link>
            <h3 className="mt-2">Use a template</h3>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <div
              {...getRootProps()}
              className="border-2 border-gray-300 rounded-lg p-4 shadow-lg cursor-pointer"
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the file here</p>
              ) : (
                <FaUpload className="text-2xl" />
              )}
            </div>
            <h3 className="mt-2">Upload a spreadsheet</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
