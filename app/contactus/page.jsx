import Footer from "@/components/Footer";
import React, { useContext } from "react";

const Contact = () => {
  return (
    <>
      <div className="bg-blue-300/50  h-[400px] flex flex-col">
        <h1 className="text-center text-[50px] pt-[70px] font-semibold">
          Contact Us
        </h1>
      </div>

      <div className="flex flex-row justify-center pt-[50px] gap-10">
        <div className="bg-blue-300/50 p-10 rounded">
          <h1 className="text-center text-2xl pb-3">Address</h1>
          <p className="text-center">
            Lorem Ipsum is simply dummy <br /> text of the printing <br />
            and typesettin
          </p>
        </div>
        <div className="bg-blue-300/50 p-10 rounded">
          <h1 className="text-center text-2xl pb-3">Phone</h1>
          <p className="text-center">
            Lorem Ipsum is simply dummy <br /> text of the printing <br />
            and typesettin
          </p>
        </div>
        <div className="bg-blue-300/50 p-10 rounded">
          <h1 className="text-center text-2xl pb-3">E-mail</h1>
          <p className="text-center">
            Lorem Ipsum is simply dummy <br /> text of the printing <br />
            and typesettin
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
