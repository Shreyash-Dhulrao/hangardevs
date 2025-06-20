import { FaUser, FaGear, FaHouse, FaAlignJustify } from "react-icons/fa6";
import Favicon from '../../assets/Images/icons/Hangar-Logo.png'
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from "../../features/theme/themeMode";
import { VscColorMode } from "react-icons/vsc";

const Navbar = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.value);

    const isInitialLoad = useRef(true); // ⛳ track first load

    // 1️⃣ On mount — determine and dispatch correct theme
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
        dispatch(changeTheme(initialTheme));
    }, [dispatch]);

    // 2️⃣ Update <html> class *after* initial load sets the correct theme
    useEffect(() => {
        if (isInitialLoad.current) {
            isInitialLoad.current = false;
            return; // 🛑 skip this effect on first render
        }

        const html = document.documentElement;
        html.classList.remove("light", "dark");
        html.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    // 3️⃣ Theme toggle
    const handleTheme = (e) => {
        e.preventDefault();
        const newTheme = theme === "light" ? "dark" : "light";
        dispatch(changeTheme(newTheme)); // will trigger useEffect
    };

    return (
        <>
            {/* Top Navbar for Desktop/Tablet */}
            <nav className="font-montserrat hidden md:flex w-full justify-between items-center px-6 py-4 shadow-md bg-white/75 dark:bg-zinc-900/75 transition duration-300 backdrop-blur-md fixed z-50">
                <div className="w-60">
                    <img src={Favicon} alt="" className="w-full" />
                </div>
                <ul className="flex gap-10 text-zinc-700 dark:text-zinc-200 font-semilight">
                    <li className="flex items-center"><button onClick={(e) => { handleTheme(e) }}><VscColorMode className="text-dark dark:text-yellow-500 text-xl transition duration-300" /></button></li>
                    <li className="hover:text-blue-500 focus:text-blue-500 active:text-blue-700 cursor-pointer"><Link to="/">Home</Link></li>
                    <li className="hover:text-blue-500 focus:text-blue-500 active:text-blue-700 cursor-pointer"><Link to="/about">About Us</Link></li>
                    <li className="hover:text-blue-500 focus:text-blue-500 active:text-blue-700 cursor-pointer"><Link to="home">Services</Link></li>
                    <li className="hover:text-blue-500 focus:text-blue-500 active:text-blue-700 cursor-pointer"><Link to="home">Contact Us</Link></li>
                </ul>
            </nav>

            {/* Bottom Navbar for Mobile */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-t p-2 border-t flex justify-around z-50">
                <button className="flex flex-col items-center text-sm text-gray-600 hover:text-blue-600">
                    <FaHouse className="w-5 h-5" />
                    Home
                </button>
                <button className="flex flex-col items-center text-sm text-gray-600 hover:text-blue-600">
                    <FaUser className="w-5 h-5" />
                    Profile
                </button>
                <button className="flex flex-col items-center text-sm text-gray-600 hover:text-blue-600">
                    <FaGear className="w-5 h-5" />
                    Settings
                </button>
                <button className="flex flex-col items-center text-sm text-gray-600 hover:text-blue-600">
                    <FaAlignJustify className="w-5 h-5" />
                    More
                </button>
            </nav>
        </>
    );
};

export default Navbar;
