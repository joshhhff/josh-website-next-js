'use client';

import { FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ScrollToTopDivider() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ position: 'relative', margin: '3rem 0' }}>
      <hr style={{ borderTop: '2px solid #333333', margin: 0 }} />
      <motion.button
        onClick={handleScrollTop}
        aria-label="Scroll to top"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: 'absolute',
          top: '-18px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: isHovered ? '#fff' : '#555',
          border: 'none',
          borderRadius: '50%',
          padding: '0.75rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.3s ease',
        }}
      >
        <motion.div
          animate={{ scale: isHovered ? 1.2 : 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FaArrowUp color="black" size={24} />
        </motion.div>
      </motion.button>
    </div>
  );
}
