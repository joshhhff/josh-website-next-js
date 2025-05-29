'use server';

/* 
This API route handles the contact form submission, and uses Nodemailer to send an email to my Gmail account
with all form data specified by the user. There is no need to validate if required fields are filled, as the form
includes the "required" attribute for all required fields.
*/

import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {

        const body = await request.json();
        const { apiKey, name, email, subject, message } = body;
        
        if (!apiKey || apiKey !== process.env.NEXT_PUBLIC_EMAIL_API_KEY) {
            return NextResponse.json({ error: "Invalid API key" }, { status: 401 });
        } else {
            console.log("API key is valid");
        }

        // Configure transport
        const transporter = nodemailer.createTransport({
            service: 'gmail', // or use your own SMTP
            auth: {
                user: process.env.GMAIL_EMAIL,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
            secure: false,
            ignoreTLS: true // add this 
        });

        await new Promise((resolve, reject) => {
            // verify connection configuration
            transporter.verify(function (error, success) {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    console.log("Server is ready to take our messages");
                    resolve(success);
                }
            });
        });

        /* const contactFormSubmission = {
            from: process.env.GMAIL_EMAIL, // sender address
            to: process.env.GMAIL_EMAIL, // list of receivers
            subject: `NEW CONTACT FORM SUBMISSION`, // Subject line
            html: `
            <table style="border-collapse: collapse; width: 100%;">
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;"><strong>Name:</strong></td>
                <td style="border: 1px solid #ddd; padding: 8px;">${name}</td>
                <td style="border: 1px solid #ddd; padding: 8px;"><strong>Email:</strong></td>
                <td style="border: 1px solid #ddd; padding: 8px;">${email}</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;"><strong>Subject:</strong></td>
                <td style="border: 1px solid #ddd; padding: 8px;">${subject}</td>
                <td style="border: 1px solid #ddd; padding: 8px;"><strong>Date:</strong></td>
                <td style="border: 1px solid #ddd; padding: 8px;">${new Date().toDateString()}</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;"><strong>Product Type:</strong></td>
                <td style="border: 1px solid #ddd; padding: 8px;">${product}</td>
                <td style="border: 1px solid #ddd; padding: 8px;"><strong>Related Customisation:</strong></td>
                <td style="border: 1px solid #ddd; padding: 8px;">${relatedCustomisation ? relatedCustomisation : 'N/A'}</td>
            </tr>
            </table>

            <h2 style="margin-top: 20px;">Message:</h2>
            ${message.replace(/\n/g, '<br />')}
            `,
        } */

        const contactFormSubmission = {
            from: process.env.GMAIL_EMAIL, // sender address
            to: process.env.GMAIL_EMAIL, // list of receivers
            subject: `NEW CONTACT FORM SUBMISSION`, // Subject line
            html: `
            <table style="border-collapse: collapse; width: 100%;">
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;"><strong>Name:</strong></td>
                <td style="border: 1px solid #ddd; padding: 8px;">${name}</td>
                <td style="border: 1px solid #ddd; padding: 8px;"><strong>Email:</strong></td>
                <td style="border: 1px solid #ddd; padding: 8px;">${email}</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;"><strong>Subject:</strong></td>
                <td style="border: 1px solid #ddd; padding: 8px;">${subject}</td>
                <td style="border: 1px solid #ddd; padding: 8px;"><strong>Date:</strong></td>
                <td style="border: 1px solid #ddd; padding: 8px;">${new Date().toDateString()}</td>
            </tr>
            </table>

            <h2 style="margin-top: 20px;">Message:</h2>
            ${message.replace(/\n/g, '<br />')}
            `,
        }

        const responseToUser = {
            from: process.env.GMAIL_EMAIL, // sender address
            to: email, // list of receivers
            bcc: process.env.GMAIL_EMAIL, // send a copy to myself
            subject: `Thanks for getting in touch!`, // Subject line
            html: `
            <p style="margin-bottom: 5px;">Hi ${name},</p>
            <p style="margin-bottom: 5px;">Thanks for reaching out. I have received your message, and will get back to you as soon as possible.</p>

            <p style="margin-bottom: 5px;">Please find below a summary of what you submitted:</p>
            <p style="margin: 0;"><b>Subject:</b> ${subject}</p>
            <p style="margin: 0;"><b>Name:</b> ${name}</p>
            <p style="font-weight: bold; margin: 0;">Message:</p>
            ${message.replace(/\n/g, '<br />')}
            <br/><br/>
            <p style="margin-bottom: 5px;">Please note that this is an automated email. Please do not reply directly to this email. I will respond once I have had time to review!</p>
            <p style="margin-bottom: 0;">Kind regards,</p>
            <p style="margin: 0;">Josh Ford - Software Developer</p>
            `,
        }

        const sendContactEmail = await new Promise<nodemailer.SentMessageInfo>((resolve, reject) => {
            // send mail
            transporter.sendMail(contactFormSubmission, (err, info) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    console.log(info);
                    resolve(info);
                }
            });
        });

        const sendResponseEmail = await new Promise<nodemailer.SentMessageInfo>((resolve, reject) => {
            // send mail
            transporter.sendMail(responseToUser, (err, info) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    console.log(info);
                    resolve(info);
                }
            });
        });

        if (sendContactEmail.accepted.length > 0 && sendContactEmail.rejected.length === 0 && sendResponseEmail.accepted.length > 0 && sendResponseEmail.rejected.length === 0) {
            return NextResponse.json({ emailSent: true }, { status: 200 });
        } else {
            return NextResponse.json({ emailSent: false }, { status: 500 });
        }
    } catch (error) {
        console.error("Error in sending email:", error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
    
}