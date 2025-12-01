"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/project-card"
import Footer from "../components/footer";

// Define project data with categories
const additionalProjects = [
    {
        title: "Auto-Populating values - WMS/Ship Central",
        date: "Commonly Requested",
        description: "Auto-populating values in WMS and Ship Central to save time and reduce errors.",
        categories: ["WMS", "Automation"]
    },
    {
        title: "Auto Printing of PDF Documents",
        date: "April 2025",
        description: "Custom Item Fulfillment PDF Despatch Note would be printed to user's preferred printer when packing Item Fulfillments in either the UI or Ship Central.",
        categories: ["WMS", "Automation"]
    },
    {
        title: "NetSuite x Shopify Order Splitting",
        date: "February 2025",
        description: "Splitting imported Shopify Sales Orders into multiple Child Orders based on Pre-Order items and stock availability dates.",
        categories: ["Integrations", "Automation"]
    },
    {
        title: "Printing Item Labels in WMS Picking",
        date: "April 2024",
        description: "Warehouse Operators being able to print item labels while picking in WMS. Similar to functionality present in Purchase Order Receiving.",
        categories: ["WMS"]
    },
    {
        title: "ODBC - NetSuite x PowerBi",
        date: "August 2024",
        description: "Setting up and configuring ODBC connections to allow users to connect their NetSuite data to PowerBi.",
        categories: ["Integrations", "Reporting"]
    },
    {
        title: "Custom Label Sheet Printing from Item Record",
        date: "July 2024",
        description: "Users can print A4 sheets of item labels from the Item Record in NetSuite.",
        categories: ["Automation"]
    },
    {
        title: "Multi-Tiered Purchase Order Approvals",
        date: "October 2025",
        description: "Workflow-based multi-tiered Purchase Order approval process based on different conditions such as total amount, department, location, monetary limits, and more.",
        categories: ["Automation"]
    },
    {
        title: "Email Automations",
        date: "November 2024",
        description: "Automating emails to be sent to customers based on stock availability, schedules or events.",
        categories: ["Automation"]
    },
    {
        title: "Custom PDF Printing of Vendor Return Authorisations",
        date: "March 2024",
        description: "Adding PDF printing functionality to VRMAs in NetSuite due to no standard being available.",
        categories: ["Automation"]
    },
    {
        title: "Custom PDF Printing of Item Receipts",
        date: "November 2023",
        description: "Adding PDF printing functionality to Item Receipts in NetSuite.",
        categories: ["Automation"]
    },
    {
        title: "Integration with 3rd Party Systems",
        date: "Commonly Requested",
        description: "Integrate your NetSuite account with any 3rd party system, increasing the efficiency and effectiveness of being able to manage your business centrally from NetSuite.",
        categories: ["Integrations"]
    },
    {
        title: "Auto-Generating Lot Numbers on Inbound Receipts",
        date: "Commonly Requested",
        description: "Automatically generate lot numbers for inbound receipts in NetSuite, streamlining the receiving process and improving inventory management. Also included logic on pre-determined criteria for auto-assigning Inventory Statuses of received lots.",
        categories: ["WMS", "Automation"]
    }
];

