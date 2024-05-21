import React, { useContext } from "react";
import { TourContext } from "../../context/TourContextProvider";
import { Tailwind, Button } from "@react-email/components";

const NewComp = () => {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: "#007291",
            },
          },
        },
      }}
    >
      <Button
        href="https://example.com"
        className="bg-brand px-3 py-2 font-medium leading-4 text-white"
      >
        Click me
      </Button>

      <div className="bg-red-500 w-full">Hello</div>
    </Tailwind>
  );
};

export default NewComp;
