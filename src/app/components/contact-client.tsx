'use client';
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { DiGitBranch } from "react-icons/di";
import { FaRegCommentDots } from "react-icons/fa";
import ContactForm from "../components/contact-form";
import Footer from "../components/footer";

interface ContactClientProps {
  apiKey: string;
}

export default function ContactClient({ apiKey }: ContactClientProps) {
  const steps = [
    {
      icon: <MdEmail size={40} color="white" />,
      title: "Get in Touch",
      description: "Reach out via the contact form or social media",
    },
    {
      icon: <FaRegCommentDots size={40} color="white" />,
      title: "Discuss Your Needs",
      description: "Share your project requirements and goals",
    },
    {
      icon: <DiGitBranch size={40} color="white" />,
      title: "Work Begins",
      description: "Development starts on your custom solution",
    },
  ];

  return (
    <div className="page-container" style={{ height: '100%', width: '100%', paddingTop: '15vh', paddingLeft: '5vw', paddingRight: '5vw' }}>
      {/* Header */}
      <div className="page-title" style={{ textAlign: 'left', width: '100%' }}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: 50, fontWeight: 'bold' }}
        >
          Contact Me
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{ fontSize: 20, color: '#b2b2b2' }}
        >
          {"Let's discuss how I can help!"}
        </motion.h2>
      </div>

      <hr style={{ backgroundColor: '#333333', borderTop: '2px solid #333333', marginTop: '2rem', marginBottom: '2rem' }} />

      {/* Main Content */}
      <div className="contact-form" style={{ display: 'flex', gap: '3rem', marginBottom: '4rem' }}>
        {/* Left Side - Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ flex: 1 }}
        >
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Get In Touch</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#b2b2b2', marginBottom: '2rem' }}>
            {"Feel free to reach out using the form or connect with me on social media. Whether you need help with software customisations, integrations, performance improvements, or have a new project in mind, I'd love to hear from you!"}
          </p>

          {/* Social Links */}
          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: '#fff' }}>
              Connect With Me
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <motion.a
                href="https://www.linkedin.com/in/josh-ford-1112a925b/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  background: 'linear-gradient(to top right, #0e0e0e, #2c2b2b)',
                  border: '1px solid #333333',
                  borderRadius: '12px',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1.125rem',
                  transition: 'all 0.3s ease',
                  width: 'fit-content',
                  minWidth: '200px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#666';
                  e.currentTarget.style.backgroundColor = '#1a1a1a';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#333333';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <FaLinkedin size={28} />
                <span>LinkedIn</span>
              </motion.a>

              <motion.a
                href="https://github.com/joshhhff"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  background: 'linear-gradient(to top right, #0e0e0e, #2c2b2b)',
                  border: '1px solid #333333',
                  borderRadius: '12px',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1.125rem',
                  transition: 'all 0.3s ease',
                  width: 'fit-content',
                  minWidth: '200px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#666';
                  e.currentTarget.style.backgroundColor = '#1a1a1a';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#333333';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <FaGithub size={28} />
                <span>GitHub</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ flex: 1 }}
        >
          <ContactForm apiKey={apiKey} />
        </motion.div>
      </div>

      <hr style={{ backgroundColor: '#333333', borderTop: '2px solid #333333', marginTop: '2rem', marginBottom: '2rem' }} />

      {/* Process Section */}
      <h2 className="section-title" style={{ marginBottom: '2rem' }}>How It Works</h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        marginBottom: '4rem'
      }}>
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
              background: 'linear-gradient(to top right, #0e0e0e, #2c2b2b)',
              border: '1px solid #333333',
              borderRadius: '16px',
              padding: '2rem',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#666';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#333333';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{
              width: '80px',
              height: '80px',
              margin: '0 auto 1.5rem',
              backgroundColor: '#444141',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #555'
            }}>
              {step.icon}
            </div>
            
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem', color: '#fff' }}>
              {step.title}
            </h3>
            
            <p style={{ fontSize: '0.95rem', color: '#b2b2b2', lineHeight: 1.6 }}>
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
      
      <br/><br/>
      <Footer />
    </div>
  );
}