import ContactClient from "../components/contact-client";

export default function ContactMe() {
  const apiKeyForEmail = process.env.CUSTOM_EMAIL_API_KEY || '';
  
  return <ContactClient apiKey={apiKeyForEmail} />;
}