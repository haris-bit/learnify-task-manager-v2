// pages/tasks.js

import React from 'react';
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';
import Header from '../components/Header';


const Tasks = () => {
    const tasks = [
        {
            id: 1,
            assignee: 'Zak Nawaz',
            dueDate: '2024-01-31',
            project: 'Project A',
            title: 'Task 1',
            description: 'Description of Task 1',
            projectedHours: 10,
            actualHours: 8,
            subtasks: 'Subtask 1, Subtask 2',
            collaborators: 'John Doe, Jane Smith',
            comments: 'Comment 1, Comment 2',
        },
        {
            id: 2,
            assignee: 'Jack',
            dueDate: '2024-02-15',
            project: 'Project B',
            title: 'Task 2',
            description: 'Description of Task 2',
            projectedHours: 8,
            actualHours: 6,
            subtasks: 'Subtask 1',
            collaborators: 'Alice, Bob',
            comments: 'Comment 3, Comment 4',
        },
        {
            id: 3,
            assignee: 'John Smith',
            dueDate: '2024-03-01',
            project: 'Project C',
            title: 'Task 3',
            description: 'Description of Task 3',
            projectedHours: 12,
            actualHours: 10,
            subtasks: 'Subtask 1, Subtask 2, Subtask 3',
            collaborators: 'Mary, James',
            comments: 'Comment 5',
        },
    ];

    return (
        <div>
            <Header />
            <h2 className="text-3xl font-bold mt-12 ml-4 ">Tasks</h2>
            <div
                className='ml-6 mt-4 flex flex-row gap-2 items-center '
            >
                Sort by:
                <select
                    className='border border-gray-400 rounded-lg p-2 shadow-lg cursor-pointer '
                >
                    <option>Due Date</option>
                    <option>Recently Added</option>
                    <option>Projected Hours</option>
                </select>
            </div>
            <div
                className='flex flex-row absolute top-32 right-6'
            >
                <Link href='/createtask'
                >
                    <button className="flex gap-2 bg-blue-500 text-white p-2 rounded-lg shadow-lg mt-4 ml-4 cursor-pointer">
                        <FaPlus className="text-xl" />
                        Create Task
                    </button>
                </Link>

            </div>
            <div className=" p-6 rounded-lg shadow-lg">
                <table className="w-full table-fixed border-separate">
                    <thead>
                        <tr className="bg-gray-900 text-white">
                            <th className="w-1/10 p-2">Assignee</th>
                            <th className="w-1/10 p-2">Due Date</th>
                            <th className="w-1/10 p-2">Project</th>
                            <th className="w-1/10 p-2">Title</th>
                            <th className="w-2/10 p-2">Description</th>
                            <th className="w-1/10 p-2">Projected Hours</th>
                            <th className="w-1/10 p-2">Actual Hours</th>
                            <th className="w-2/10 p-2">Subtasks</th>
                            <th className="w-1/10 p-2">Collaborators</th>
                            <th className="w-2/10 p-2">Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task) => (
                            <tr key={task.id}>
                                <td className="border border-gray-600 p-2">{task.assignee}</td>
                                <td className="border border-gray-600 p-2">{task.dueDate}</td>
                                <td className="border border-gray-600 p-2">{task.project}</td>
                                <td className="border border-gray-600 p-2">{task.title}</td>
                                <td className="border border-gray-600 p-2">{task.description}</td>
                                <td className="border border-gray-600 p-2">{task.projectedHours}</td>
                                <td className="border border-gray-600 p-2">{task.actualHours}</td>
                                <td className="border border-gray-600 p-2">{task.subtasks}</td>
                                <td className="border border-gray-600 p-2">{task.collaborators}</td>
                                <td className="border border-gray-600 p-2">{task.comments}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Tasks;
