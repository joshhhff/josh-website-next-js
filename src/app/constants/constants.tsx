//import ProjectCard from "../components/project-card";
import Image from 'next/image';
import orderSplittingImage from '../../../public/childOrders.png'

export const ProjectKeys = {
    orderSplitting: {
        lastModified: '2025-05-12',
        title: 'NetSuite x Shopify Order Splitting',
        date: 'February 2025',
        timeSpent: '1 month + User Acceptance Testing',
        content: () => {
            return (
                <>
                   <div className="main-info-container" style={{ margin: '5vw', marginTop: 0 }}>
                        <h1 style={{ fontSize: 25, fontWeight: 'bold' }}>Project Summary</h1>
                        <br/>
                        <p style={{ color: '#b2b2b2' }}>This customisation split Sales Order imported into NetSuite from Shopify if there were a mix of Pre-Order items and items which were in stock. This allowed for better order management, and allowed items which were in stock to be shipped completely before the Pre-Order items.</p>
                        <br/>
                        <p style={{ color: '#b2b2b2' }}>{`The Child Orders would be related to the original imported Sales Order, which would become the Parent Order. The Parent Order would have a minimum of 2 Child Orders, the Pre-Order items and the in stock items. The Pre-Order items would also be split and grouped based on their Pre-Order date. All Child Orders would be visibile under a new custom subtab called "Child Orders" under the "Related Records" subtab of the Parent Order.`}</p>
                        <br/>
                        <Image 
                            src={orderSplittingImage} 
                            alt="Order Splitting" 
                            width={800} 
                            height={400} 
                            style={{ 
                                borderRadius: 5, 
                                maxWidth: '100%', 
                                height: 'auto' 
                            }} 
                        />
                        <br/>
                        <h1 style={{ fontSize: 25, fontWeight: 'bold' }}>Project Components</h1>
                        <br/>
                        <ul style={{ color: '#b2b2b2'}}>
                            <li>User Event Script - Script to mark incoming Sales Order for splitting (due to a delay in the Customer Deposit coming into NetSuite, the splitting could not be done in this script)</li>
                            <li>Map Reduce Script - Script which would split the Sales Order into separate Child Orders</li>
                            <li>Map Reduce Script - Script which would approve the Pre-Order Child Orders to be fulfillable with 3PL Partner</li>
                            <li>Saved Search - Saved Search for all Sales Orders pending splitting process</li>
                            <li>Saved Search - Saved Search for all Child Orders which relate to the Parent Order</li>
                            <li>Custom Fields - Numerous custom fields which would contribute to the functionality</li>
                        </ul>

                    </div>
                </>
            )
        }
    },
    pick2Ship: {
        lastModified: '2025-05-09',
        title: 'Pick2Ship - WMS',
        date: 'June 2024',
        timeSpent: '3 months + User Acceptance Testing',
        content: () => {
            return (
                <>
                    <div className="main-info-container" style={{ margin: '5vw', marginTop: 0 }}>
                        <h1 style={{ fontSize: 25, fontWeight: 'bold' }}>Project Summary</h1>
                        <br/>
                        <p style={{ color: '#b2b2b2' }}>Pick2Ship was designed to allow warehouse operators to skip Ship Central in the NetSuite Mobile App. Once users selected their Staging Bin and successfully picked their order in NetSuite WMS, a <b>Ship</b> button would be present for certain warehouses. They were then able to select how many boxes that would be included in the shipment, pack items into different boxes, and would then be presented with all shipment information before shipment confirmation.</p>
                        <br/>
                        <p style={{ color: '#b2b2b2' }}>After confirming the shipment details, the user would then be directed to a custom carrier integration built by another developer. This allowed them to register the orders and retrieve the shipping labels for the orders to be sent.</p>
                        <br/>
                        <h1 style={{ fontSize: 25, fontWeight: 'bold' }}>Project Components</h1>
                        <br/>
                        <ul style={{ color: '#b2b2b2'}}>
                            <li>Pick2Ship - Custom extension on WMS</li>
                            <li>Direct Carrier Integration - Handled by another developer</li>
                            <li>PrintNode Integration - Printing of Shipping Labels to Label Printers</li>
                            <li>Employee Preferred Printers - Allowing Warehouse Operators to set their preferred printers on their Employee record in NetSuite to automatically select and print to their printers on their workstations</li>
                        </ul>
                    </div>
                </>
            );
        }
    },
    trustpilotIntegration: {
        lastModified: '2025-05-09',
        title: 'NetSuite x TrustPilot Integration',
        date: 'January 2025',
        timeSpent: '40 hours + User Acceptance Testing',
        content: () => {
            return (
                <>
                    <div className="main-info-container" style={{ margin: '5vw', marginTop: 0 }}>
                        <h1 style={{ fontSize: 25, fontWeight: 'bold' }}>Project Summary</h1>
                        <br/>
                        <p style={{ color: '#b2b2b2' }}>This integration allowed automation of Service & Product Reviews being sent on a daily basis for Sales Orders that have been billed in NetSuite. This integration came in 2 parts, one for the Service & Product Reviews, and an additional integration for just the Service Reviews. Orders which did not have any valid items to qualify for the Product Review would instead qualify for the plain Service Review.</p>
                        <br/>
                        <h1 style={{ fontSize: 25, fontWeight: 'bold' }}>Project Components</h1>
                        <br/>
                        <ul style={{ color: '#b2b2b2'}}>
                            <li>Scheduled Background Script - Script responsible for sending requests to the TrustPilot API</li>
                            <li>Custom Screen (Suitelet) - Applies filters that require scripting, allowed user to view all valid orders to be sent to TrustPilot</li>
                            <li>Saved Search - Results prior to scripted filters of orders that may qualify for TrustPilot Reviews</li>
                            <li>Custom Record - Storing API Authentication tokens in NetSuite to re-use until they expire every 100 hours</li>
                        </ul>
                        <br/>
                    </div>
                </>
            );
        }
    },
    ediShipNotice: {
        lastModified: '2025-05-09',
        title: 'Auto-ASN Generation',
        date: 'October 2024',
        timeSpent: '1 month + User Acceptance Testing',
        content: () => {
            return (
                <>
                    <div className="main-info-container" style={{ margin: '5vw', marginTop: 0 }}>
                        <h1 style={{ fontSize: 25, fontWeight: 'bold' }}>Project Summary</h1>
                        <br/>
                        <p style={{ color: '#b2b2b2' }}>When Item Fulfillments were marked as shipping in NetSuite, an ASN (856 Advanced Shipping Notice) was generated and transferred via SFTP.</p>
                        <br/>
                        <h1 style={{ fontSize: 25, fontWeight: 'bold' }}>Project Components</h1>
                        <br/>
                        <ul style={{ color: '#b2b2b2'}}>
                            <li>User Event Script - Script responsible for generating ASNs. This would trigger when Item Fulfillment is updated to Shipped status</li>
                            <li>Custom Record - Custom record to store EDI Sequence numbers which increment based on every ASN sent</li>
                        </ul>
                        <br/>
                    </div>
                </>
            );
        }
    },
}

