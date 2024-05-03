import Hierarchy from "@/components/standalone/Hierarchy";
import React from "react";

export default function AllCartPages({ children }) {
  return (
    <>
      <div className="mt-2 bxs:mt-4 bigmd:mt-6 w-full flex justify-center">
        <Hierarchy />
      </div>
      {children}
    </>
  );
}
