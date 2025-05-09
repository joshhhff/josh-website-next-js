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
                backgroundColor: '#444141',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)', // Increased shadow intensity
            }}
        >
            <Image
                src={image}
                alt={text}
                width={40}
                height={40}
                style={{
                    borderRadius: applyBorderRadius === undefined ? '5px' : '',
                    marginRight: '1rem', // Add spacing between the image and text
                }}
            />
            <p
                style={{
                    fontWeight: 'bold',
                    fontSize: '14px',
                    textAlign: 'center',
                    flex: 1, // Allow the text to take up the remaining space
                }}
            >
                {text}
            </p>
        </div>
    );
}
