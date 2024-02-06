"use client";

// pages/tasks.js
import React from "react";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import Header from "../components/Header";
import { useState } from "react";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Tasks = () => {
  const [assignee, setAssignee] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [privacy, setPrivacy] = useState("private");
  const [selectedTask, setSelectedTask] = useState(null);
  const [sortBy, setSortBy] = useState("dueDate");
  const [sortOrder, setSortOrder] = useState("asc");
  const [sets, setSets] = useState([]);
  const [reportModalIsOpen, setReportModalIsOpen] = useState(false);

  // New state variables for the Modal fields
  const [editedAssignee, setEditedAssignee] = useState("");
  const [editedDueDate, setEditedDueDate] = useState("");
  const [editedProject, setEditedProject] = useState("");
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedProjectedHours, setEditedProjectedHours] = useState("");
  const [editedActualHours, setEditedActualHours] = useState("");

  // Pagination variables
  const [currentPage, setCurrentPage] = useState(0);
  const [tasksPerPage, setTasksPerPage] = useState(5);

  // Report Modal variables
  const [searchInput, setSearchInput] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchResult, setSearchResult] = useState(null);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      assignee: "Zak Nawaz",
      dueDate: "2024-01-31",
      project: "Project A",
      title: "Task 1",
      description: "Description of Task 1",
      projectedHours: 10,
      actualHours: 8,
      subtasks: "Subtask 1, Subtask 2",
      collaborators: "John Doe, Jane Smith",
      comments: "Comment 1, Comment 2",
    },
    {
      id: 2,
      assignee: "Jack",
      dueDate: "2024-02-15",
      project: "Independent",
      title: "Task 2",
      description: "Description of Task 2",
      projectedHours: 8,
      actualHours: 6,
      subtasks: "Subtask 1",
      collaborators: "Alice, Bob",
      comments: "Comment 3, Comment 4",
    },
    {
      id: 3,
      assignee: "John Smith",
      dueDate: "2023-03-01",
      project: "Project C",
      title: "Task 3",
      description: "Description of Task 3",
      projectedHours: 12,
      actualHours: 10,
      subtasks: "Subtask 1, Subtask 2, Subtask 3",
      collaborators: "Mary, James",
      comments: "Comment 5",
    },
    {
      id: 4,
      assignee: "Emily",
      dueDate: "2024-03-15",
      project: "Project B",
      title: "Task 4",
      description: "Description of Task 4",
      projectedHours: 15,
      actualHours: 12,
      subtasks: "Subtask 1, Subtask 2",
      collaborators: "David, Emma",
      comments: "Comment 6, Comment 7",
    },
    {
      id: 5,
      assignee: "Alex",
      dueDate: "2024-04-01",
      project: "Project D",
      title: "Task 5",
      description: "Description of Task 5",
      projectedHours: 8,
      actualHours: 6,
      subtasks: "Subtask 1",
      collaborators: "Sophia, William",
      comments: "Comment 8, Comment 9",
    },
    {
      id: 6,
      assignee: "Grace",
      dueDate: "2023-05-12",
      project: "Project E",
      title: "Task 6",
      description: "Description of Task 6",
      projectedHours: 10,
      actualHours: 8,
      subtasks: "Subtask 1, Subtask 2, Subtask 3",
      collaborators: "Liam, Olivia",
      comments: "Comment 10",
    },
    {
      id: 7,
      assignee: "William",
      dueDate: "2023-06-25",
      project: "Independent",
      title: "Task 7",
      description: "Description of Task 7",
      projectedHours: 12,
      actualHours: 10,
      subtasks: "Subtask 1",
      collaborators: "Sophia, Ethan",
      comments: "Comment 11, Comment 12",
    },
    {
      id: 8,
      assignee: "Emma",
      dueDate: "2023-07-10",
      project: "Project F",
      title: "Task 8",
      description: "Description of Task 8",
      projectedHours: 8,
      actualHours: 6,
      subtasks: "Subtask 1, Subtask 2",
      collaborators: "David, Olivia",
      comments: "Comment 13",
    },
    {
      id: 9,
      assignee: "Ethan",
      dueDate: "2024-08-20",
      project: "Project G",
      title: "Task 9",
      description: "Description of Task 9",
      projectedHours: 15,
      actualHours: 12,
      subtasks: "Subtask 1, Subtask 2, Subtask 3",
      collaborators: "Sophia, William",
      comments: "Comment 14, Comment 15",
    },
    {
      id: 10,
      assignee: "Olivia",
      dueDate: "2024-09-05",
      project: "Project H",
      title: "Task 10",
      description: "Description of Task 10",
      projectedHours: 10,
      actualHours: 8,
      subtasks: "Subtask 1",
      collaborators: "David, Emma",
      comments: "Comment 16, Comment 17",
    },
    {
      id: 4,
      assignee: "Alice",
      dueDate: "2023-04-15",
      project: "Project B",
      title: "Task 4",
      description: "Description of Task 4",
      projectedHours: 8,
      actualHours: 6,
      subtasks: "Subtask 1, Subtask 2",
      collaborators: "Bob, Eve",
      comments: "Comment 6, Comment 7",
    },
    {
      id: 11,
      assignee: "Eva",
      dueDate: "2023-05-01",
      project: "Project A",
      title: "Task 5",
      description: "Description of Task 5",
      projectedHours: 12,
      actualHours: 10,
      subtasks: "Subtask 1, Subtask 2, Subtask 3",
      collaborators: "John, Mary",
      comments: "Comment 8",
    },
    {
      id: 12,
      assignee: "Sam",
      dueDate: "2023-06-15",
      project: "Independent",
      title: "Task 6",
      description: "Description of Task 6",
      projectedHours: 10,
      actualHours: 8,
      subtasks: "Subtask 1",
      collaborators: "Charlie, David",
      comments: "Comment 9, Comment 10",
    },
    {
      id: 13,
      assignee: "Sophie",
      dueDate: "2023-07-01",
      project: "Project C",
      title: "Task 7",
      description: "Description of Task 7",
      projectedHours: 15,
      actualHours: 12,
      subtasks: "Subtask 1, Subtask 2, Subtask 3, Subtask 4",
      collaborators: "Emma, Frank",
      comments: "Comment 11, Comment 12",
    },
    {
      id: 14,
      assignee: "Tom",
      dueDate: "2023-08-15",
      project: "Project B",
      title: "Task 8",
      description: "Description of Task 8",
      projectedHours: 8,
      actualHours: 6,
      subtasks: "Subtask 1, Subtask 2",
      collaborators: "Grace, Harry",
      comments: "Comment 13",
    },
    {
      id: 15,
      assignee: "Victoria",
      dueDate: "2023-09-01",
      project: "Independent",
      title: "Task 9",
      description: "Description of Task 9",
      projectedHours: 12,
      actualHours: 10,
      subtasks: "Subtask 1, Subtask 2, Subtask 3",
      collaborators: "Ian, Julie",
      comments: "Comment 14, Comment 15",
    },
    {
      id: 16,
      assignee: "William",
      dueDate: "2023-10-15",
      project: "Project A",
      title: "Task 10",
      description: "Description of Task 10",
      projectedHours: 10,
      actualHours: 8,
      subtasks: "Subtask 1",
      collaborators: "Karen, Liam",
      comments: "Comment 16, Comment 17",
    },
  ]);

  const [userReport, setUserReport] = useState([
    {
      id: 1,
      name: "Zak Nawaz",
      tasksCompleted: 10,
      estimatedHours: 100,
      actualHours: 80,
    },
    {
      id: 2,
      name: "Jack",
      tasksCompleted: 8,
      estimatedHours: 80,
      actualHours: 60,
    },
    {
      id: 3,
      name: "John Smith",
      tasksCompleted: 12,
      estimatedHours: 120,
      actualHours: 100,
    },
  ]);

  const toggleModal = (task) => {
    setSelectedTask(task);
    setModalIsOpen(!modalIsOpen);
  };

  // Function to sort tasks based on criteria
  const sortTasks = () => {
    const sortedTasks = [...tasks].sort((a, b) => {
      // You can customize the sorting logic based on your needs
      if (sortOrder === "asc") {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      } else {
        return a[sortBy] < b[sortBy] ? 1 : -1;
      }
    });

    return sortedTasks;
  };

  // Function to handle sorting change
  const handleSortChange = (criteria) => {
    if (sortBy === criteria) {
      // If clicking on the same column, toggle the sort order
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      // If clicking on a different column, set the new sort criteria
      setSortBy(criteria);
      setSortOrder("asc");
    }
  };

  // Render sorted tasks
  const sortedTasks = sortTasks();

  // ... (existing code)

  // Function to handle changes in Modal fields
  const handleFieldChange = (field, value) => {
    switch (field) {
      case "assignee":
        setEditedAssignee(value);
        break;
      case "dueDate":
        setEditedDueDate(value);
        break;
      case "project":
        setEditedProject(value);
        break;
      case "title":
        setEditedTitle(value);
        break;
      case "description":
        setEditedDescription(value);
        break;
      case "projectedHours":
        setEditedProjectedHours(value);
        break;
      case "actualHours":
        setEditedActualHours(value);
        break;
      default:
        break;
    }
  };

  // Function to update the task when "Update Task" button is clicked
  const updateTask = () => {
    // Find the index of the selected task in the tasks array
    const taskIndex = tasks.findIndex((task) => task.id === selectedTask.id);

    toast.success("Task updated successfully!");

    // Close the Modal
    setModalIsOpen(false);
  };

  const deleteTask = () => {
    // Find the index of the selected task in the tasks array
    const taskIndex = tasks.findIndex((task) => task.id === selectedTask.id);
    // Remove the task from the tasks array
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== selectedTask.id)
    );
    // Close the Modal
    setModalIsOpen(false);
    toast.success("Task deleted successfully!");
  };

  // Handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Calculate the start and end indices for the tasks to be displayed on the current page
  const startIndex = currentPage * tasksPerPage;
  const endIndex = startIndex + tasksPerPage;
  const tasksToShow = sortedTasks.slice(startIndex, endIndex);
  const pageCount = Math.ceil(sortedTasks.length / tasksPerPage);

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchClick = async () => {
    // Simulate loading
    setSearchLoading(true);

    // Simulate searching (replace this with actual search logic)
    setTimeout(() => {
      // search the userReport array for the user with the name entered in the search input
      const result = userReport.find((user) => user.name === searchInput);
      setSearchResult(result);
      // if user is not found, show error toast
      if (!result) {
        toast.error("User not found!");
      }
      setSearchLoading(false);
    }, 2000);
  };

  const generatePDF = async () => {
    const modalContent = document.getElementById("report-modal-content");

    if (!modalContent) {
      console.error("Report modal content not found");
      return;
    }

    try {
      const canvas = await html2canvas(modalContent);
      const pdf = new jsPDF("p", "mm", "a4");
      const imgData = canvas.toDataURL("image/png");

      pdf.addImage(imgData, "PNG", 10, 10, 190, 270);
      pdf.save("report.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div>
      <Header />
      <h2 className="text-3xl font-bold mt-4 ml-4 ">Tasks</h2>
      <div className="ml-6 mt-4 flex flex-row gap-2 items-center">
        Sort by:
        <select
          className="border border-gray-400 rounded-lg p-2 shadow-lg cursor-pointer"
          onChange={(e) => handleSortChange(e.target.value)}
        >
          <option value="dueDate">Due Date</option>
          <option value="assignee">Assignee</option>
          <option value="project">Project</option>
          <option value="projectedHours">Projected Hours</option>
          <option value="actualHours">Actual Hours</option>
        </select>
        <button
          className="text-gray-700 hover:text-gray-500 ml-2"
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        >
          {sortOrder === "asc" ? "↑" : "↓"}
        </button>
      </div>
      <div className="flex flex-row absolute top-28 right-6">
        <Link href="/createtask">
          <button className="flex gap-2 bg-blue-500 text-white p-2 rounded-lg shadow-lg mt-4 ml-4 cursor-pointer">
            <FaPlus className="text-xl" />
            Create Task
          </button>
        </Link>

        {/* Here add Modal for report generation */}
        <button
          className="flex gap-2 bg-blue-500 text-white p-2 rounded-lg shadow-lg mt-4 ml-4 cursor-pointer"
          onClick={() => setReportModalIsOpen(true)}
        >
          <FaFileDownload className="text-xl" />
          Generate Report
        </button>
      </div>
      <div className="p-4 rounded-lg shadow-lg">
        <table className="w-full table-fixed">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="w-1/10 p-0.5">Assignee</th>
              <th className="w-1/10 p-0.5">Due Date</th>
              <th className="w-1/10 p-0.5">Project</th>
              <th className="w-1/10 p-0.5">Title</th>
              <th className="w-2/10 p-0.5">Description</th>
              <th className="w-1/10 p-0.5">Projected Hours</th>
              <th className="w-1/10 p-0.5">Actual Hours</th>
              <th className="w-2/10 p-0.5">Subtasks</th>
              <th className="w-1/10 p-0.5">Collaborators</th>
              <th className="w-2/10 p-0.5">Comments</th>
            </tr>
          </thead>
          <tbody>
            {tasksToShow.map((task) => (
              <tr key={task.id}>
                {/* I want when I click on this cell, i want to make this editable */}
                <td className="border border-gray-200 p-2">
                  <input
                    type="text"
                    value={task.assignee}
                    className="focus:outline-none w-full "
                    onClick={() => toggleModal(task)}
                  />
                </td>
                <td className="border border-gray-200 p-2">
                  <input
                    type="text"
                    value={task.dueDate}
                    className="focus:outline-none w-full "
                    onClick={() => toggleModal(task)}
                  />
                </td>
                <td className="border border-gray-200 p-2">
                  <input
                    type="text"
                    value={task.project}
                    className="focus:outline-none w-full "
                    onClick={() => toggleModal(task)}
                  />
                </td>
                <td className="border border-gray-200 p-2">
                  <input
                    type="text"
                    value={task.title}
                    className="focus:outline-none w-full "
                    onClick={() => toggleModal(task)}
                  />
                </td>
                <td className="border border-gray-200 p-2">
                  <input
                    type="text"
                    placeholder="Enter description here..."
                    className="focus:outline-none w-full"
                    // in the value, we are using the description from the task object. only want to show the some part of the description
                    // we are using substring to show only 20 characters
                    value={task.description.substring(0, 40)}
                    onClick={() => toggleModal(task)}
                  />
                </td>
                <td className="border border-gray-200 p-2">
                  <input
                    type="text"
                    value={task.projectedHours}
                    className="focus:outline-none w-full "
                    onClick={() => toggleModal(task)}
                  />
                </td>
                <td className="border border-gray-200 p-2">
                  <input
                    type="text"
                    value={task.actualHours}
                    className="focus:outline-none w-full "
                    onClick={() => toggleModal(task)}
                  />
                </td>
                <td className="border border-gray-200 p-2">
                  <input
                    type="text"
                    value={task.subtasks}
                    className="focus:outline-none w-full "
                    onClick={() => toggleModal(task)}
                  />
                </td>
                <td className="border border-gray-200 p-2">
                  <input
                    type="text"
                    value={task.collaborators}
                    className="focus:outline-none w-full "
                    onClick={() => toggleModal(task)}
                  />
                </td>
                <td className="border border-gray-200 p-2">
                  <input
                    type="text"
                    value={task.comments}
                    className="focus:outline-none w-full "
                    onClick={() => toggleModal(task)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Show modal here */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="absolute top-[6rem] right-0 transform
                bg-[#f5f5f5] rounded-lg shadow-2xl p-6 w-[30rem]
                transition duration-1000 ease-in-out mr-4   
                flex flex-col gap-4
                "
        overlayClassName="absolute top-0 left-0 right-0 bottom-0 bg-white bg-opacity-20
                transition duration-1000 ease-in-out
                shadow-2xl
              "
      >
        {/* Close button */}
        <IoClose
          className="absolute top-4 right-4 text-2xl cursor-pointer
                    hover:text-gray-500 transition duration-1000 ease-in-out
                    "
          onClick={() => setModalIsOpen(false)}
        />

        {/* Title */}
        <h2 className="text-2xl font-bold">Edit Task</h2>
        <div className="flex flex-col">
          {/* Title */}
          <div className="flex gap-4 items-center">
            <h4 className="w-1/6 text-gray-700">Assignee</h4>
            <input
              type="text"
              className="border border-gray-400 rounded-lg p-2 shadow-lg hover:outline-none focus:outline-none w-1/2"
              value={selectedTask?.assignee || ""}
              onChange={(e) => handleFieldChange("assignee", e.target.value)}
            />
          </div>

          {/* Due Date */}

          <div className="flex gap-4 items-center">
            <h4 className="w-1/6 text-gray-700">Due Date</h4>
            <input
              type="date"
              className="border border-gray-400 rounded-lg p-2 shadow-lg hover:outline-none focus:outline-none w-1/2"
              value={selectedTask?.dueDate || ""}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>

          {/* Project */}
          <div className="flex gap-4 items-center">
            <h4 className="w-1/6 text-gray-700">Project</h4>
            <input
              type="text"
              className="border border-gray-400 rounded-lg p-2 shadow-lg hover:outline-none focus:outline-none w-1/2"
              value={selectedTask?.project || ""}
              onChange={(e) => setProject(e.target.value)}
            />
          </div>

          {/* Title */}
          <div className="flex gap-4 items-center">
            <h4 className="w-1/6 text-gray-700">Title</h4>
            <input
              type="text"
              className="border border-gray-400 rounded-lg p-2 shadow-lg hover:outline-none focus:outline-none w-1/2"
              value={selectedTask?.title || ""}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Description */}
          <div className="flex gap-4 items-center">
            <h4 className="w-1/6 text-gray-700">Description</h4>
            <textarea
              rows="2"
              cols="17"
              placeholder="Enter description here..."
              className="border border-gray-400 mt-4
                                    rounded-lg p-2 shadow-lg focus:outline-none"
              value={selectedTask?.description || ""}
            />
          </div>

          {/* Projected Hours */}
          <div className="flex gap-4 items-center">
            <h4 className="w-1/6 text-gray-700">Projected Hours</h4>
            <input
              type="number"
              className="border border-gray-400 rounded-lg p-2 shadow-lg hover:outline-none focus:outline-none w-1/2"
              value={selectedTask?.projectedHours || ""}
              onChange={(e) => setProjectedHours(e.target.value)}
            />
          </div>

          {/* Actual Hours */}
          <div className="flex gap-4 items-center">
            <h4 className="w-1/6 text-gray-700">Actual Hours</h4>
            <input
              type="number"
              className="border border-gray-400 rounded-lg p-2 shadow-lg hover:outline-none focus:outline-none w-1/2"
              value={selectedTask?.actualHours || ""}
              onChange={(e) => setActualHours(e.target.value)}
            />
          </div>

          <div className="flex gap-3 items-center">
            {/* Delete button */}
            <button
              className="w-32 mt-4 text-center text-sm text-white font-bold py-2 px-3 border rounded-lg shadow-lg
                                bg-red-700 hover:bg-red-500"
              onClick={deleteTask}
            >
              Delete Task
            </button>

            {/* Create project button */}
            <button
              className="w-32 mt-4 text-center text-sm text-white font-bold py-2 px-3 border rounded-lg shadow-lg
                                bg-blue-700 hover:bg-blue-500"
              onClick={updateTask}
            >
              Update Task
            </button>
          </div>
        </div>
      </Modal>
      {/* Pagination */}
      <ReactPaginate
        previousLabel={
          <div
            className={`flex gap-2 items-center ${
              currentPage === 0
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            <span className="text-gray-700">Previous</span>
            <FaArrowAltCircleLeft className="text-2xl text-gray-700 mr-2" />
          </div>
        }
        nextLabel={
          <div
            className={`flex gap-2 items-center ${
              currentPage === pageCount - 1
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            <FaArrowAltCircleRight className="text-2xl text-gray-700 ml-2" />
            <span className="text-gray-700">Next</span>
          </div>
        }
        breakLabel={<span className="text-gray-700 mx-2">...</span>}
        pageCount={Math.ceil(sortedTasks.length / tasksPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"pagination flex justify-center items-center mt-4"}
        activeClassName={"active"}
        previousClassName={"pagination-previous"}
        nextClassName={"pagination-next"}
        disabledClassName={"pagination-disabled"}
        forcePage={currentPage}
        pageClassName={"mx-2"}
      />
      {/*  modal for report */}
      <Modal
        isOpen={reportModalIsOpen}
        onRequestClose={() => setReportModalIsOpen(false)}
        className="absolute top-[6rem] right-0 transform
                bg-[#f5f5f5] rounded-lg shadow-2xl p-6 w-[30rem]
                transition duration-1000 ease-in-out mr-4   
                flex flex-col gap-4
                "
        overlayClassName="absolute top-0 left-0 right-0 bottom-0 bg-white bg-opacity-20 
                transition duration-1000 ease-in-out
                shadow-2xl
              "
      >
        <h1>Print Report</h1>
        <div className="flex gap-4 items-center">
          <input
            type="text"
            placeholder="Enter Assignee Name"
            value={searchInput}
            onChange={handleSearchInputChange}
            className="border border-gray-400 rounded-lg p-2 shadow-lg focus:outline-none"
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-lg shadow-lg cursor-pointer"
            onClick={handleSearchClick}
            disabled={searchLoading}
          >
            {searchLoading ? "Searching..." : "Search"}
          </button>
        </div>
        {/* Show search result here */}
        {searchResult && (
          <div className="mt-4 flex flex-col gap-2 " id="report-modal-content">
            <div className="flex gap-4 items-center">
              <h4 className="w-2/6 text-gray-700">Username</h4>
              <span className="border border-gray-400 rounded-lg p-2 shadow-lg focus:outline-none w-1/2">
                {searchResult.name}
              </span>
            </div>

            <div className="flex gap-4 items-center">
              <h4 className="w-2/6 text-gray-700">Tasks Completed</h4>
              <span className="border border-gray-400 rounded-lg p-2 shadow-lg focus:outline-none w-1/2">
                {searchResult.tasksCompleted}
              </span>
            </div>
            <div className="flex gap-4 items-center">
              <h4 className="w-2/6 text-gray-700">Estimated Hours</h4>
              <span className="border border-gray-400 rounded-lg p-2 shadow-lg focus:outline-none w-1/2">
                {searchResult.estimatedHours} hrs
              </span>
            </div>
            <div className="flex gap-4 items-center">
              <h4 className="w-2/6 text-gray-700">Actual Hours</h4>
              <span className="border border-gray-400 rounded-lg p-2 shadow-lg focus:outline-none w-1/2">
                {searchResult.actualHours} hrs
              </span>
            </div>

            {/* Download button */}
            <button
              className="mt-4 w-40 bg-blue-500 text-white p-2 rounded-lg shadow-lg cursor-pointer"
              onClick={generatePDF}
              disabled={!searchResult}
            >
              Download Report
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Tasks;
