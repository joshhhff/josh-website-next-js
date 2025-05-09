import ContactForm from "../components/contact-form";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import LoadingSpinner from "../components/loading";

export default function ContactMe() {
    return (
        <div className="page-container" style={{ height: '100%', width: '100%', paddingTop: '15vh', paddingLeft: '5vw', paddingRight: '5vw' }}>
            <div className="page-title" style={{ textAlign: 'left', width: '100%' }}>
                <h1 style={{ fontSize: 50, fontWeight: 'bold' }}>Contact Me</h1>
            </div>
            <hr style={{ backgroundColor: '#333333', borderTop: '2px solid #333333', marginTop: '2rem', marginBottom: '2rem' }} />
            <div className="contact-form" style={{ display: 'flex' }}>
                <div style={{ flex: 1, marginRight: '2rem' }}>
                    <p className="contact-info" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                        Feel free to reach out to me using the form or connect with me on social media. 
                        I look forward to hearing from you!
                    </p>
                    <div style={{ marginTop: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Follow Me</h3>
                        <ul style={{ listStyleType: 'none', padding: 0, marginTop: '1rem' }}>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                                <FaLinkedin size={30} style={{ color: 'white', marginRight: '1rem' }} />
                                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>
                                    LinkedIn
                                </a>
                            </li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                                <FaGithub size={30} style={{ color: 'white', marginRight: '1rem' }} />
                                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>
                                    GitHub
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <ContactForm />
            </div>
            <LoadingSpinner />
        </div>
    );
}
