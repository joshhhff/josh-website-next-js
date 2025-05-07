import Link from "next/link";
import NavLogo from "./nav-logo";

export default function Navbar() {
    return (
        <nav className="slide-down" style={{ width: "100%", position: "absolute", top: 0, zIndex: 1000 }}>
            <div className="navbar" style={{ display: "flex", flexDirection: "row", margin: '3rem', fontWeight: 'bold', alignItems: "center" }}>
                <div className="nav-logo">
                    <NavLogo />
                </div>
                <div className="nav-menu" style={{ marginLeft: "auto", display: "flex", flexDirection: "row", justifyContent: "space-between", width: "10rem" }}>
                    <Link href="/projects">
                        Projects
                    </Link>
                    <Link href="/contact">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}
