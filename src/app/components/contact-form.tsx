'use client';
import { useState } from "react";
import Button from "./button";
import { useRouter } from "next/navigation";

export default function ContactForm() {
    const router = useRouter();
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function submitContactForm(event: React.FormEvent): Promise<void> {
        event.preventDefault();
        setLoading(true); // Set loading to true
        setError(""); // Clear any previous errors

        const formData = {
            name,
            email,
            subject,
            message,
        };

        try {
            const sendEmail = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const response = await sendEmail.json();

            if (response.emailSent) {
                router.push("/contact/success");
            } else {
                setLoading(false); // Set loading to false
                setError("There was an error sending your message. Please try again later.");
            }
        } catch (err) {
            setError("An unexpected error occurred. Please try again later.");
        }
    }

    return (
        <form 
            className="contact-form-details" 
            onSubmit={submitContactForm} 
            style={{ width: '60%', display: 'flex', flexDirection: 'column', borderRadius: '8px', background: 'transparent' }}
        >
            <div className="name-details">
                <div className="name-inputs" style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-evenly' }}>
                    <input 
                        type="text" 
                        required={true}
                        placeholder="Name" 
                        style={{ width: '48%', padding: '1rem', margin: '0 1rem 1rem 1rem', borderRadius: 5, border: '1px solid #333333', color: 'white', backgroundColor: 'transparent' }} 
                        value={name} 
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} 
                        disabled={loading} // Disable input when loading
                    />
                    <input 
                        type="email" 
                        required={true}
                        placeholder="Email" 
                        style={{ width: '48%', padding: '1rem', margin: '0  1rem 1rem', borderRadius: 5, border: '1px solid #333333', color: 'white', backgroundColor: 'transparent' }} 
                        value={email} 
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} 
                        disabled={loading} // Disable input when loading
                    />
                </div>
                <input 
                    type="text" 
                    placeholder="Subject" 
                    required={true}
                    style={{ width: '96%', padding: '1rem', margin: '1rem', borderRadius: 5, border: '1px solid #333333', backgroundColor: 'transparent', color: 'white' }} 
                    value={subject} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSubject(e.target.value)} 
                    disabled={loading} // Disable input when loading
                />
                <textarea 
                    placeholder="Message" 
                    required={true}
                    style={{ width: '96%', padding: '1rem', margin: '1rem', borderRadius: 5, border: '1px solid #333333', backgroundColor: 'transparent', height: '200px', resize: 'none' }} 
                    value={message} 
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)} 
                    disabled={loading} // Disable textarea when loading
                />
            </div>
            {error && <h3 style={{ color: 'red', fontWeight: 'bold', marginLeft: '1rem' }}>{error}</h3>}
            <div className="submit-button" style={{ margin: '1rem', width: '100%', display: 'flex', alignItems: 'center' }}>
                {!loading && (
                    <Button 
                    text={loading ? "Sending..." : "Send Message"} 
                    buttonColour="white" 
                    textColour="black" 
                    borderRadius={5}
                    isSubmit={true}
                    disabled={loading} // Disable button when loading
                />
                )}
                
                {loading && <div className="spinner" style={{ marginLeft: '1rem', border: '4px solid #f3f3f3', borderTop: '4px solid #333', borderRadius: '50%', width: '20px', height: '20px', animation: 'spin 1s linear infinite' }} />}
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
