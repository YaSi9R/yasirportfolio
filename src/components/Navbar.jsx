"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa"
import "../App.css"
const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ]

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-opacity-90 backdrop-blur-sm shadow-md" : "bg-opacity-0"} ${theme === "dark" ? "bg-dark" : "bg-light"}`}
        >
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link
                    to="/"
                    className="text-2xl tracking-wide uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600"
                    style={{ fontFamily: 'Tagesschrift, system-ui', fontWeight: '200', padding: '10px', backgroundColor: 'yellow' }}
                >
                    YasVerse
                </Link>

                





                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <div className="flex space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`transition-colors duration-300 ${location.pathname === link.path ? "text-primary font-medium" : "hover:text-primary"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-opacity-20 hover:bg-opacity-30 transition-colors duration-300"
                        aria-label="Toggle theme"
                    >
                        {theme === "dark" ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-600" />}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleTheme}
                        className="p-2 mr-4 rounded-full bg-opacity-20 hover:bg-opacity-30 transition-colors duration-300"
                        aria-label="Toggle theme"
                    >
                        {theme === "dark" ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-600" />}
                    </button>

                    <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md" aria-label="Toggle menu">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`md:hidden ${theme === "dark" ? "bg-dark-card" : "bg-light-card"} shadow-lg`}
                >
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`block py-2 px-4 rounded-md transition-colors duration-300 ${location.pathname === link.path
                                            ? "bg-primary bg-opacity-20 text-primary font-medium"
                                            : "hover:bg-primary hover:bg-opacity-10"
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </nav>
    )
}

export default Navbar
