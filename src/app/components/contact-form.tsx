'use client';
import { useState } from "react";
import Button from "./button";
import { useRouter } from "next/navigation";

export default function ContactForm() {
    const router = useRouter();
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [product, setProduct] = useState("");
    const [relatedCustomisation, setRelatedCustomisation] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    async function submitContactForm(event: React.FormEvent): Promise<void> {
        event.preventDefault();
        const formData = {
            name,
            email,
            subject,
            message,
            product,
            relatedCustomisation
        }

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
            setError("There was an error sending your message. Please try again later.");
        }
    }

    return (
        <form onSubmit={submitContactForm} style={{ width: '60%', display: 'flex', flexDirection: 'column', borderRadius: '8px', background: 'transparent' }}>
            <div className="name-details">
            <div className="name-inputs" style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-evenly' }}>
                <input 
                    type="text" 
                    required={true}
                    placeholder="Name" 
                    style={{ width: '48%', padding: '1rem', margin: '0 1rem 1rem 1rem', borderRadius: 5, border: '1px solid #333333', color: 'white', backgroundColor: 'transparent' }} 
                    value={name} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} 
                />
                    <input 
                    type="email" 
                    required={true}
                    placeholder="Email" 
                    style={{ width: '48%', padding: '1rem', margin: '0 1rem 1rem 1rem', borderRadius: 5, border: '1px solid #333333', color: 'white', backgroundColor: 'transparent' }} 
                    value={email} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} 
                />
            </div>
            <div className="name-inputs" style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-evenly' }}>
                <select 
                    style={{ width: '48%', padding: '1rem', margin: '1rem', borderRadius: 5, border: '1px solid #333333', backgroundColor: 'transparent', WebkitAppearance: 'none' }} 
                    value={product} 
                    required={true}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setProduct(e.target.value)}
                >
                    <option value="" style={{ backgroundColor: 'rgb(53, 53, 53)' }}></option>
                    <option value="New Request" style={{ backgroundColor: 'rgb(53, 53, 53)' }}>New Request</option>
                    <option value="Pre-Built Customisation" style={{ backgroundColor: 'rgb(53, 53, 53)' }}>Pre-Built Customisation</option>
                    <option value="Listed Customisation" style={{ backgroundColor: 'rgb(53, 53, 53)' }}>Listed Customisation</option>
                </select>
                {product === "Pre-Built Customisation" && (
                    <select 
                    required={true}
                    value={relatedCustomisation}
                    style={{ width: '48%', padding: '1rem', margin: '1rem', borderRadius: 5, border: '1px solid #333333', backgroundColor: 'transparent', WebkitAppearance: 'none' }} 
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setRelatedCustomisation(e.target.value)}
                    >
                        <option value="" style={{ backgroundColor: 'rgb(53, 53, 53)' }}>Select Customisation</option>
                        <option value="NetSuite AI Chatbot" style={{ backgroundColor: 'rgb(53, 53, 53)' }}>NetSuite AI Chatbot</option>
                        <option value="Customisation 2" style={{ backgroundColor: 'rgb(53, 53, 53)' }}>Customisation 2</option>
                        <option value="Customisation 3" style={{ backgroundColor: 'rgb(53, 53, 53)' }}>Customisation 3</option>
                    </select>
                )}
                {product === "Listed Customisation" && (
                    <select 
                    required={true}
                    value={relatedCustomisation}
                    style={{ width: '48%', padding: '1rem', margin: '1rem', borderRadius: 5, border: '1px solid #333333', backgroundColor: 'transparent', WebkitAppearance: 'none' }} 
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setRelatedCustomisation(e.target.value)}
                    >
                        <option value="" style={{ backgroundColor: 'rgb(53, 53, 53)' }}>Select Customisation</option>
                        <option value="Customisation 1" style={{ backgroundColor: 'rgb(53, 53, 53)' }}>Customisation 4</option>
                        <option value="Customisation 2" style={{ backgroundColor: 'rgb(53, 53, 53)' }}>Customisation 5</option>
                        <option value="Customisation 3" style={{ backgroundColor: 'rgb(53, 53, 53)' }}>Customisation 6</option>
                    </select>
                )}
                {(product === "New Request" || product === '') && (
                    <select disabled={true}
                    style={{ width: '48%', padding: '1rem', margin: '1rem', borderRadius: 5, border: '1px solid #333333', backgroundColor: 'transparent', WebkitAppearance: 'none' }} 
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setMessage(e.target.value)}
                    ></select>
                )}
            </div>
            <input 
                type="text" 
                placeholder="Subject" 
                required={true}
                style={{ width: '96%', padding: '1rem', margin: '1rem', borderRadius: 5, border: '1px solid #333333', backgroundColor: 'transparent', color: 'white' }} 
                value={subject} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSubject(e.target.value)} 
            />
            <textarea 
                placeholder="Message" 
                required={true}
                style={{ width: '96%', padding: '1rem', margin: '1rem', borderRadius: 5, border: '1px solid #333333', backgroundColor: 'transparent', height: '150px', resize: 'none' }} 
                value={message} 
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)} 
            />
            </div>
            {error && <h3 style={{ color: 'red', fontWeight: 'bold', marginLeft: '1rem' }}>There was an error</h3>}
            <div className="submit-button" style={{ margin: '1rem', width: '100%' }}>
                <Button 
                    text="Send Message" 
                    buttonColour="white" 
                    textColour="black" 
                    borderRadius={5}
                    isSubmit={true}
                />
            </div>
        </form>
    );
}