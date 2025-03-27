import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { render } from "@react-email/render";

import DayTripOwner from "@/components/emailTemplates/DayTripOwner";
import DayTripCustomer from "@/components/emailTemplates/DayTripCustomer";
import CustomTourPackageCustomerEmail from "@/components/emailTemplates/CustomTourPackageCustomerEmail";
import CustomTourPackageOwnerEmail from "@/components/emailTemplates/CustomTourPackageOwnerEmail";

export async function POST(request) {
  try {
    const formData = await request.formData(); // Use formData directly
    const customTourDetails = JSON.parse(formData.get("allDataBundle"));

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_MAIL_USERNAME,
        pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD,
      },
    });

    const newCompHtmlforOwner = render(
      <CustomTourPackageOwnerEmail customTourDetails={customTourDetails} />
    );
    const newCompHtmlforCustomer = render(
      <CustomTourPackageCustomerEmail customTourDetails={customTourDetails} />
    );

    const mailOptionsTo = {
      from: `"Taxiairport.lk" <${process.env.MAIL_USERNAME}>`,
      to: customTourDetails.ownerEmail,
      subject: "New Custom Tour Here",

      html: newCompHtmlforOwner,
    };

    const mailOptionsClient = {
      from: `"Taxiairport.lk" <${process.env.MAIL_USERNAME}>`,
      to: customTourDetails.customerEmail,
      subject:
        "Here's your custom tour package confirmation from Taxiairport.lk",
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
