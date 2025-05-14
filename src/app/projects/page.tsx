//import ProductsBanner from "../components/products-banner";
import ProjectCard from "../components/project-card"
//import ArrowLink from "../components/text-link-with-arrow"
//import Utilities from "../services/utilities"
import Footer from "../components/footer";
import AnimatedText from "../components/animated-text";

// prevent pre-rendering of this page
//export const dynamic = 'force-dynamic'

export default function Projects() {
    return (
        <div className="page-container" style={{ height: '100%', width: '100%', paddingTop: '15vh', paddingLeft: '5vw', paddingRight: '5vw' }}>
            <div className="page-title" style={{ textAlign: 'left', width: '100%' }}>
                <AnimatedText as='h1' style={{ fontSize: 50, fontWeight: 'bold' }}>Projects</AnimatedText>
                <AnimatedText as='h2' style={{ fontSize: 20, color: '#b2b2b2' }}>Get an idea of some of the projects that I have deployed to different NetSuite accounts</AnimatedText>
            </div>
            <AnimatedText as='div'><hr style={{ backgroundColor: '#333333', borderTop: '2px solid #333333', marginTop: '2rem', marginBottom: '2rem' }} /></AnimatedText>
            <AnimatedText as='h2' className='section-title'>Top Rated Projects</AnimatedText>
            <div className="project-container">
                <div className="left-project">
                    <ProjectCard 
                        title="NetSuite x Shopify Order Splitting" 
                        date="February 2025"
                        slideIn={true}
                        slideInDirection='left'
                        description={
                            <>
                                {"All orders imported from Shopify into NetSuite would be checked if they had items on Pre-Order. If there were a mix of Pre-Order items and available items, the Sales Order would be split into multiple Child Orders with the original imported Sales Order becoming the Parent Order."}
                                <br /><br />
                                {"Pre-Order items would also be assigned to different Child Orders depending on the date that the stock becomes available. If multiple Pre-Order items had the same stock date, they would be grouped on the same Child Order. Pre-Order items with different stock dates would be assigned to different Child Orders."}
                                <br/><br/>
                                {`This entire process allowed for each Child Order to be shipped separately, invoiced separately, and closed separately. All Child Orders would be visible directly from the Parent Order under a new custom subtab called "Child Orders" under the standard "Related Records" tab.`}
                            </>
                        }
                        isProject={true}
                        link='projects/orderSplitting'
                    />
                </div>
                <div className="right-projects">
                    <ProjectCard 
                        title="NetSuite x TrustPilot Integration" 
                        date="January 2025"
                        description="A custom integration which allowed my client to automatically send out Service & Product Reviews for their Sales Orders to customers."
                        isProject={true}
                        slideIn={true}
                        differentForMobile={true}
                        topRated={true}
                        link="/projects/trustpilotIntegration"
                    />
                    <ProjectCard 
                        title="Auto-ASN Generation" 
                        date="September 2024"
                        description="When Item Fulfillments were shipped in NetSuite, an 856 Ship Notice EDI file would be generated including all shipment information, and then transferred via SFTP."
                        isProject={true}
                        slideIn={true}
                        differentForMobile={true}
                        topRated={true}
                        link='projects/ediShipNotice'
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
                />
            </div>

            {/* <hr style={{ backgroundColor: '#333333', borderTop: '2px solid #333333', marginTop: '2rem', marginBottom: '2rem' }} />
            <ProductsBanner /> */}
            <AnimatedText as='div'><hr style={{ backgroundColor: '#333333', borderTop: '2px solid #333333', marginTop: '2rem', marginBottom: '2rem' }} /></AnimatedText>
            <AnimatedText as='h2' className='section-title'>{`And that's not it!`}</AnimatedText>
            <div className="more-projects" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', gap: '2rem' }}>
                <div className="column-1" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '33%' }}>
                    <ProjectCard 
                        title="Auto-Populating values - WMS/Ship Central" 
                        date="Commonly Requested"
                        description="Auto-populating values in WMS and Ship Central to save time and reduce errors."
                        isProject={true}
                        hasLink={false}
                        slideIn={true}
                        differentForMobile={true}
                        topRated={false}
                    />
                    <ProjectCard 
                            title="Auto Printing of PDF Documents" 
                            date="April 2025"
                            description="Custom Item Fulfillment PDF Despatch Note would be printed to user's preferred printer when packing Item Fulfillments in either the UI or Ship Central."
                            isProject={true}
                            hasLink={false}
                            slideIn={true}
                        differentForMobile={true}
                        topRated={false}
                        />
                    <ProjectCard 
                        title="Printing Item Labels in WMS Picking" 
                        date="April 2024"
                        description="Warehouse Operators being able to print item labels while picking in WMS. Similar to functionality present in Purchase Order Receiving."
                        isProject={true}
                        hasLink={false}
                        slideIn={true}
                        differentForMobile={true}
                        topRated={false}
                    />
                </div>
                <div className="column-2" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '33%' }}>
                    <ProjectCard 
                            title="ODBC - NetSuite x PowerBi" 
                            date="August 2024"
                            description="Setting up and configuring ODBC connections to allow users to connect their NetSuite data to PowerBi."
                            isProject={true}
                            hasLink={false}
                            slideIn={true}
                            differentForMobile={true}
                            topRated={false}
                        />
                        <ProjectCard 
                            title="Custom Label Sheet Printing from Item Record" 
                            date="July 2024"
                            description="Users can print A4 sheets of item labels from the Item Record in NetSuite."
                            isProject={true}
                            hasLink={false}
                            slideIn={true}
                        differentForMobile={true}
                        topRated={false}
                        />
                        <ProjectCard 
                            title="Email Automations" 
                            date="November 2024"
                            description="Automating emails to be sent to customers based on stock availability, schedules or events."
                            isProject={true}
                            hasLink={false}
                            slideIn={true}
                        differentForMobile={true}
                        topRated={false}
                        />
                </div>
                <div className="column-3" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '33%' }}>
                    <ProjectCard 
                            title="Custom PDF Printing of Vendor Return Authorisations" 
                            date="March 2024"
                            description="Adding PDF printing functionality to VRMAs in NetSuite due to no standard being available."
                            isProject={true}
                            hasLink={false}
                            slideIn={true}
                        differentForMobile={true}
                        topRated={false}
                        />
                        <ProjectCard 
                        title="Custom PDF Printing of Item Receipts" 
                        date="November 2023"
                        description="Adding PDF printing functionality to Item Receipts in NetSuite."
                        isProject={true}
                        hasLink={false}
                        slideIn={true}
                        differentForMobile={true}
                        topRated={false}
                    />
                        <ProjectCard 
                            title="Integration with 3rd Party Systems" 
                            date="Commonly Requested"
                            description="Integrate your NetSuite account with any 3rd party system, increasing the efficiency and effectiveness of being able to manage your business centrally from NetSuite."
                            isProject={true}
                            hasLink={false}
                            slideIn={true}
                        differentForMobile={true}
                        topRated={false}
                        />
                </div>
            </div>
            {/* <hr style={{ backgroundColor: '#333333', borderTop: '2px solid #333333', marginTop: '2rem', marginBottom: '2rem' }} />
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%', marginTop: '2rem', backgroundImage: `url(${Utilities.getRandomBannerImage()})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ flex: '1 1 60%', alignContent: 'center', marginBottom: '1rem' }}>
                    <h2 style={{ fontSize: 25, fontWeight: 'bold' }}>Need something else?</h2>
                    <p style={{ fontSize: 16, color: '#b2b2b2', marginBottom: '1rem' }}>
                        {"Feel free to reach out to me if you have a project in mind that you would like to discuss. Start tailoring your NetSuite account to your needs today!"}
                    </p>
                    <ArrowLink 
                        text="Contact Me"
                        link=""
                    />
                </div>
                <div style={{ flex: '1 1 35%', display: 'flex', justifyContent: 'center' }}>
                    <ProjectCard 
                        title="Client Testimonial" 
                        rating={5}
                        description='"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."'
                        isProject={false}
                        hasLink={false}
                    />
                </div>
            </div> */}
            <br/><br/>
            <Footer />
        </div>
    );
}
