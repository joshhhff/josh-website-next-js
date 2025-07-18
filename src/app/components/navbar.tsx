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
    const [hasMounted, setHasMounted] = useState(false);

    // Hydration detection
    useEffect(() => {
        setHasMounted(true);
    }, []);

    // Toggle body class after hydration
    useEffect(() => {
        if (!hasMounted) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.body.classList.add('menu-open');
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.classList.remove('menu-open');
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.classList.remove('menu-open');
        };
    }, [isMenuOpen, hasMounted]);

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
                    <CgMenuRight 
                        size={40}
                        onClick={() => setIsMenuOpen(true)}
                        style={{ cursor: "pointer" }}
                    />
                </div>
            </div>

            {/* Mobile dropdown menu */}
            <AnimatePresence>
            {isMenuOpen && hasMounted && (
                <motion.div
                ref={menuRef}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="mobile-dropdown"
                style={{
                    position: "fixed",
                    top: 0,
                    right: 0,
                    width: "80vw",
                    maxWidth: 360,
                    height: "100vh",
                    background: "#121212",
                    zIndex: 100,
                    display: "flex",
                    flexDirection: "column",
                    padding: "2rem 1.5rem",
                    color: "#fff",
                }}
                >
                {/* Close icon */}
                <button
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                    position: "absolute",
                    top: 26,
                    right: 26,
                    background: "transparent",
                    border: "none",
                    color: "#fff",
                    fontSize: "1.8rem",
                    cursor: "pointer",
                    padding: 8,
                    }}
                    aria-label="Close menu"
                >
                    <CgClose 
                            size={40}         
                                    />
                </button>

                {/* Primary nav */}
                <div style={{ marginTop: '3rem', width: '95%' }}>
                    {[
                    { href: "/projects", label: "Projects" },
                    { href: "/about", label: "About" },
                    { href: "/contact", label: "Contact" },
                    ].map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "1rem 0",
                        fontSize: "1.05rem",
                        fontWeight: 500,
                        color: "#fff",
                        textDecoration: "none",
                        }}
                    >
                        <span>{item.label}</span>
                        <IoIosArrowForward size={20} />
                    </Link>
                    ))}

                    {/* Divider */}
                    <div
                    style={{
                        height: 1,
                        background: "rgba(255,255,255,0.08)",
                        margin: "1.2rem 0",
                    }}
                    />

                    {/* Extra links */}
                    {[
                    { href: "https://www.linkedin.com/in/josh-ford-1112a925b/", label: "LinkedIn", external: true },
                    { href: "https://github.com/joshhhff", label: "GitHub", external: true },
                    ].map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        target={item.external ? "_blank" : "_self"}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "1rem 0",
                        fontSize: "1.05rem",
                        fontWeight: 500,
                        color: "#aaa",
                        textDecoration: "none",
                        }}
                    >
                        <span>{item.label}</span>
                        <IoIosArrowForward size={18} />
                    </Link>
                    ))}
                </div>

                <div style={{ flex: 1 }} />

                {/* Footer */}
                <div
                    style={{
                    color: "#666",
                    fontSize: "0.85rem",
                    textAlign: "center",
                    marginTop: "2rem",
                    }}
                >
                    &copy; {new Date().getFullYear()} Josh Ford
                </div>
                </motion.div>
            )}
            </AnimatePresence>


        </nav>
    );
}