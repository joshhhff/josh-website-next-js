'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { FaArrowLeftLong } from 'react-icons/fa6';

export default function SuccessPage() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center' }}>
            <div style={{ backgroundColor: 'white', borderRadius: '50%' }}>
                <FaCheckCircle size={150} color='green' />
            </div>
            <h1 style={{ fontSize: 40, fontWeight: 'bold', marginTop: '1rem' }}>Form Submitted Successfully!</h1>
            <p style={{ marginTop: '0.5rem' }}>Thank you for getting in touch! I will get back to you as soon as possible.</p>
            <Link
                href="/"
                style={{
                    marginTop: '2rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none',
                    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                    transition: 'transform 0.2s ease-in-out',
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <FaArrowLeftLong size={24} className="nav-arrow" /> Home
            </Link>
        </div>
    );
}