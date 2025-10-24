"use client";
import { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, Code, Database, Smartphone, Cloud } from "lucide-react";
import Footer from "../components/footer";

const projects = [
  {
    title: "NetSuite SDF Object Organiser",
    description: "A Visual Studio Code extension which allows NetSuite SDF Developers to easily organise their SDF objects. This allows for easily organising their SDF objects into related folders, adding object references to the deploy.xml file, and refreshing the deploy.xml file for correct object references.",
    link: "about/sdfVscodeExtension",
    image: "/placeholder2.png",
    tags: ["Visual Studio Code", "NetSuite", "SuiteCloud Development Framework", "DevTools"]
  },
  {
    title: "FitDiary",
    description: "FitDiary is a fitness tracker app which I will eventually release on Android & iOS. The app allows users to track their workouts, set goals, and monitor their progress over time.",
    link: "about/fitDiary",
    image: "/placeholder3.png",
    tags: ["Flutter", "Firebase", "Mobile", "Fitness"]
  },
  {
    title: "CloudOps",
    description: "CloudOps is a small web application which I am building using Next.js, TypeScript, Prisma ORM, PostgreSQL and AWS RDS. So far, the application allows users to track their inventory of items, with future development planned on reporting and analytics, as well as fulfilling orders in an ERP style application.",
    link: "",
    image: "/placeholder3.png",
    tags: ["Next.js", "AWS", "ERP"]
  },
];

const techCategories = [
  {
    title: "ERP & Backend",
    icon: <Database size={24} />,
    skills: ["NetSuite", "SuiteScript", "Node.js", "Express.js", "SQL", "PostgreSQL", "Prisma ORM"]
  },
  {
    title: "Web Development",
    icon: <Code size={24} />,
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS"]
  },
  {
    title: "Mobile Development",
    icon: <Smartphone size={24} />,
    skills: ["Flutter", "Dart"]
  },
  {
    title: "Other Technologies",
    icon: <Cloud size={24} />,
    skills: ["Oracle Cloud Infrastructure", "C#",  "ASP.NET Core", "Amazon Web Services", "Firebase", "Java", "Python"]
  }
];

