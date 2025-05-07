'use client';

interface ButtonProps {
    text: string;
    buttonColour: string;
    textColour: string;
    borderRadius: number;
    noBorder?: boolean;
    isSubmit?: boolean;
}

export default function Button({text, buttonColour, textColour, borderRadius, noBorder, isSubmit}: ButtonProps) {
    
    return (
        <button className="custom-button" type={isSubmit ? 'submit' : 'button'} style={{ padding: 10, borderRadius: borderRadius, backgroundColor: buttonColour, color: textColour, cursor: 'pointer', ...(noBorder ? {} : { border: '1px solid white' }) }}>
            {text}
        </button>
    );
}