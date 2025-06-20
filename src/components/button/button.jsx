import React from 'react'
import { IoIosArrowForward } from "react-icons/io";


const button = () => {
    return (
        <div>
            <div class="flex items-center justify-center">
                <div class="relative group">
                    <button 
                        class="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                    >
                        <span
                            class="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        ></span>

                        <span class="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                            <div class="relative z-10 flex items-center space-x-2">
                                <span class="transition-all duration-500 group-hover:translate-x-1"
                                >Let's get started</span
                                >
                                <IoIosArrowForward className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1" />
                            </div>
                        </span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default button
