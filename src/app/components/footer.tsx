import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";
import ScrollToTopDivider from "./scroll-to-top-divider";

export default function Footer() {
    return (
        <div className="footer" style={{ width: "100%", padding: '1rem' }}>
            <ScrollToTopDivider />
            <div
                className="footer-content"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                {/* Left Section: Navigation */}
                <div
                    className="footer-left"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        gap: "2rem",
                    }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Link href="/projects" style={{ fontWeight: 'bold', fontSize: 25 }}>Projects</Link>
                        <Link href="/projects/orderSplitting" style={{ fontSize: 16 }}>NetSuite x Shopify Order Splitting</Link>
                        <Link href="/projects/trustpilotIntegration" style={{ fontSize: 16 }}>NetSuite x Trustpilot Integration</Link>
                        <Link href="/projects/ediShipNotice" style={{ fontSize: 16 }}>Auto-ASN Generation</Link>
                        <Link href="/projects/pick2Ship" style={{ fontSize: 16 }}>Pick2Ship</Link>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Link href="/about" style={{ fontWeight: 'bold', fontSize: 25 }}>About Me</Link>
                        <Link href="/about?scrollTo=technologies" style={{ fontSize: 16 }}>Technologies &amp; Frameworks</Link>
                        <Link href="/about?scrollTo=languages" style={{ fontSize: 16 }}>Languages</Link>
                        <Link href="/about?scrollTo=personalProjects" style={{ fontSize: 16 }}>Personal Projects</Link>
                    </div>
                    <div>
                        <Link href="/contact" style={{ fontWeight: 'bold', fontSize: 30 }}>Contact</Link>
                        <div style={{ display: "flex", flexDirection: 'column', gap: "0.5rem", marginTop: "0.25rem" }}>
                            <Link href="mailto:joshfordd2004@gmail.com" target="_blank" rel="noopener noreferrer">
                                joshfordd2004@gmail.com
                            </Link>
                            <div className='footer-icons' style={{ display: 'flex', gap: '1rem' }}>
                                <Link href="https://github.com/joshhhff" target="_blank" rel="noopener noreferrer">
                                    <FaGithub size={40} style={{ color: 'white' }} />
                                </Link>
                                <Link href="https://www.linkedin.com/in/josh-ford-1112a925b/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin size={40} style={{ color: 'white' }} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section: Image */}
                <div className="footer-image" style={{ marginLeft: 'auto' }}>
                    <Link href='/'>
                    <Image
                        src="/FooterImage-2.png"
                        alt="Josh Ford - Your Vision, Coded"
                        width={400}
                        height={100}
                    />
                    </Link>
                </div>
            </div>
            <br/>
            <p style={{ textAlign: 'left', color: 'grey' }}>&copy; {new Date().getFullYear()} Josh Ford - All Rights Reserved</p>
            <br/>
        </div>
    );
}
