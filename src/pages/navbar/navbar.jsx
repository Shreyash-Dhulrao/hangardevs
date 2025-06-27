import { FaUser, FaGear, FaHouse, FaAlignJustify } from "react-icons/fa6";
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
            duration: 1,
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "+=200",
                scrub: 1.5,
            },
        });
    }, []);

    return (
        <>
            {/* Top Navbar for Desktop/Tablet */}
            <nav className="font-montserrat hidden md:flex w-full px-3 py-1 justify-between items-center fixed z-30">
                <div className="w-full flex justify-center items-center py-3 px-6 transition duration-300">
                    {/* Scale container */}
                    <div
                        ref={navInnerRef}
                        className="bg-zinc-100/75 dark:bg-zinc-900/75 gap-10 backdrop-blur-xl shadow-md rounded-full px-10 py-3 flex justify-around items-center w-full transition-transform duration-300 origin-center"
                        style={{ transformOrigin: "center" }}
                    >
                        {/* Logo */}
                        <div className="w-50">
                            <img src={Favicon} alt="logo" className="w-full" />
                        </div>

                        {/* Menu Items (don't scale these) */}
                        <ul className="flex gap-10 font-semilight">
                            <li className="flex items-center">
                                <button onClick={handleTheme}>
                                    <VscColorMode className="text-dark dark:text-yellow-500 text-xl transition duration-300" />
                                </button>
                            </li>
                            <li className={`font-quicksand cursor-pointer hover:text-blue-500 ${location.pathname === "/" ? "text-blue-500 font-semibold" : "text-zinc-700 dark:text-zinc-200"}`}>
                                <Link to="/">Home</Link>
                            </li>
                            <li className={`font-quicksand cursor-pointer hover:text-blue-500 ${location.pathname === "/about" ? "text-blue-500 font-semibold" : "text-zinc-700 dark:text-zinc-200"}`}>
                                <Link to="/about">About Us</Link>
                            </li>
                            <li className={`font-quicksand cursor-pointer hover:text-blue-500 ${location.pathname === "/services" ? "text-blue-500 font-semibold" : "text-zinc-700 dark:text-zinc-200"}`}>
                                <Link to="/services">Services</Link>
                            </li>
                            <li className={`font-quicksand cursor-pointer hover:text-blue-500 ${location.pathname === "/contact" ? "text-blue-500 font-semibold" : "text-zinc-700 dark:text-zinc-200"}`}>
                                <Link to="/contact">Contact Us</Link>
                            </li>
                        </ul>

                    </div>
                </div>
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
