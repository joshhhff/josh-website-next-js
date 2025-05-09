import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="footer" style={{ width: "100%" }}>
            <div className="footer-content" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: '1rem', textAlign: "center" }}>
                <div className="footer-left">
                    <p>&copy; {new Date().getFullYear()} Josh Ford</p>
                </div>
                <div className="footer-right" style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: '1rem', marginBottom: '1rem' }}>
                    <Link href="https://github.com/joshhhff" target="_blank"><FaGithub size={30} style={{ color: 'white' }} /></Link>
                    <Link href="https://www.linkedin.com/in/josh-ford-1112a925b/" target="_blank"><FaLinkedin size={30} style={{ color: 'white' }} /></Link>
                </div>
            </div>
        </div>
    )
}