export default function ProjectsClient() {
    const [selectedCategory, setSelectedCategory] = useState("All Projects");
    
    // Filter projects based on selected category
    const filteredProjects = selectedCategory === "All Projects" 
        ? additionalProjects 
        : additionalProjects.filter(project => project.categories.includes(selectedCategory));

    // Distribute filtered projects into 3 columns
    const getColumnProjects = (columnIndex: number) => {
        return filteredProjects.filter((_, index) => index % 3 === columnIndex);
    };

    return (
        <div className="page-container" style={{ height: '100%', width: '100%', paddingTop: '15vh', paddingLeft: '5vw', paddingRight: '5vw' }}>
            {/* Header Section */}
            <div className="page-title" style={{ textAlign: 'left', width: '100%' }}>
                <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ fontSize: 50, fontWeight: 'bold' }}>Projects</motion.h1>
                <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} style={{ fontSize: 20, color: '#b2b2b2' }}>Get an idea of some of the projects that I have deployed to different NetSuite accounts</motion.h2>
            </div>
            
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <hr style={{ backgroundColor: '#333333', borderTop: '2px solid #333333', marginTop: '2rem', marginBottom: '2rem' }} />
            </motion.div>

            {/* Stats Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1.5rem',
                    marginBottom: '3rem'
                }}
            >
                {[
                    { number: '20+', label: 'Projects Completed' },
                    { number: '10+', label: 'NetSuite Accounts' },
                    { number: '2+', label: 'Years Experience' },
                ].map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        style={{
                            background: 'linear-gradient(to top right, #0e0e0e, #2c2b2b)',
                            border: '1px solid #333333',
                            borderRadius: '12px',
                            padding: '1.5rem',
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
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff', marginBottom: '0.5rem' }}>
                            {stat.number}
                        </div>
                        <div style={{ fontSize: '0.875rem', color: '#b2b2b2' }}>
                            {stat.label}
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Top Rated Projects */}
            <div id="featured">
                <motion.h2 
                    className='section-title'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Featured Projects
                </motion.h2>
            </div>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} style={{ fontSize: 16, color: '#b2b2b2', marginBottom: '2rem' }}>
                {"Highlighting some of the most impactful NetSuite customisations I've delivered"}
            </motion.p>
            
            <div className="project-container">
                <div className="left-project">
                    {/* <ProjectCard 
                        title="Custom Replenishments" 
                        date="August 2025"
                        slideIn={true}
                        slideInDirection='left'
                        description={
                            <>
                                {"A custom system which checks a Wave upon creation to check that there is enough stock in picking locations for each pick task. If there isn't enough stock, the system will create a replenishment task to move stock from a storage location to a picking location. This ensures that warehouse operators always have enough stock in picking locations to fulfil orders efficiently. The Wave is then only released to the warehouse operators once all replenishment tasks are completed."}
                                <br /><br />
                                {"This also allows for monitoring of stock levels in picking locations, and being able to view items in picking locations which are below the minimum quantity threshold. Warehouse Managers can then create replenishment tasks directly from this list for these items in picking locations to be replenished, ensuring that there is always enough stock in picking locations to fulfil orders."}
                            </>
                        }
                        isProject={true}
                        link='projects/orderSplitting'
                        hasLink={false}
                    /> */}
                    <ProjectCard 
                        title="NetSuite x TrustPilot Integration" 
                        date="January 2025"
                        description="A custom integration which allowed my client to automatically send out Service & Product Reviews for their Sales Orders to customers. If item records didn't include a product image, then they wouldn't qualify for a Product Review and a Service Review would be sent instead."
                        isProject={true}
                        slideIn={true}
                        differentForMobile={true}
                        topRated={true}
                        link="/projects/trustpilotIntegration"
                        hasLink={false}
                    />
                </div>
                <div className="right-projects">
                    
                    <ProjectCard 
                        title="Bulk Purchase Order Email Sending" 
                        date="July 2025"
                        description="A custom screen in NetSuite which allowed users to select multiple Purchase Orders and send emails all at once with either a PDF or CSV attachment. Grouping functionality also allowed users to send multiple Purchase Orders of the same vendor in one single email."
                        isProject={true}
                        slideIn={true}
                        differentForMobile={true}
                        topRated={true}
                        link='projects/ediShipNotice'
                        hasLink={false}
                    />
                </div>
            </div>

            <div className="full-width-project">
                <ProjectCard 
                    title="Pick2Ship - WMS"
                    date="June 2024"
                    description='A large addtion to standard NetSuite WMS which allowed warehouse operators to skip the packing process in Ship Central and ship directly after picking in WMS. Warehouse operators could choose to ship once they have selected their Staging Bin, from there select number of boxes, pack items into boxes, and then presented with shipping details before progressing further.'
                    isProject={true}
                    link='projects/pick2Ship'
                    slideIn={true}
                    slideInDirection='left'
                    hasLink={false}
                />
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <hr style={{ backgroundColor: '#333333', borderTop: '2px solid #333333', marginTop: '2rem', marginBottom: '2rem' }} />
            </motion.div>

            {/* More Projects Section with Categories */}
            <div id='additional'>
                <motion.h2 
                    className='section-title'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Additional Projects
                </motion.h2>
            </div>
            <p style={{ fontSize: 16, color: '#b2b2b2', marginBottom: '2rem' }}>
                A collection of NetSuite enhancements I have delivered across various business functions
            </p>

            {/* Category Filter Buttons */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                    display: 'flex',
                    gap: '1rem',
                    flexWrap: 'wrap',
                    marginBottom: '2rem'
                }}
            >
                {['All Projects', 'WMS', 'Integrations', 'Automation', 'Reporting'].map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        style={{
                            padding: '0.5rem 1.25rem',
                            backgroundColor: category === selectedCategory ? '#444' : 'transparent',
                            border: '1px solid #333333',
                            borderRadius: '50px',
                            color: category === selectedCategory ? '#fff' : '#b2b2b2',
                            fontSize: '0.875rem',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = '#666';
                            if (category !== selectedCategory) {
                                e.currentTarget.style.backgroundColor = '#2a2a2a';
                                e.currentTarget.style.color = '#fff';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (category !== selectedCategory) {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.borderColor = '#333333';
                                e.currentTarget.style.color = '#b2b2b2';
                            } else {
                                e.currentTarget.style.borderColor = '#333333';
                            }
                        }}
                    >
                        {category}
                    </button>
                ))}
            </motion.div>

            <div className="more-projects" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '2rem' }}>
                {[0, 1, 2].map((columnIndex) => (
                    <div 
                        key={columnIndex}
                        className={`column-${columnIndex + 1}`} 
                        style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '33%' }}
                    >
                        {getColumnProjects(columnIndex).map((project, index) => (
                            <ProjectCard 
                                key={`${project.title}-${index}`}
                                title={project.title}
                                date={project.date}
                                description={project.description}
                                isProject={true}
                                hasLink={false}
                                slideIn={true}
                                differentForMobile={true}
                                topRated={false}
                            />
                        ))}
                    </div>
                ))}
            </div>

            <br/><br/>
            <Footer />
        </div>
    );
}