"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaSave } from 'react-icons/fa';
import Header from '../components/Header';
import { toast } from "react-toastify";



const AssignTasks = () => {

    const [taskStatus, setTaskStatus] = useState('Not Assigned');

    const [tasks, setTasks] = useState([
        {
            id: 1,
            projectName: 'Project A',
            taskName: 'Task 1',
            subtasks: 'Subtask 1, Subtask 2',
            dueDate: '2024-01-31',
            taskStatus: 'Not Assigned',
            assignedTo: null,
        },
        {
            id: 2,
            projectName: 'Project B',
            taskName: 'Task 2',
            subtasks: 'Subtask 1',
            dueDate: '2024-02-15',
            taskStatus: 'Not Assigned',
            assignedTo: null,
        },
        {
            id: 3,
            projectName: 'Project C',
            taskName: 'Task 3',
            subtasks: 'Subtask 1, Subtask 2, Subtask 3',
            dueDate: '2024-03-01',
            taskStatus: 'Not Assigned',
            assignedTo: null,
        },
        {
            id: 4,
            projectName: 'Project D',
            taskName: 'Task 4',
            subtasks: 'Subtask 1, Subtask 2',
            dueDate: '2024-03-15',
            taskStatus: 'Not Assigned',
            assignedTo: null,
        },
        {
            id: 5,
            projectName: 'Project E',
            taskName: 'Task 5',
            subtasks: 'Subtask 1',
            dueDate: '2024-04-01',
            taskStatus: 'Not Assigned',
            assignedTo: null,
        }
    ]);

    const handleAssignTask = (taskId, assignedTo) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, assignedTo } : task
            )
        );

        // Change the status of the tasks to "Assigned"
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.assignedTo ? { ...task, taskStatus: 'Assigned' } : task
            )
        );
    };

    const handleSave = () => {
        // Change the status of the tasks to "Assigned"
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.assignedTo ? { ...task, taskStatus: 'Assigned' } : task
            )
        );
        console.log(tasks);
        if (tasks.length == 0) {
            toast.error("No tasks have been assigned!");
            return;
        }
        if (tasks.some((task) => task.assignedTo == null)) {
            toast.error("Some tasks have not been assigned!");
            return;
        }

        if (tasks.every((task) => task.assignedTo != null)) {
            toast.success("Tasks have been assigned successfully!");
        }
    }

    return (
        <div>
            <Header />
            <h2 className="text-3xl font-bold mt-12 ml-6">Assign Tasks</h2>

            <div className="p-6 rounded-lg shadow-lg">
                <table className="w-full table-fixed border-separate">
                    <thead>
                        <tr className="bg-gray-900 text-white">
                            <th className="w-1/6 p-2">Project Name</th>
                            <th className="w-1/6 p-2">Task Name</th>
                            <th className="w-1/6 p-2">Subtasks</th>
                            <th className="w-1/6 p-2">Due Date</th>
                            <th className="w-1/6 p-2">Task Status</th>
                            <th className="w-1/6 p-2">Assign To</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task) => (
                            <tr key={task.id}>
                                <td className="border border-gray-600 p-2">{task.projectName}</td>
                                <td className="border p-2">{task.taskName}</td>
                                <td className="border p-2">{task.subtasks}</td>
                                <td className="border p-2">{task.dueDate}</td>
                                <td className="border p-2">{task.taskStatus}</td>
                                <td className="border p-2">
                                    <select
                                        value={task.assignedTo || ''}
                                        onChange={(e) => handleAssignTask(task.id, e.target.value)}
                                        className="w-full p-2 border rounded shadow-lg cursor-pointer
                                        "
                                    >
                                        <option value="" disabled>
                                            Assign To
                                        </option>
                                        <option value="Zak Nawaz">Zak Nawaz</option>
                                        <option value="John Doe">John Doe</option>
                                        <option value="Jane Smith">Jane Smith</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className='flex flex-col gap-2 w-full h-full items-center justify-center'>
                <button className="flex gap-2 bg-blue-500 text-white p-2 rounded-lg shadow-lg mt-4 ml-4"
                    onClick={handleSave}
                >
                    <FaSave className="text-xl" />
                    Save
                </button>
            </div>
        </div>
    );
};

export default AssignTasks;
