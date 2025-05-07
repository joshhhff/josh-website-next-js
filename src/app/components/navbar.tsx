'use client';
import Link from "next/link";
import NavLogo from "./nav-logo";
import { useState, useEffect } from "react";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";

export default function Navbar() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        // Set initial mobile state
        const handleResize = () => {
            setIsMobile(window.innerWidth < 700);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className="slide-down" style={{ width: "100%", position: "absolute", top: 0, zIndex: 1000 }}>
            <div className="navbar" style={{ display: "flex", flexDirection: "row", margin: '2rem', fontWeight: 'bold', alignItems: "center" }}>
                <div className="nav-logo">
                    <NavLogo />
                </div>

                {/* Desktop menu */}
                {!isMobile ? (
                    <div className="nav-menu" style={{ marginLeft: "auto", display: "flex", flexDirection: "row", justifyContent: "space-between", width: "25rem" }}>
                        <Link href="/projects">Projects</Link>
                        <Link href="/products">Products</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                ) : (
                    // Mobile menu toggle icon (menu or close)
                    <div style={{ marginLeft: 'auto', position: 'relative' }}>
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
                )}
            </div>
            {/* Mobile menu items shown below the icon */}
            <AnimatePresence>
            {isMobile && isMenuOpen && (
                <motion.div 
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.1 }}
                    style={{
                        marginTop: "0.5rem",
                        backgroundColor: "#333",
                        padding: "1rem",
                        width: '90%',
                        borderRadius: "0.5rem",
                        transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start", // Align text to the left
                        position: "absolute",
                        right: 0
                    }}>
                    <Link href="/projects" onClick={() => setIsMenuOpen(false)} style={{ ...mobileLinkStyle, display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                        <span>Projects</span>
                        <IoIosArrowForward size={30} />
                    </Link>
                    <Link href="/products" onClick={() => setIsMenuOpen(false)} style={{ ...mobileLinkStyle, display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                        <span>Products</span>
                        <IoIosArrowForward size={30} />
                    </Link>
                    <Link href="/about" onClick={() => setIsMenuOpen(false)} style={{ ...mobileLinkStyle, display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                        <span>About</span>
                        <IoIosArrowForward size={30} />
                    </Link>
                    <Link href="/contact" onClick={() => setIsMenuOpen(false)} style={{ ...mobileLinkStyle, display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
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
    fontSize: "1.75rem"
};
