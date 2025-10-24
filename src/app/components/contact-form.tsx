'use client';
import { useState } from "react";
import Button from "./button";
import { useRouter } from "next/navigation";

interface ContactFormProps {
    apiKey: string;
}

export default function ContactForm(props: ContactFormProps) {
    console.log("ContactForm component rendered with API key:", props.apiKey);
    const router = useRouter();
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function submitContactForm(event: React.FormEvent): Promise<void> {
        event.preventDefault();
        setLoading(true);
        setError("");

        const formData = {
            apiKey: props.apiKey,
            name,
            email,
            subject,
            message,
        }

        try {
            const sendEmail = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            });

            const response = await sendEmail.json();

            if (response.emailSent) {
                router.push("/contact/success");
            } else {
                setLoading(false);
                setError(response.error || "Failed to send email. Please try again later.");
            }
        } catch (err) {
            console.error("Error sending email:", err);
            setError("An unexpected error occurred. Please try again later.");
            setLoading(false);
        }
    }

    const inputStyle: React.CSSProperties = {
        width: '100%',
        padding: '0.75rem',
        backgroundColor: '#1a1a1a',
        border: '1px solid #333333',
        borderRadius: '8px',
        color: 'white',
        fontSize: '1rem',
        outline: 'none',
        transition: 'border-color 0.3s',
        fontFamily: 'inherit'
    };

    return (
        <form 
            className="contact-form-details" 
            onSubmit={submitContactForm} 
            style={{ 
                width: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
            }}
        >
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem', color: '#fff' }}>
                Send Me a Message
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Name and Email Row */}
                <div className="name-details" style={{ display: 'flex', gap: '1rem' }}>
                    <div className="name-inputs" style={{ flex: 1 }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: '#b2b2b2', fontSize: '0.9rem' }}>
                            Name *
                        </label>
                        <input 
                            type="text" 
                            required={true}
                            placeholder="Your name" 
                            style={inputStyle}
                            value={name} 
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} 
                            disabled={loading}
                            onFocus={(e) => e.currentTarget.style.borderColor = '#666'}
                            onBlur={(e) => e.currentTarget.style.borderColor = '#333333'}
                        />
                    </div>
                    <div className="name-inputs" style={{ flex: 1 }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: '#b2b2b2', fontSize: '0.9rem' }}>
                            Email *
                        </label>
                        <input 
                            type="email" 
                            required={true}
                            placeholder="your.email@example.com" 
                            style={inputStyle}
                            value={email} 
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} 
                            disabled={loading}
                            onFocus={(e) => e.currentTarget.style.borderColor = '#666'}
                            onBlur={(e) => e.currentTarget.style.borderColor = '#333333'}
                        />
                    </div>
                </div>

                {/* Subject */}
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: '#b2b2b2', fontSize: '0.9rem' }}>
                        Subject *
                    </label>
                    <input 
                        type="text" 
                        placeholder="What's this about?" 
                        required={true}
                        style={inputStyle}
                        value={subject} 
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSubject(e.target.value)} 
                        disabled={loading}
                        onFocus={(e) => e.currentTarget.style.borderColor = '#666'}
                        onBlur={(e) => e.currentTarget.style.borderColor = '#333333'}
                    />
                </div>

                {/* Message */}
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: '#b2b2b2', fontSize: '0.9rem' }}>
                        Message *
                    </label>
                    <textarea 
                        placeholder="Tell me about your project or question..." 
                        required={true}
                        rows={6}
                        style={{
                            ...inputStyle,
                            resize: 'vertical',
                            minHeight: '150px'
                        }}
                        value={message} 
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)} 
                        disabled={loading}
                        onFocus={(e) => e.currentTarget.style.borderColor = '#666'}
                        onBlur={(e) => e.currentTarget.style.borderColor = '#333333'}
                    />
                </div>

                {/* Error Message */}
                {error && (
                    <div style={{ 
                        color: '#ff6b6b', 
                        fontWeight: 500, 
                        fontSize: '0.9rem',
                        padding: '0.75rem',
                        backgroundColor: 'rgba(255, 107, 107, 0.1)',
                        border: '1px solid rgba(255, 107, 107, 0.3)',
                        borderRadius: '8px'
                    }}>
                        {error}
                    </div>
                )}

                {/* Submit Button */}
                <div className="submit-button" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    {!loading ? (
                        <Button 
                            text="Send Message" 
                            buttonColour="#444" 
                            textColour="white" 
                            borderRadius={8}
                            isSubmit={true}
                            disabled={loading}
                            noBorder={true}
                        />
                    ) : (
                        <button
                            type="button"
                            disabled
                            style={{
                                padding: '0.875rem 2rem',
                                backgroundColor: '#333',
                                color: '#888',
                                border: '1px solid',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                fontWeight: 600,
                                cursor: 'not-allowed',
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.75rem'
                            }}
                        >
                            <div style={{ 
                                border: '3px solid #555', 
                                borderTop: '3px solid #fff', 
                                borderRadius: '50%', 
                                width: '20px', 
                                height: '20px', 
                                animation: 'spin 1s linear infinite' 
                            }} />
                            Sending...
                        </button>
                    )}
                </div>
            </div>

            <style jsx>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </form>
    );
}