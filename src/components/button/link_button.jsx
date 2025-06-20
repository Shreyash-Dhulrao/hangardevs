import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';


const button = (props) => {
    return (
        <div>
            <div class="flex items-center justify-center ">
                <div class="relative group">
                    <Link to={props.url}
                        class="relative inline-block p-px font-semibold leading-6 text-black cursor-pointer rounded-full shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                    >
                        <span
                            class="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        ></span>

                        <span class="relative z-10 block px-6 py-3 rounded-full bg-white dark:bg-zinc-900 dark:text-white transition duration-300">
                            <div class="relative z-10 flex items-center space-x-2">
                                <span class="transition-all duration-500 group-hover:translate-x-1" >Get Started</span>
                                <IoIosArrowForward className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1" />
                            </div>
                        </span>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default button
