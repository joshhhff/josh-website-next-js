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
        const { name, email, subject, message, product, relatedCustomisation } = body;
        
        console.log(body);

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

        const sendEmail = await transporter.sendMail({
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
        });

        if (sendEmail.accepted.length > 0 && sendEmail.rejected.length === 0) {
            return NextResponse.json({ emailSent: true }, { status: 200 });
        } else {
            return NextResponse.json({ emailSent: false }, { status: 500 });
        }
    } catch (error) {
        console.error("Error in sending email:", error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
    
}