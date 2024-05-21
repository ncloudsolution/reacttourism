import ConatactUsBanner from "@/components/ConatactUsBanner";
import dynamic from "next/dynamic";
import React from "react";

const ContactUsFormNoSSR = dynamic(() => import("@/components/ContactUsForm"), {
  ssr: false,
});

const Contact = () => {
  return (
    <>
      <div className="xxs:my-10 my-5">
        <ConatactUsBanner />
        <div className="bigmd:-translate-y-28">
          <ContactUsFormNoSSR />
        </div>
      </div>
    </>
  );
};

export default Contact;
