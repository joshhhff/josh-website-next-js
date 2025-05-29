import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";
import ScrollToTopDivider from "./scroll-to-top-divider";

export default function Footer() {
    return (
        <div className="footer" style={{ width: "100%", padding: "1rem", color: "white" }}>
            <ScrollToTopDivider />
            <div
                className="footer-content"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    width: "100%",
                    gap: "2rem",
                }}
            >
                {/* Left Section */}
                <div
                    className="footer-left"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        alignItems: "flex-start",
                        gap: "2rem",
                        flex: 1,
                        minWidth: "300px",
                    }}
                >
                    {/* Projects */}
                    <div style={{ display: "flex", flexDirection: "column", flex: 1, minWidth: "200px" }}>
                        <span style={{ fontWeight: "bold", fontSize: "1.5rem", marginBottom: "0.5rem" }}>Projects</span>
                        <Link href="/projects/orderSplitting" className="footer-link">NetSuite x Shopify Order Splitting</Link>
                        <Link href="/projects/trustpilotIntegration" className="footer-link">NetSuite x Trustpilot Integration</Link>
                        <Link href="/projects/ediShipNotice" className="footer-link">Auto-ASN Generation</Link>
                        <Link href="/projects/pick2Ship" className="footer-link">Pick2Ship</Link>
                    </div>

                    {/* About Me */}
                    <div style={{ display: "flex", flexDirection: "column", flex: 1, minWidth: "200px" }}>
                        <span style={{ fontWeight: "bold", fontSize: "1.5rem", marginBottom: "0.5rem" }}>About Me</span>
                        <Link href="/about?scrollTo=technologies" className="footer-link">Technologies &amp; Frameworks</Link>
                        <Link href="/about?scrollTo=languages" className="footer-link">Languages</Link>
                        <Link href="/about?scrollTo=personalProjects" className="footer-link">Personal Projects</Link>
                    </div>

                    {/* Contact */}
                    <div style={{ display: "flex", flexDirection: "column", flex: 1, minWidth: "200px" }}>
                        <span style={{ fontWeight: "bold", fontSize: "1.5rem", marginBottom: "0.5rem" }}>Contact</span>
                        <Link
                            href="mailto:joshfordd2004@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            joshfordd2004@gmail.com
                        </Link>
                        <div className="footer-icons" style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
                            <Link href="https://github.com/joshhhff" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={30} />
                            </Link>
                            <Link href="https://www.linkedin.com/in/josh-ford-1112a925b/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={30} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Section: Image */}
                <div className="footer-image" style={{ marginLeft: "auto", maxWidth: "400px", width: "100%" }}>
                    <Link href="/">
                        <Image
                            src="/FooterImage-2.png"
                            alt="Josh Ford - Your Vision, Coded"
                            width={400}
                            height={100}
                            style={{ width: "100%", height: "auto" }}
                        />
                    </Link>
                </div>
            </div>

            <br />
            <p style={{ textAlign: "left", color: "grey" }}>
                &copy; {new Date().getFullYear()} Josh Ford - All Rights Reserved
            </p>
            <br />
        </div>
    );
}
