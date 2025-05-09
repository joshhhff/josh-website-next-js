'use client';
import { FaStar } from "react-icons/fa6";
import ArrowLink from "./text-link-with-arrow";
import { motion } from "framer-motion";

interface ProjectCardProps {
    title: string;
    rating?: number;
    date?: string;
    description: React.ReactNode;
    isProject: boolean;
    isNew?: boolean;
    hasLink?: boolean;
    linkText?: string;
    link?: string;
    slideIn?: boolean;
    differentForMobile?: boolean;
    topRated?: boolean;
    slideInDirection?: 'left' | 'right' | 'up' | 'down';
}

export default function ProjectCard({title, rating, date, description, isProject, isNew, hasLink, linkText, link, slideIn, differentForMobile, topRated, slideInDirection}: ProjectCardProps) {
    hasLink = hasLink === undefined ? true : hasLink;    // default to true if it is not stated

    const getSlideInAnimation = () => {
        if (!slideIn) return { initial: {}, animate: {} };

        if (slideIn && differentForMobile) {
            const mobileDirections = {
                left: { x: -50, y: 0 },
                right: { x: 50, y: 0 },
                up: { x: 0, y: -50 },
                down: { x: 0, y: 50 },
            };

            let mobileDirection;

            if (topRated) {
                if (window.innerWidth < 768) {
                    mobileDirection = mobileDirections.left;
                } else {
                    mobileDirection = mobileDirections.right;
                }
            } else {
                if (window.innerWidth < 768) {
                    mobileDirection = mobileDirections.left;
                } else {
                    mobileDirection = mobileDirections.down;
                }
            }
    
            return {
                initial: { opacity: 0, ...mobileDirection },
                animate: { opacity: 1, x: 0, y: 0 },
            };
        } else {
            const directions = {
                left: { x: -50, y: 0 },
                right: { x: 50, y: 0 },
                up: { x: 0, y: -50 },
                down: { x: 0, y: 50 },
            };
    
            const direction = slideInDirection ? directions[slideInDirection] : { x: 0, y: 50 };
    
            return {
                initial: { opacity: 0, ...direction },
                animate: { opacity: 1, x: 0, y: 0 },
            };
        }
    };

    const animation = getSlideInAnimation();

    return (
        <motion.div 
            initial={animation.initial}
            whileInView={animation.animate}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="project-card" 
            style={{ padding: '16px', borderRadius: '8px', border: '1px solid #333333', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <p style={{ fontSize: '1rem', color: '#b2b2b2', marginRight: '8px' }}>{date}</p>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{title}</h1>
                        {isNew && <span style={{ marginLeft: '8px', padding: '4px 8px', backgroundColor: '#007BFF', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold', color: 'white' }}>Coming Soon</span>}
                    </div>
                </div>
                {!isProject && rating && (
                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                        <FaStar />
                        <span style={{ marginLeft: '4px' }}>{rating}</span>
                    </div>
                )}
            </div>
            <p style={{ marginTop: '8px', marginBottom: '8px', color: '#b2b2b2' }}>{description}</p>

            {hasLink && <ArrowLink text={linkText !== undefined ? linkText : 'More Details'} link={link !== undefined ? link : ''} colour="white" />}
        </motion.div>
    )
}