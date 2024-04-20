import dynamic from "next/dynamic";
import React from "react";

const ContactUsFormNoSSR = dynamic(() => import("@/components/ContactUsForm"), {
  ssr: false,
});

const Contact = () => {
  return (
    <>
      <div className="mb-20">
        <ContactUsFormNoSSR />
      </div>
    </>
  );
};

export default Contact;
