// import icon for user avatar
import { FaUserCircle } from 'react-icons/fa';
// add plus icon for adding new task from react icons
import { FaPlus } from 'react-icons/fa';
// import icon for back button
import { IoArrowBack } from 'react-icons/io5';
import Link from 'next/link';
import { FaSave } from 'react-icons/fa';
import { toast } from "react-toastify";


const CreateTemplate = () => {
    return (
        <div
            className='flex w-full h-full '
        >

            <div
                className='flex flex-col gap-6 w-full h-full p-12 ml-32 mt-12 '
            >
                <h2
                    className='text-3xl font-bold'
                >Create a Template</h2>
                <div
                    className='flex gap-4 items-center'
                >
                    <h4
                        className='w-1/6 text-gray-400 '
                    >
                        Title
                    </h4>
                    <input type='text'
                        className='border border-gray-200
                         rounded-lg p-2 shadow-md
                        hover:outline-none focus:outline-none
                        w-1/2
                        '
                    />
                </div>

                <div
                    className='flex gap-4 items-center'
                >
                    <h4
                        className='w-1/6 text-gray-400 '
                    >
                        Assignee
                    </h4>

                    <FaUserCircle
                        className='text-2xl'
                    />
                    <select
                        className=''
                    >
                        <option>Select</option>
                        <option>Zak Nawaz</option>
                        <option>Jack</option>
                        <option>John Smith</option>
                    </select>
                </div>

                <div
                    className='flex gap-4 items-center'
                >
                    <h4
                        className='w-1/6 text-gray-400 '
                    >
                        Due Date
                    </h4>
                    <input type='date'
                        className=''
                    />
                </div>

                {/* div for description */}
                <div
                    className='flex gap-4 items-center'
                >
                    <h4
                        className='w-1/6 text-gray-400 '
                    >
                        Description
                    </h4>
                    <textarea
                        rows='10'
                        cols='58'
                        className=' border border-gray-300 mt-4
                        rounded-lg p-2 shadow-lg focus:outline-none '
                    />
                </div>

                {/* Projected Hours */}
                <div
                    className='flex gap-4 items-center'
                >
                    <h4
                        className='w-1/6 text-gray-400 '
                    >
                        Projected Hours
                    </h4>
                    <input type='number'
                        className='  border border-gray-300
                        focus:outline-none rounded-lg p-2 shadow-lg
                        '
                    />
                </div>

                {/* Actual Hours */}
                <div
                    className='flex gap-4 items-center'
                >
                    <h4
                        className='w-1/6 text-gray-400 '
                    >
                        Actual Hours
                    </h4>
                    <input type='number'
                        className=' border border-gray-300
                        focus:outline-none rounded-lg p-2 shadow-lg
                        '
                    />
                </div>

                {/* Sub Tasks */}
                <div
                    className='flex gap-4 items-center'
                >
                    <h4
                        className='w-1/6 text-gray-400 '
                    >
                        Sub Tasks
                    </h4>
                    <input type='text'
                        className=' border border-gray-300
                        focus:outline-none rounded-lg p-2 shadow-lg
                        '
                    />
                    <FaPlus
                        className='text-2xl border border-gray-300 rounded-lg p-1 shadow-lg cursor-pointer hover:bg-gray-200'
                    />
                </div>

                {/* Collaborators as select */}
                <div
                    className='flex gap-4 items-center'
                >
                    <h4
                        className='w-1/6 text-gray-400 '
                    >
                        Collaborators
                    </h4>
                    <FaUserCircle className='text-2xl' />
                    <select
                        className=''
                    >
                        <option>Select</option>
                        <option>Zak Nawaz</option>
                        <option>Jack</option>
                        <option>John Smith</option>
                    </select>

                    <FaPlus
                        className='text-2xl border border-gray-300 rounded-lg p-1 shadow-lg cursor-pointer hover:bg-gray-200'
                    />
                </div>

                {/* Comments */}
                <div
                    className='flex gap-4 items-center'
                >
                    <h4
                        className='w-1/6 text-gray-400 '
                    >
                        Comments
                    </h4>
                    <textarea
                        rows='4'
                        cols='64'
                        className=' border border-gray-300 mt-4
                        focus:outline-none rounded-lg p-2 shadow-lg
                        '
                    />
                </div>

                {/* Create project button */}
                <div className='flex flex-col gap-2 w-full h-full items-center justify-center'>
                    <button
                        className="flex gap-2 bg-blue-500 text-white p-2 rounded-lg shadow-lg mt-4 ml-4"
                    >
                        <FaSave className="text-xl" />
                        Save Template
                    </button>
                </div>

            </div>

            <div className='flex flex-col gap-2 w-full h-full items-center justify-center'>
                <Link href='/createtask'>
                    <div className='flex gap-2 absolute top-4 left-4 cursor-pointer '>
                        <IoArrowBack className='text-2xl' />
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default CreateTemplate