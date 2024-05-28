import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { render } from "@react-email/render";

import ContactUsOwnerEmail from "@/components/emailTemplates/ContactUsOwnerEmail";

export async function POST(request) {
  try {
    const formData = await request.formData(); // Use formData directly
    // const to = formData.get("to");
    // const subject = formData.get("subject");
    // const text = formData.get("text");
    const ContactusDetails = JSON.parse(formData.get("allDataBundle"));

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_MAIL_USERNAME,
        pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD,
      },
    });

    const newCompHtmlforOwner = render(
      <ContactUsOwnerEmail ContactusDetails={ContactusDetails} />
    );

    // Email options for the main recipient - Businness Owner (to)
    const mailOptionsTo = {
      from: `"Someone Reach you" <${process.env.MAIL_USERNAME}>`,
      to: ContactusDetails.ownerEmail,
      subject: ContactusDetails.emailSubject,
      html: newCompHtmlforOwner,
    };

    // Send the email to the main recipient
    await transporter.sendMail(mailOptionsTo);

    return NextResponse.json(
      { message: "Email Send Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to send email", error);
    return NextResponse.json(
      { message: "Failed to Send Email", error: error.message },
      { status: 500 }
    );
  }
}
