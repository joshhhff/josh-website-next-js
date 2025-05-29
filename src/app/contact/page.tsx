import ContactForm from "../components/contact-form";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
//import LoadingSpinner from "../components/loading";
import { MdEmail } from "react-icons/md";
import { DiGitBranch } from "react-icons/di";
import { FaRegCommentDots } from "react-icons/fa";
import Footer from "../components/footer";
import Link from "next/link";

export default function ContactMe() {
    const steps = [
        {
          icon: <MdEmail size={50} color="white" />,
          description: "Get in touch",
        },
        {
          icon: <FaRegCommentDots size={50} color="white" />,
          description: "Discuss your needs",
        },
        {
          icon: <DiGitBranch size={50} color="white" />,
          description: "Work begins",
        },
      ];
      
    const containerStyle: React.CSSProperties = {
      backgroundColor: "#2c2c2c",
      marginTop: 100,
      marginBottom: 50,
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "40px",
      borderRadius: 10,
    };
      
      const cardWrapperStyle: React.CSSProperties = {
        position: "relative",
      };
      
      const cardStyle: React.CSSProperties = {
        width: "280px",
        padding: "60px 20px 30px", // extra top padding for icon
        textAlign: "center",
        
      };
      
      const iconCircleStyle: React.CSSProperties = {
        position: "absolute",
        top: "-50px",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "#444141",
        borderRadius: "50%",
        width: 100,
        height: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      };
      
      const descriptionStyle: React.CSSProperties = {
        color: "white",
        fontSize: "20px",
        lineHeight: "1.5",
        fontWeight: "bold",
      };

      const apiKeyForEmail = process.env.CUSTOM_EMAIL_API_KEY || '';

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
                            <li className='contact-social-link' style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', width: 'fit-content' }}>
                                <Link href="https://www.linkedin.com/in/josh-ford-1112a925b/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>
                                <FaLinkedin size={30} style={{ color: 'white', marginRight: '1rem' }} />
                                    LinkedIn
                                </Link>
                            </li>
                            <li className='contact-social-link' style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', marginTop: '1rem', width: 'fit-content' }}>
                                <Link href="https://github.com/joshhhff" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>
                                <FaGithub size={30} style={{ color: 'white', marginRight: '1rem' }} />
                                    GitHub
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <ContactForm apiKey={apiKeyForEmail} />
            </div>
            <section style={containerStyle}>
                {steps.map((step, index) => (
                    <div key={index} style={cardWrapperStyle}>
                    <div style={iconCircleStyle}>{step.icon}</div>
                    <div style={cardStyle}>
                        <p style={descriptionStyle}>{step.description}</p>
                    </div>
                    </div>
                ))}
                </section>
            <Footer />
        </div>
    );
}
