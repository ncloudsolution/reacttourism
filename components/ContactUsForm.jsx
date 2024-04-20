"use client";
import React, { useRef, useState } from "react";
import Title from "./standalone/Title";
import { SumCaptcha } from "@/libs/Captcha";

const ContactUsForm = () => {
  //this return a array
  const sumCaptchaValue = SumCaptcha();

  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const massageRef = useRef();
  const captchaRef = useRef();

  const [submitError, setSubmitError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(sumCaptchaValue);
    if (
      nameRef.current.value === "" ||
      emailRef.current.value === "" ||
      subjectRef.current.value === "" ||
      massageRef.current.value === "" ||
      captchaRef.current.value === ""
    ) {
      return setSubmitError("Please fill all the fields");
    }

    if (captchaRef.current.value !== sumCaptchaValue[2]) {
      return setSubmitError("Captacha Validation Failed! Try again");
    }
    console.log("fine");

    return setSubmitError("");
  };

  return (
    <>
      <div className="w-full border-2 border-transparent flex flex-col items-center xs:my-20 my-5">
        <Title title="Reach to Us" />

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 xs:w-[400px] w-[260px]">
            <div>
              <div className="xs:text-[18px] text-[16px]">Name</div>
              <input
                ref={nameRef}
                placeholder="John Nash"
                type="text"
                className="w-full p-2 rounded border-[1px] border-primary outline-none text-[14px]"
              />
            </div>

            <div>
              <div className="xs:text-[18px] text-[16px]">Your Email</div>
              <input
                ref={emailRef}
                placeholder="johnnash123@gmail.com"
                type="email"
                className="w-full p-2 rounded border-[1px] border-primary outline-none text-[14px]"
              />
            </div>

            <div>
              <div className="xs:text-[18px] text-[16px] ">Subject</div>
              <input
                ref={subjectRef}
                placeholder="Inquiry Regarding Tour Details ................."
                type="text"
                className="w-full p-2 rounded border-[1px] border-primary outline-none text-[14px]"
              />
            </div>

            <div>
              <div className="xs:text-[18px] text-[16px] ">Message</div>
              <textarea
                ref={massageRef}
                placeholder="I'm writing you regarding ................."
                className="w-full p-2 rounded border-[1px] border-primary outline-none text-[14px] "
                rows={5}
              />
            </div>

            {submitError && (
              <div className="w-full bg-errorpink p-2 text-white rounded text-center">
                {submitError}
              </div>
            )}

            <div className="flex justify-between my-2 gap-x-4">
              <div className="xs:text-[18px] text-[16px] w-1/2  flex bg-primary text-white rounded items-center justify-center p-2">
                <div>{sumCaptchaValue[0]}</div>
                <div className="xs:mx-2 mx-1">+</div>
                <div>{sumCaptchaValue[1]}</div>
              </div>
              <input
                ref={captchaRef}
                type="number"
                className="w-1/2 p-2 rounded border-[1px] border-primary outline-none text-[14px]"
              />
            </div>

            <div>
              <input
                placeholder="Inquiry Regarding Tour Details and Booking Information"
                type="submit"
                className="w-full p-2 rounded bg-primary text-white outline-none xs:text-[18px] text-[16px]"
                value="Submit"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUsForm;
