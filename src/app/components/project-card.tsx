import { FaStar } from "react-icons/fa6";
import ArrowLink from "./text-link-with-arrow";

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
}

export default function ProjectCard({title, rating, date, description, isProject, isNew, hasLink, linkText, link, slideIn}: ProjectCardProps) {
    hasLink = hasLink === undefined ? true : hasLink;    // default to true if it is not stated
    slideIn = slideIn === undefined ? false : slideIn;    // default to false if it is not stated
    
    return (
        <div className={slideIn ? "project-card slide-in" : "project-card"} style={{ padding: '16px', borderRadius: '8px', border: '1px solid #333333', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <p style={{ fontSize: '1rem', color: '#b2b2b2', marginRight: '8px' }}>{date}</p>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{title}</h1>
                        {isNew && <span style={{ marginLeft: '8px', padding: '4px 8px', backgroundColor: '#007BFF', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold', color: 'white' }}>NEW</span>}
                    </div>
                </div>
                {!isProject && (
                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                        <FaStar />
                        <span style={{ marginLeft: '4px' }}>{rating}</span>
                    </div>
                )}
            </div>
            <p style={{ marginTop: '8px', marginBottom: '8px', color: '#b2b2b2' }}>{description}</p>

            {hasLink && <ArrowLink text={linkText !== undefined ? linkText : 'More Details'} link={link !== undefined ? link : ''} colour="white" />}
        </div>
    )
}