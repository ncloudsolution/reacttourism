import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { render } from "@react-email/render";
import NewComp from "@/components/testingComponents/NewComp";

export async function POST(request) {
  try {
    const formData = await request.formData(); // Use formData directly
    const to = formData.get("to");
    const subject = formData.get("subject");
    const text = formData.get("text");
    const clientmail = formData.get("clientmail");
    const file = formData.get("file");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_MAIL_USERNAME,
        pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD,
      },
    });

    // Render the NewComp component to HTML markup
    const newCompHtml = render(<NewComp />);

    // Email options for the main recipient (to)
    const mailOptionsTo = {
      from: `"Tour Booking Sri Lanka" <${process.env.MAIL_USERNAME}>`,
      to: to,
      subject: "New Order Received",

      html: newCompHtml,
    };

    // Add attachment if file exists
    if (file) {
      mailOptionsTo.attachments = [
        {
          filename: file.name,
          content: new Buffer.from(await file.arrayBuffer()),
        },
      ];
    }

    const mailOptionsClient = {
      from: `"Tour Booking Sri Lanka" <${process.env.MAIL_USERNAME}>`,
      to: clientmail,
      subject: "Here's your new ride from Tour Booking sri Lanka",
      text: text, // Assuming you want to send the same text; adjust if different
    };

    // Add attachment if file exists
    if (file) {
      mailOptionsClient.attachments = [
        {
          filename: file.name,
          content: new Buffer.from(await file.arrayBuffer()),
        },
      ];
    }

    // Send the email to the main recipient
    await transporter.sendMail(mailOptionsTo);
    // Send the email to the client
    await transporter.sendMail(mailOptionsClient);

    return NextResponse.json(
      { message: "Order completed Successfully" },
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
