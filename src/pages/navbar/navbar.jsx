import { FaUser, FaGears, FaHouse, FaPhone } from "react-icons/fa6";
import Favicon from '../../assets/Images/icons/Hangar-Logo.png'
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useLayoutEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from "../../features/theme/themeMode";
import { VscColorMode } from "react-icons/vsc";
import gsap from "gsap";

const Navbar = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.value);
    const navInnerRef = useRef(null);
    const isInitialLoad = useRef(true); // ⛳ track first load
    const location = useLocation();
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

    useLayoutEffect(() => {
        gsap.to(navInnerRef.current, {
            width: "60%",
            ease: "power2.inOut",
            duration: 5,
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "+=700",
                scrub: 1.5,
            },
        });
    }, []);

    return (
        <>
            {/* Responsive Navbar */}
            <nav className="font-montserrat fixed top-0 w-screen z-30">
                <div className="w-full flex justify-center items-center py-3 px-4 md:px-6 transition duration-300">
                    <div
                        ref={navInnerRef}
                        className="bg-zinc-100/75 dark:bg-zinc-900/75 gap-4 md:gap-10 backdrop-blur-xl shadow-md rounded-full px-6 md:px-10 py-3 flex justify-between md:justify-around items-center w-full transition-transform duration-300 origin-center"
                    >
                        {/* Logo */}
                        <div className="w-32 md:w-52">
                            <img src={Favicon} alt="logo" className="w-full" />
                        </div>

                        {/* Always Visible Theme Toggle */}
                        <div className="flex items-center md:hidden">
                            <button onClick={handleTheme}>
                                <VscColorMode className="text-dark dark:text-blue-500 text-xl transition duration-300" />
                            </button>
                        </div>

                        {/* Desktop Menu */}
                        <ul className="hidden md:flex gap-10 items-center font-quicksand font-medium">
                            <li>
                                <button onClick={handleTheme}>
                                    <VscColorMode className="text-dark dark:text-blue-500 text-xl transition duration-300" />
                                </button>
                            </li>
                            <li className="cursor-pointer hover:text-blue-500 text-zinc-700 dark:text-zinc-200">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="cursor-pointer hover:text-blue-500 text-zinc-700 dark:text-zinc-200">
                                <Link to="/about">About Us</Link>
                            </li>
                            <li className="cursor-pointer hover:text-blue-500 text-zinc-700 dark:text-zinc-200">
                                <Link to="/services">Services</Link>
                            </li>
                            <li className="cursor-pointer hover:text-blue-500 text-zinc-700 dark:text-zinc-200">
                                <Link to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Bottom Navbar for Mobile */}
            <nav className="md:hidden w-full fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-900 border-t border-gray-200 shadow-t z-50">
                <div className="flex justify-around items-center px-4 py-2">
                    <Link to="/" className="flex flex-col items-center justify-center text-xs text-gray-600 dark:text-gray-300 hover:text-blue-600 w-1/4">
                        <FaHouse className="w-5 h-5 mb-1" />
                        Home
                    </Link>
                    <Link to="/about" className="flex flex-col items-center justify-center text-xs text-gray-600 dark:text-gray-300 hover:text-blue-600 w-1/4">
                        <FaUser className="w-5 h-5 mb-1" />
                        About Us
                    </Link>
                    <Link to="/services" className="flex flex-col items-center justify-center text-xs text-gray-600 dark:text-gray-300 hover:text-blue-600 w-1/4">
                        <FaGears className="w-5 h-5 mb-1" />
                        Services
                    </Link>
                    <Link to="/contact" className="flex flex-col items-center justify-center text-xs text-gray-600 dark:text-gray-300 hover:text-blue-600 w-1/4">
                        <FaPhone  className="w-5 h-5 mb-1" />
                        Contact Us
                    </Link>
                </div>
            </nav>

        </>
    );
};

export default Navbar;
