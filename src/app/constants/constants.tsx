//import ProjectCard from "../components/project-card";

export const ProjectKeys = {
    pick2Ship: {
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
                        <br/>
                        <h1 style={{ fontSize: 25, textAlign: 'center', fontWeight: 'bold' }}>Related Projects</h1>
                        <br/>

                    </div>
                </>
            );
        }
    },
    trustpilotIntegration: {
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