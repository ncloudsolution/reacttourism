import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const formData = await request.formData(); // Use formData directly
    const to = formData.get("to");
    const subject = formData.get("subject");
    const text = formData.get("text");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_MAIL_USERNAME,
        pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD,
      },
    });

    // Email options for the main recipient (to)
    const mailOptionsTo = {
      from: `"TBSL - Contact Us" <${process.env.MAIL_USERNAME}>`,
      to: to,
      subject: subject,
      text: text,
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
