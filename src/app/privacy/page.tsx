"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "../components/footer";

export default function PrivacyPolicyPage() {
    const lastUpdated = "3 June 2026";

    const sections = [
        {
            title: "Who is responsible for this site?",
            content: (
                <>
                    <p style={{ fontSize: 16, color: '#b2b2b2', lineHeight: '1.7', marginBottom: '0.75rem' }}>
                        This website (<span style={{ color: '#fff' }}>joshford.co.uk</span>) is operated by Josh Ford,
                        a Software Developer based in the United Kingdom. Josh Ford is the data controller
                        for any personal data processed through this site, as defined under UK GDPR.
                    </p>
                    <p style={{ fontSize: 16, color: '#b2b2b2', lineHeight: '1.7' }}>
                        You can contact me at{' '}
                        <Link href="mailto:joshfordd2004@gmail.com" style={{ color: '#fff', textDecoration: 'underline' }}>
                            joshfordd2004@gmail.com
                        </Link>{' '}
                        for any privacy-related enquiries.
                    </p>
                </>
            )
        },
        {
            title: "What data is collected?",
            content: (
                <>
                    <p style={{ fontSize: 16, color: '#b2b2b2', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                        This site collects minimal data. There are two sources:
                    </p>
                    <div style={{
                        border: '1px solid #333333',
                        borderRadius: '12px',
                        padding: '1.25rem',
                        marginBottom: '1rem',
                        background: 'linear-gradient(to top right, #0e0e0e, #2c2b2b)'
                    }}>
                        <p style={{ fontWeight: 'bold', color: '#fff', marginBottom: '0.5rem', fontSize: 16 }}>Vercel Analytics</p>
                        <p style={{ fontSize: 14, color: '#b2b2b2', lineHeight: '1.7', marginBottom: '0.75rem' }}>
                            This site uses{' '}
                            <a href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}>
                                Vercel Analytics
                            </a>{' '}
                            to understand how visitors use the site. It is privacy-focused: it does not use cookies,
                            does not fingerprint your browser, and does not track you across sites. The data collected includes:
                        </p>
                        {[
                            "Page views and referrer URLs",
                            "Country/region (derived from your IP address — the IP itself is not stored)",
                            "Browser name and operating system",
                            "Device type (mobile, tablet, desktop)",
                        ].map((item) => (
                            <div key={item} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.25rem' }}>
                                <span style={{ color: '#555', flexShrink: 0 }}>—</span>
                                <span style={{ fontSize: 14, color: '#b2b2b2' }}>{item}</span>
                            </div>
                        ))}
                        <p style={{ fontSize: 14, color: '#b2b2b2', lineHeight: '1.7', marginTop: '0.75rem' }}>
                            Vercel acts as a data processor on my behalf. You can read their privacy policy at{' '}
                            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}>
                                vercel.com/legal/privacy-policy
                            </a>.
                        </p>
                    </div>
                    <div style={{
                        border: '1px solid #333333',
                        borderRadius: '12px',
                        padding: '1.25rem',
                        background: 'linear-gradient(to top right, #0e0e0e, #2c2b2b)'
                    }}>
                        <p style={{ fontWeight: 'bold', color: '#fff', marginBottom: '0.5rem', fontSize: 16 }}>Email contact</p>
                        <p style={{ fontSize: 14, color: '#b2b2b2', lineHeight: '1.7' }}>
                            If you contact me directly via email, I will receive and store the information you
                            provide (your name, email address, and the content of your message). This data is used
                            solely to respond to your enquiry and is not shared with any third parties.
                        </p>
                    </div>
                </>
            )
        },
        {
            title: "Why is this data processed?",
            content: (
                <p style={{ fontSize: 16, color: '#b2b2b2', lineHeight: '1.7' }}>
                    Analytics data is processed under <span style={{ color: '#fff', fontWeight: 'bold' }}>legitimate interest</span> — to
                    understand how visitors use the site so I can improve it. Email data is processed in
                    order to <span style={{ color: '#fff', fontWeight: 'bold' }}>respond to your enquiry</span>. No data is used for
                    advertising, profiling, or any commercial purpose.
                </p>
            )
        },
        {
            title: "Cookies",
            content: (
                <p style={{ fontSize: 16, color: '#b2b2b2', lineHeight: '1.7' }}>
                    This site does not use cookies. Vercel Analytics operates without cookies or local
                    storage, so no cookie consent banner is required.
                </p>
            )
        },
        {
            title: "How long is data kept?",
            content: (
                <p style={{ fontSize: 16, color: '#b2b2b2', lineHeight: '1.7' }}>
                    Vercel Analytics data is retained for as long as my Vercel account is active, subject
                    to Vercel&apos;s own retention policies. Emails are kept for as long as is reasonably
                    necessary to manage the enquiry.
                </p>
            )
        },
        {
            title: "Third-party links",
            content: (
                <p style={{ fontSize: 16, color: '#b2b2b2', lineHeight: '1.7' }}>
                    This site links to external platforms including{' '}
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}>LinkedIn</a>
                    {' '}and{' '}
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}>GitHub</a>.
                    {' '}These are independent platforms with their own privacy policies, and I have no control
                    over the data they collect.
                </p>
            )
        },
        {
            title: "Your rights under UK GDPR",
            content: (
                <>
                    <p style={{ fontSize: 16, color: '#b2b2b2', lineHeight: '1.7', marginBottom: '1rem' }}>
                        As a UK resident, you have the following rights regarding your personal data:
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                        {[
                            "Right to access",
                            "Right to rectification",
                            "Right to erasure",
                            "Right to restrict processing",
                            "Right to data portability",
                            "Right to object",
                        ].map((right) => (
                            <span
                                key={right}
                                style={{
                                    padding: '0.35rem 0.85rem',
                                    backgroundColor: 'transparent',
                                    border: '1px solid #333333',
                                    borderRadius: '50px',
                                    color: '#b2b2b2',
                                    fontSize: '0.875rem',
                                }}
                            >
                                {right}
                            </span>
                        ))}
                    </div>
                    <p style={{ fontSize: 16, color: '#b2b2b2', lineHeight: '1.7' }}>
                        To exercise any of these rights, contact me at{' '}
                        <Link href="mailto:joshfordd2004@gmail.com" style={{ color: '#fff', textDecoration: 'underline' }}>
                            joshfordd2004@gmail.com
                        </Link>.
                        {' '}You also have the right to lodge a complaint with the UK&apos;s data protection
                        authority, the{' '}
                        <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}>
                            Information Commissioner&apos;s Office (ICO)
                        </a>.
                    </p>
                </>
            )
        },
        {
            title: "Changes to this policy",
            content: (
                <p style={{ fontSize: 16, color: '#b2b2b2', lineHeight: '1.7' }}>
                    I may update this policy from time to time. Any changes will be reflected by an updated
                    date at the top of this page.
                </p>
            )
        },
    ];

    return (
        <div className="page-container" style={{ height: '100%', width: '100%', paddingTop: '15vh', paddingLeft: '5vw', paddingRight: '5vw' }}>

            {/* Page header */}
            <div className="page-title" style={{ textAlign: 'left', width: '100%' }}>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ fontSize: 50, fontWeight: 'bold' }}
                >
                    Privacy Policy
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    style={{ fontSize: 20, color: '#b2b2b2' }}
                >
                    How your data is handled when you visit this site
                </motion.h2>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <hr style={{ backgroundColor: '#333333', borderTop: '2px solid #333333', marginTop: '2rem', marginBottom: '2rem' }} />
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ fontSize: 14, color: '#555', marginBottom: '3rem' }}
            >
                Last updated: {lastUpdated}
            </motion.p>

            {/* Sections */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                {sections.map((section, index) => (
                    <motion.div
                        key={section.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
                    >
                        <h3 className="section-title" style={{ marginBottom: '0.75rem' }}>
                            {section.title}
                        </h3>
                        {section.content}
                    </motion.div>
                ))}
            </div>
            <Footer />
        </div>
    );
}