import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { render } from "@react-email/render";
import TourPackageOwnerEmail from "@/components/emailTemplates/TourPackageOwnerEmail";
import TourPackageCustomerEmail from "@/components/emailTemplates/TourPackageCustomerEmail";

export async function POST(request) {
  try {
    const formData = await request.formData(); // Use formData directly
    const to = formData.get("to");
    const clientmail = formData.get("clientmail");
    const tourPackage = JSON.parse(formData.get("allDataBundle"));

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_MAIL_USERNAME,
        pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD,
      },
    });

    const newCompHtmlforOwner = render(
      <TourPackageOwnerEmail tourPackage={tourPackage} />
    );
    const newCompHtmlforCustomer = render(
      <TourPackageCustomerEmail tourPackage={tourPackage} />
    );

    const mailOptionsTo = {
      from: `"Taxiairport.lk" <${process.env.MAIL_USERNAME}>`,
      to: to,
      subject: "New Tour Package Request",

      html: newCompHtmlforOwner,
    };

    const mailOptionsClient = {
      from: `"Taxiairport.lk" <${process.env.MAIL_USERNAME}>`,
      to: clientmail,
      subject: "Here's your next tour ride from Taxiairport.lk",
      html: newCompHtmlforCustomer, // Assuming you want to send the same text; adjust if different
    };

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