export const ProductKeys = {
    aiChatbot: {
        lastModified: '2025-05-11',
        title: 'NetSuite AI Chatbot',
        price: 'Coming Soon...',
        content: () => {
            return (
                <>
                    <div className="main-info-container" style={{ margin: '5vw', marginTop: 0 }}>
                        <h1 style={{ fontSize: 25, fontWeight: 'bold' }}>Product Information</h1>
                        <br/>
                        <p style={{ color: '#b2b2b2' }}>A custom AI chatbot integrated within NetSuite. Ask general queries, or ask about specific transactions within your NetSuite instance. This AI Chatbot allows users to ask about transactions, query employee information, or even query about inventory information for all or specific locations.</p>
                        <br/>
                        <h1 style={{ fontSize: 25, fontWeight: 'bold' }}>Preview</h1>
                        <video width="100%" height="auto" controls preload="none">
                            <source src="/ai-chatbot.mp4" type="video/mp4" />
                            Your browser does not support videos.
                        </video>
                    </div>
                </>
            );
        }
    }
}

export const PersonalProjectsKeys = {
    aiChatbot: {
        lastModified: '2025-05-11',
        title: 'NetSuite AI Chatbot',
        date: 'Coming Soon...',
        content: () => {
            return (
                <>
                    <div className="main-info-container" style={{ margin: '5vw', marginTop: 0 }}>
                        <h1 style={{ fontSize: 25, fontWeight: 'bold' }}>Product Information</h1>
                        <br/>
                        <p style={{ color: '#b2b2b2' }}>A custom AI chatbot integrated within NetSuite. Ask general queries, or ask about specific transactions within your NetSuite instance. This AI Chatbot allows users to ask about transactions, query employee information, or even query about inventory information for all or specific locations.</p>
                        <br/>
                        <h1 style={{ fontSize: 25, fontWeight: 'bold' }}>Preview</h1>
                        <video width="100%" height="auto" controls preload="none" poster="/NetSuite-AIChatbot-Poster.png">
                            <source src="/ai-chatbot.mp4" type="video/mp4" />
                            Your browser does not support videos.
                        </video>
                    </div>
                </>
            );
        }
    },
    sdfVscodeExtension: {
        lastModified: '2025-06-04',
        title: 'NetSuite SDF Object Organiser',
        date: 'Last Update: 4 June 2025',
        content: () => {
            return (
                <>
                    <div className="main-info-container" style={{ margin: '5vw', marginTop: 0 }}>
                        <h1 style={{ fontSize: 25, fontWeight: 'bold' }}>Information</h1>
                        <br/>
                        <p style={{ color: '#b2b2b2' }}>NetSuite SDF Object Organiser is a Visual Studio Code extension that helps you organise custom objects in your NetSuite SuiteCloud development projects. This extension allows you to group related objects into project folders, improving maintainability and structure when working with large customisation sets.</p>
                        <br/>
                        <h1 style={{ fontSize: 25, fontWeight: 'bold' }}>Preview</h1>
                        <video width="100%" height="auto" controls preload="none" poster="/netsuite-sdf-extension-poster.png">
                            <source src="/VsCode Extension Demo.mp4" type="video/mp4" />
                            Your browser does not support videos.
                        </video>
                    </div>
                </>
            )
        }
    },
    fitDiary: {
        lastModified: '2025-05-11',
        title: 'FitDiary - Mobile App',
        date: 'In Progress',
        content: () => {
            return (
                <>
                    <div className="main-info-container" style={{ margin: '5vw', marginTop: 0 }}>
                        <h1 style={{ fontSize: 25, fontWeight: 'bold' }}>Information</h1>
                        <br/>
                        <p style={{ color: '#b2b2b2' }}>FitDiary is a mobile application that I am developing for both iOS &amp; Android. I have chosen Flutter as the framework for this app, as it allows for creating applications from a single codebase. I have also linked this with Firebase, which is a BaaS (Backend as a Service) which was developed by Google.</p>
                        <br/>
                        <h1 style={{ fontSize: 25, fontWeight: 'bold' }}>Preview</h1>
                        <video width="100%" height="auto" controls preload="none" poster="/FitDiary-Banner-Black.png">
                            <source src="/FitDiary sign up process.mp4" type="video/mp4" />
                            Your browser does not support videos.
                        </video>
                    </div>
                </>
            );
        }
    }
}