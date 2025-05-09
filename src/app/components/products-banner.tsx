'use client';
import { motion } from "framer-motion";
import ProjectCard from "./project-card";
import ArrowLink from "./text-link-with-arrow";
import Utilities from "../services/utilities";

export default function ProductsBanner() {

    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%', marginTop: '2rem', backgroundImage: `url(${Utilities.getRandomBannerImage()})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ flex: '1 1 60%', alignContent: 'center', marginBottom: '1rem' }}>
                <h2 style={{ fontSize: 25, fontWeight: 'bold' }}>Pre-Built Customisations</h2>
                <p style={{ fontSize: 16, color: '#b2b2b2', marginBottom: '1rem' }}>
                    I also offer a range of pre-built customisations that are ready to be deployed into your NetSuite account. These customisations are designed to save you time and money, and are built to be easily integrated into your account in less than a day.
                </p>
                <ArrowLink 
                    text="View Products"
                    link=""
                />
            </div>
            <div style={{ flex: '1 1 35%', display: 'flex', justifyContent: 'center' }}>
                <ProjectCard 
                    title="NetSuite AI Chatbot" 
                    description="A custom AI Chatbot that is integrated into NetSuite to help users with common queries and tasks."
                    isProject={false}
                    isNew={true}
                    link='/products/aiChatbot'
                />
            </div>
        </motion.div>
    );
}