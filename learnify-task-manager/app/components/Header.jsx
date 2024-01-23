// import user icon from react icons
import { FaUserCircle } from 'react-icons/fa'

// import logout from react icons
import { RiLogoutBoxRLine } from 'react-icons/ri'

import Link from 'next/link'

const Header = () => {
    return (
        <div
            className='flex w-full h-16 items-center justify-around shadow-sm
            shadow-black
            '
        >
            {/* div for logo */}
            <Link href='/'
                className='text-xl font-bold'
            >
                Learnify
            </Link>
            {/* div for nav */}
            <div
                className='flex gap-4 '
            >
                <Link href='/'
                    className='mx-2'
                >
                    Home
                </Link>

                <Link
                    href='/alltasks'
                >
                    <div
                        className='mx-2'
                    >
                        All Tasks
                    </div>
                </Link>

                <Link href='/createtask'
                    className='mx-2'
                >
                    Create Task
                </Link>
                <Link
                    href='assigntasks'
                    className='mx-2'
                >
                    Assign Tasks
                </Link>

                <Link
                    href='/createtemplate'
                    className='mx-2'
                >
                    Create Template
                </Link>
            </div>
            {/* Div for User Profile */}
            <div
                className='flex gap-2 items-center'
            >
                <span
                    className='flex items-center gap-2'
                >

                    <FaUserCircle
                        size={32}
                        className='text-blue-500'
                    />
                    Zak
                </span>

                <RiLogoutBoxRLine
                    size={24}
                    className='ml-12 text-blue-500'
                />
            </div>

        </div>
    )
}

export default Header