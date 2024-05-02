import Hierarchy from "@/components/standalone/Hierarchy";
import React from "react";

export default function AllCartPages({ children }) {
  return (
    <>
      <div className="my-1 bxs:my-2 bigmd:my-3 w-full flex justify-center">
        <Hierarchy />
      </div>
      {children}
    </>
  );
}
