import React, { useEffect, useState } from "react";

// const useCurrency = () => {
//   const [data, setData] = useState({});
//   useEffect(() => {
//     fetch(
//       `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/lkr.json`
//     )
//       .then((res) => res.json())
//       .then((data) => setData(data["lkr"]));
//   }, []);

//   console.log(data, "data");
//   return data;
// };

// export default useCurrency;

const useCurrency = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/lkr.json`
        );
        const result = await response.json();
        setData(result["lkr"]);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data, "data");
  return data;
};

export default useCurrency;
