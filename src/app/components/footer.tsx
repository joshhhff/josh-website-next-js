import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer" style={{ width: "100%", position: "absolute", bottom: 0, zIndex: 1000 }}>
            <div className="footer-content" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: '1rem', textAlign: "center" }}>
                <div className="footer-left">
                    <p>&copy; {new Date().getFullYear()} Josh Ford</p>
                </div>
                <div className="footer-right" style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: '1rem', marginBottom: '1rem' }}>
                    <FaGithub size={30} style={{ color: 'white' }} />
                    <FaLinkedin size={30} style={{ color: 'white' }} />
                </div>
            </div>
        </footer>
    )
}