export default function AboutClient() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    
    if (info.offset.x > swipeThreshold) {
      // Swiped right - go to previous
      prevSlide();
    } else if (info.offset.x < -swipeThreshold) {
      // Swiped left - go to next
      nextSlide();
    }
  };

  return (
    <div className="page-container" style={{ height: '100%', width: '100%', paddingTop: '15vh', paddingLeft: '5vw', paddingRight: '5vw' }}>
      {/* Hero Section */}
      <div className="page-title" style={{ textAlign: 'left', width: '100%' }}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: 50, fontWeight: 'bold' }}
        >
          About Me
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{ fontSize: 20, color: '#b2b2b2' }}
        >
          Get to know more about my experience and expertise
        </motion.h2>
      </div>

      <hr style={{ backgroundColor: '#333333', borderTop: '2px solid #333333', marginTop: '2rem', marginBottom: '2rem' }} />

      {/* About Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ marginBottom: '3rem' }}
      >
        <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: '#cbd5e1', marginBottom: '1.5rem' }}>
          I am primarily a <span style={{ color: '#fff', fontWeight: 600 }}>NetSuite Developer</span> with a passion for building efficient custom solutions. My current area of expertise is building WMS Enhancements allowing for more efficient warehouse management and custom processes that fit the needs of a business.
        </p>
        
        <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#b2b2b2', marginBottom: '2rem' }}>
          I am also a Degree Apprentice working for an Oracle Alliance Partner who specialises in NetSuite implementations. During my apprenticeship I have been able to work on a wide range of projects, and have been involved in several NetSuite implementations.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {["SuiteScript 2.1", "NetSuite Workflows", "System Integrations", "WMS Solutions"].map((skill) => (
            <span
              key={skill}
              style={{
                backgroundColor: 'rgba(50, 50, 50, 0.7)',
                border: '1px solid rgba(80, 80, 80, 0.5)',
                padding: '0.6rem 1.2rem',
                borderRadius: '50px',
                fontSize: '0.9rem',
                fontWeight: 500,
                color: '#e2e8f0'
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      <hr style={{ backgroundColor: '#333333', borderTop: '2px solid #333333', marginTop: '2rem', marginBottom: '2rem' }} />

      {/* Technologies Section */}
      <h2 className="section-title">Technologies I Work With</h2>
      <p style={{ fontSize: 16, color: '#b2b2b2', marginBottom: '2rem' }}>
        I have experience with a wide range of technologies spanning ERP systems, web development, mobile applications, and cloud services.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "2rem",
        marginBottom: "3rem"
      }}>
        {techCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            style={{
              background: "linear-gradient(to top right, #0e0e0e, #2c2b2b)",
              padding: "2rem",
              borderRadius: "16px",
              border: "1px solid #333333",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#666";
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#333333";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1.5rem",
              color: "#999"
            }}>
              {category.icon}
              <h3 style={{ fontSize: "1.25rem", fontWeight: 600 }}>
                {category.title}
              </h3>
            </div>
            
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem"
            }}>
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    backgroundColor: "#252525",
                    padding: "0.5rem 1rem",
                    borderRadius: "8px",
                    fontSize: "0.875rem",
                    color: "#cbd5e1",
                    border: "1px solid #333"
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <hr style={{ backgroundColor: '#333333', borderTop: '2px solid #333333', marginTop: '2rem', marginBottom: '2rem' }} />

      {/* Projects Section */}
      <h2 className="section-title">Personal Projects</h2>
      <p style={{ fontSize: 16, color: '#b2b2b2', marginBottom: '2rem' }}>
        A showcase of my personal development work
      </p>

      <div className="projects-carousel-container" style={{ position: "relative", width: "100%", marginBottom: "3rem", padding: "0 3.5rem" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            style={{
              background: "linear-gradient(to top right, #0e0e0e, #2c2b2b)",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid #333333",
              boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
              cursor: "grab"
            }}
            whileTap={{ cursor: "grabbing" }}
          >
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 0
            }}>
              <div style={{ padding: "2rem" }}>
                <div style={{
                  display: "flex",
                  gap: "0.5rem",
                  marginBottom: "1.5rem",
                  flexWrap: "wrap"
                }}>
                  {projects[current].tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "0.75rem",
                        padding: "0.375rem 0.75rem",
                        backgroundColor: "rgba(70, 70, 70, 0.5)",
                        color: "#c0c0c0",
                        borderRadius: "6px",
                        border: "1px solid rgba(100, 100, 100, 0.3)"
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 style={{
                  fontSize: "1.75rem",
                  fontWeight: 700,
                  marginBottom: "1rem"
                }}>
                  {projects[current].title}
                </h3>
                
                <p style={{
                  fontSize: "1rem",
                  color: "#94a3b8",
                  lineHeight: 1.7,
                  marginBottom: "2rem"
                }}>
                  {projects[current].description}
                </p>
                
                {projects[current].link !== "" && (
                  <a
                    href={projects[current].link}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "#aaa",
                      fontSize: "1rem",
                      fontWeight: 600,
                      textDecoration: "none",
                      transition: "all 0.2s"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.gap = "0.75rem";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.gap = "0.5rem";
                      e.currentTarget.style.color = "#aaa";
                    }}
                  >
                    View Project
                    <span style={{ fontSize: "1.25rem" }}>→</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons - Desktop Only */}
        <button
          onClick={prevSlide}
          className="desktop-nav-button"
          style={{
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translateY(-50%)",
            backgroundColor: "#1a1a1a",
            border: "1px solid #333333",
            padding: "0.75rem",
            borderRadius: "50%",
            cursor: "pointer",
            transition: "all 0.3s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            zIndex: 10
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#555";
            e.currentTarget.style.borderColor = "#666";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#1a1a1a";
            e.currentTarget.style.borderColor = "#333333";
          }}
        >
          <ChevronLeft size={20} />
        </button>
        
        <button
          onClick={nextSlide}
          className="desktop-nav-button"
          style={{
            position: "absolute",
            top: "50%",
            right: "0",
            transform: "translateY(-50%)",
            backgroundColor: "#1a1a1a",
            border: "1px solid #333333",
            padding: "0.75rem",
            borderRadius: "50%",
            cursor: "pointer",
            transition: "all 0.3s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            zIndex: 10
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#555";
            e.currentTarget.style.borderColor = "#666";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#1a1a1a";
            e.currentTarget.style.borderColor = "#333333";
          }}
        >
          <ChevronRight size={20} />
        </button>

        {/* Dots */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
          gap: "0.75rem"
        }}>
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              style={{
                width: index === current ? "32px" : "12px",
                height: "12px",
                borderRadius: "6px",
                border: "none",
                backgroundColor: index === current ? "#666" : "#333",
                cursor: "pointer",
                transition: "all 0.3s"
              }}
            />
          ))}
        </div>
        
        {/* Mobile-responsive CSS */}
        <style jsx>{`
          @media (max-width: 768px) {
            .desktop-nav-button {
              display: none !important;
            }
            .projects-carousel-container {
              padding: 0 !important;
            }
          }
        `}</style>
      </div>
      
      <Footer />
    </div>
  );
}