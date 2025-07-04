// Footer.jsx
import React from 'react';
import Favicon from '../../assets/Images/icons/Hangar-Logo.png'
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className="block bottom-0 w-full z-[-1] bg-white dark:bg-black text-white text-center py-2 px-4 pt-6 flex flex-col gap-3 md:fixed md:mt-12 ">
            <div className='flex flex-col justfy-center items-center gap-1 w-full'>
                <img src={Favicon} alt="logo" className="w-32 lg:w-1/6 " />
                <p className="text-2xl font-semibold mb-2 text-zinc-900 dark:text-white">
                    Let’s build something amazing together
                </p>
            </div>
            <div className='flex justify-around dark:text-white text-zinc-900 flex-col md:flex-row md:items-start gap-6'>
                <div>
                    <p className='font-semibold text-xl'>Website Links</p>
                    <ul className="flex flex-col font-semilight">
                        <li className={`font-quicksand cursor-pointer hover:text-zinc-100 text-zinc-700 dark:text-zinc-400`}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={`font-quicksand cursor-pointer hover:text-zinc-100 emibold" text-zinc-700 dark:text-zinc-400`}>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li className={`font-quicksand cursor-pointer hover:text-zinc-100 emibold" text-zinc-700 dark:text-zinc-400`}>
                            <Link to="/services">Services</Link>
                        </li>
                        <li className={`font-quicksand cursor-pointer hover:text-zinc-100 emibold" text-zinc-700 dark:text-zinc-400`}>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className='font-semibold text-xl'>Contact Us</p>
                    <div className="flex flex-col items-start p-2">
                        <p className='text-zinc-300'><span className='font-semibold text-lg text-white'>Mobile: </span>0000000000</p>
                        <p className='text-zinc-300'><span className='font-semibold text-lg text-white'>Email Address: </span><a href="mailto:samplemail@gmail.com" target='_blank'>samplemail@gmail.com</a></p>
                        <p className='text-zinc-300'><span className='font-semibold text-lg text-white'>Location: </span><a href="https://maps.app.goo.gl/t9i2XyY9iEqD1gHS6" target='_blank'>Pune, Maharashtra, India</a></p>
                    </div>
                </div>
                <div>
                    <p className='font-semibold text-xl'>Follow Us on Social Media</p>

                   <div class="relative mt-2 flex flex-wrap justify-center md:justify-start ">
                        <div
                            class="absolute inset-0 dark:bg-zinc-900 bg-zinc-200 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl"
                        ></div>

                        <div class="relative flex items-end gap-x-3 p-3">
                            <a href="" target='_blank'>
                                <div class="relative">
                                    <div
                                        class="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl p-2 flex items-center justify-center shadow-lg cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                                    >
                                        <FaGithub className='text-white w-full h-full' />
                                    </div>
                                </div>
                            </a>

                            <a href="" target='_blank'>
                                <div class="relative">
                                    <div
                                        class="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-2 flex items-center justify-center shadow-lg cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                                    >
                                        <FaLinkedinIn className='text-white w-full h-full' />
                                    </div>
                                </div>
                            </a>
                            <a href="" target='_blank'>
                                <div class="relative">
                                    <div
                                        class="w-14 h-14 bg-gradient-to-br from-indigo-400 to-blue-700 rounded-xl p-2 flex items-center justify-center shadow-lg cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                                    >
                                        <FaFacebookF className='text-white w-full h-full' />
                                    </div>
                                </div>
                            </a>
                            <a href="" target='_blank'>
                                <div class="relative">
                                    <div
                                        class="w-14 h-14 bg-gradient-to-bl from-pink-500 via-red-400 to-yellow-500 rounded-xl p-2 flex items-center justify-center shadow-lg cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                                    >
                                        <FaInstagram className='text-white w-full h-full' />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-lg text-zinc-300'>© 2025 HangarDevs. All rights reserved.</p>
            </div>

        </footer>
    );
};

export default Footer;
