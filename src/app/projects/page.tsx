import Button from "../components/button"
import ProjectCard from "../components/project-card"
import ArrowLink from "../components/text-link-with-arrow"
import Utilities from "../services/utilities"

export default function Projects() {
    return (
        <div className="page-container" style={{ height: '100%', width: '100%', paddingTop: '15vh', paddingLeft: '5vw', paddingRight: '5vw' }}>
            <div className="page-title" style={{ textAlign: 'left', width: '100%' }}>
                <h1 style={{ fontSize: 50, fontWeight: 'bold' }}>Projects</h1>
                <h2 style={{ fontSize: 20, color: '#b2b2b2' }}>Get an idea of some of the projects that I have deployed to different companies NetSuite accounts</h2>
            </div>
            <hr style={{ backgroundColor: '#333333', borderTop: '2px solid #333333', marginTop: '2rem', marginBottom: '2rem' }} />
            <h2 style={{ fontSize: 25, marginBottom: '1rem', fontWeight: 'bold' }}>Top Rated Projects</h2>
            <div className="project-cards" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '100%', gap: '2rem' }}>
                <div style={{ width: '45%' }}>
                    <ProjectCard 
                        title="Pick2Ship - WMS" 
                        date="June 2024"
                        description={
                            <>
                                A large addition to standard NetSuite WMS. This organisation needed a way to skip NetSuite's Ship Central for certain warehouses, and wanted the ability to ship orders directly after picking in WMS.
                                <br /><br />
                                This allowed users to pack items into boxes straight after selecting the Staging Location when picking, and then be giving all shipment details related to that order.
                                <br/><br/>
                                To finish it off, it then also linked into a custom built direct Carrier Integration where users could select their chosen carrier, register the shipment with the carrier, and retrieve the number of shipping labels needed.
                            </>
                        }
                        isProject={true}
                        link='projects/pick2Ship'
                    />
                </div>
                <div className="stacked-project-cards" style={{ width: '45%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', gap: '2rem' }}>
                    <ProjectCard 
                        title="NetSuite x TrustPilot Integration" 
                        date="January 2025"
                        description="A custom integration which allowed my client to automatically send out Service & Product Reviews for their Sales Orders to customers."
                        isProject={true}
                        link="/projects/trustpilotIntegration"
                    />
                    <ProjectCard 
                        title="EDI 856 Ship Notice Generation" 
                        date="September 2024"
                        description="When Item Fulfillments were shipped in NetSuite, an 856 Ship Notice EDI file would be generated including all shipment information, and then transferred via SFTP."
                        isProject={true}
                        link='projects/ediShipNotice'
                    />
                </div>
            </div>
            <br/>
            <div style={{ marginLeft: '2.5vw', marginRight: '2.5vw' }}>
                <ProjectCard 
                    title="NetSuite x Shopify Order Splitting"
                    date="February 2025"
                    description="When Shopify orders are imported into NetSuite, they are split into multiple child orders depending on stock availability and pre-order status."
                    isProject={true}
                    link=''
                />
            </div>
            <hr style={{ backgroundColor: '#333333', borderTop: '2px solid #333333', marginTop: '2rem', marginBottom: '2rem' }} />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: '2rem', backgroundImage: `url(${Utilities.getRandomBannerImage()})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ float: 'right', width: '90%', alignContent: 'center' }}>
                    <h2 style={{ fontSize: 25, fontWeight: 'bold' }}>Pre-Built Customisations</h2>
                    <p style={{ fontSize: 16, color: '#b2b2b2', marginBottom: '1rem' }}>
                        I also offer a range of pre-built cusomtisations that are ready to be deployed into your NetSuite account. These customisations are designed to save you time and money, and are built to be easily integrated into your account in less than a day.
                    </p>
                    <ArrowLink 
                        text="View Prodcuts"
                        link=""
                    />
                </div>
                <div>
                    <ProjectCard 
                        title="NetSuite AI Chatbot" 
                        rating={5}
                        description="A custom AI Chatbot that is integrated into NetSuite to help users with common queries and tasks."
                        isProject={false}
                        isNew={true}
                    />
                </div>
            </div>
            <hr style={{ backgroundColor: '#333333', borderTop: '2px solid #333333', marginTop: '2rem', marginBottom: '2rem' }} />
            <h2 style={{ fontSize: 25, marginBottom: '1rem', fontWeight: 'bold' }}>And that's not it!</h2>
            <div className="more-projects" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', gap: '2rem' }}>
                <div className="column-1" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '33%' }}>
                    <ProjectCard 
                        title="Auto-Populating values - WMS/Ship Central" 
                        date="Commonly Requested"
                        description="Auto-populating values in WMS and Ship Central to save time and reduce errors."
                        isProject={true}
                        hasLink={false}
                        slideIn={true}
                    />
                    <ProjectCard 
                        title="Custom PDF Printing of Item Receipts" 
                        date="November 2023"
                        description="Adding PDF printing functionality to Item Receipts in NetSuite."
                        isProject={true}
                    />
                    <ProjectCard 
                        title="Printing Item Labels in WMS Picking" 
                        date="April 2024"
                        description="Warehouse Operators being able to print item labels while picking in WMS. Similar to functionality present in Purchase Order Receiving."
                        isProject={true}
                    />
                </div>
                <div className="column-2" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '33%' }}>
                    <ProjectCard 
                            title="ODBC - NetSuite x PowerBi" 
                            date="August 2024"
                            description="Setting up and configuring ODBC connections to allow users to connect their NetSuite data to PowerBi."
                            isProject={true}
                            hasLink={false}
                        />
                        <ProjectCard 
                            title="Custom Label Sheet Printing from Item Record" 
                            date="July 2024"
                            description="Users can print A4 sheets of item labels from the Item Record in NetSuite."
                            isProject={true}
                        />
                        <ProjectCard 
                            title="Direct Carrier Integrations" 
                            date="Commonly Requested"
                            description="Directly integrating NetSuite to popular carriers such as Royal Mail, DPD, FedEx & more."
                            isProject={true}
                        />
                </div>
                <div className="column-3" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '33%' }}>
                    <ProjectCard 
                            title="Custom PDF Printing of Vendor Return Authorisations" 
                            date="March 2024"
                            description="Adding PDF printing functionality to VRMAs in NetSuite due to no standard being available."
                            isProject={true}
                            hasLink={false}
                        />
                        <ProjectCard 
                            title="Custom PDF Templates" 
                            date="Commonly Requested"
                            description="Customising PDF templates in NetSuite for Sales Orders, Purchase Orders, Invoices & more."
                            isProject={true}
                        />
                        <ProjectCard 
                            title="Integration with 3rd Party Systems" 
                            date="Commonly Requested"
                            description="Integrate your NetSuite account with any 3rd party system, increasing the efficiency and effectiveness of being able to manage your business centrally from NetSuite."
                            isProject={true}
                        />
                </div>
            </div>
            <hr style={{ backgroundColor: '#333333', borderTop: '2px solid #333333', marginTop: '2rem', marginBottom: '2rem' }} />
            <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', justifyContent: 'space-between', width: '100%', marginTop: '2rem', marginBottom: '2rem', backgroundImage: `url(${Utilities.getRandomBannerImage()})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ float: 'right', width: '90%', alignContent: 'center' }}>
                    <h2 style={{ fontSize: 25, fontWeight: 'bold' }}>Need something else?</h2>
                    <p style={{ fontSize: 16, color: '#b2b2b2', marginBottom: '1rem' }}>
                        Feel free to reach out to me if you have a project in mind that you would like to discuss. Start tailoring your NetSuite account to your needs today!
                    </p>
                    <ArrowLink 
                        text="Contact Me"
                        link=""
                    />
                </div>
                <div style={{ width: '60%' }}>
                    <ProjectCard 
                        title="Client Testimonial" 
                        rating={5}
                        description='"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."'
                        isProject={false}
                        hasLink={false}
                    />
                </div>
            </div>
            <hr style={{ backgroundColor: '#333333', borderTop: '2px solid #333333', marginTop: '2rem', marginBottom: '2rem' }} />
            <h2 style={{ fontSize: 25, marginBottom: '1rem', fontWeight: 'bold' }}>My Experience</h2>
        </div>
    );
}
