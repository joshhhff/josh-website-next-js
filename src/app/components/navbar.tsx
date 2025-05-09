'use client';
import Link from "next/link";
import NavLogo from "./nav-logo";
import { useState, useEffect, useRef } from "react";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    return (
        <nav className="slide-down navbar-container">
            <div className="navbar">
                <div className="nav-logo">
                    <NavLogo />
                </div>

                {/* Desktop menu */}
                <div className="nav-menu desktop-nav">
                    <Link href="/projects">Projects</Link>
                    {/* <Link href="/products">Products</Link> */}
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </div>

                {/* Mobile menu icon */}
                <div className="mobile-menu-toggle mobile-nav">
                    {isMenuOpen ? (
                        <CgClose 
                            size={40}
                            onClick={() => setIsMenuOpen(false)}
                            style={{ cursor: "pointer" }}
                        />
                    ) : (
                        <CgMenuRight 
                            size={40}
                            onClick={() => setIsMenuOpen(true)}
                            style={{ cursor: "pointer" }}
                        />
                    )}
                </div>
            </div>

            {/* Mobile dropdown menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        ref={menuRef}
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.1 }}
                        className="mobile-dropdown"
                    >
                        <Link href="/projects" onClick={() => setIsMenuOpen(false)} style={mobileLinkStyle}>
                            <span>Projects</span>
                            <IoIosArrowForward size={30} />
                        </Link>
                        {/* <Link href="/products" onClick={() => setIsMenuOpen(false)} style={mobileLinkStyle}>...</Link> */}
                        <Link href="/about" onClick={() => setIsMenuOpen(false)} style={mobileLinkStyle}>
                            <span>About</span>
                            <IoIosArrowForward size={30} />
                        </Link>
                        <Link href="/contact" onClick={() => setIsMenuOpen(false)} style={mobileLinkStyle}>
                            <span>Contact</span>
                            <IoIosArrowForward size={30} />
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

const mobileLinkStyle = {
    marginBottom: "0.75rem",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1.75rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%"
};
