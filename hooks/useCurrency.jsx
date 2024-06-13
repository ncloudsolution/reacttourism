"use client";
import React, { useEffect, useState } from "react";

const useCurrency = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/lkr.json`
    )
      .then((res) => res.json())
      .then((data) => setData(data["lkr"]));
  }, []);

  console.log(data, "data");
  return data;
};

export default useCurrency;

// const useCurrency = (pathname) => {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       if (pathname.includes("/daytrips")) {
//         try {
//           console.log("dayrips");
//           const response = await fetch(
//             `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`
//           );
//           const result = await response.json();
//           setData(result["usd"]);
//         } catch (error) {
//           console.error("Fetch error:", error);
//         }
//       } else {
//         try {
//           console.log("otherRoutes");
//           const response = await fetch(
//             `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/lkr.json`
//           );
//           const result = await response.json();
//           setData(result["lkr"]);
//         } catch (error) {
//           console.error("Fetch error:", error);
//         }
//       }
//     };

//     fetchData();
//   }, [pathname]);

//   console.log(data, "data");
//   return data;
// };

// export default useCurrency;
