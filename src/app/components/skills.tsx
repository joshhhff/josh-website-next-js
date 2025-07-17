// components/SkillsCard.tsx
import Image, { StaticImageData } from 'next/image';

interface SkillsCardProps {
    image: StaticImageData;
    text: string;
    applyBorderRadius?: boolean;
}

export default function SkillsCard({ image, text, applyBorderRadius }: SkillsCardProps) {
    return (
        <div
            className="skills-card"
            style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: '200px',
            height: '80px',
            padding: '1rem',
            margin: '1rem',
            borderRadius: '10px',
            backgroundColor: '#2d2c2c', // Slightly lighter background
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7)',
            }}
        >
            <Image
            src={image}
            alt={text}
            width={40}
            height={40}
            style={{
                borderRadius: applyBorderRadius === undefined ? '5px' : '',
                marginRight: '1rem',
            }}
            />
            <p
            style={{
                fontWeight: 'bold',
                fontSize: '14px',
                textAlign: 'center',
                flex: 1,
                color: '#e0e0e0',
            }}
            >
            {text}
            </p>
        </div>
    );
}
