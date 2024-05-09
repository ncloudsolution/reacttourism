import { Tailwind, Button } from "@react-email/components";

const OwnerEmail = () => {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            transitionDuration: {
              2000: "2000ms",
              3000: "3000ms",
            },
            boxShadow: {
              shimmershadow: "0 0 30px 30px rgba(255, 255, 255, 0.05)",
              popshadow:
                "-2px 8px 10px 4px rgba(0, 0, 0, 0.05), 2px -8px 10px 4px rgba(0, 0, 0, 0.05)",
            },

            screens: {
              xxxs: "330px",
              xxs: "380px",
              xs: "480px",
              bxs: "540px",

              bigmd: "860px",

              mobile: "1150px",
              midxl: "1400px",

              //   'sm': '640px',
              //   'md': '768px',
              //   'lg': '1024px',
              //   'xl': '1280px',
              //   '2xl': '1536px',**/
            },
            colors: {
              primary: "#eab308",
              Secondary: "#14d01f",
              errorpink: "#be185d",
              navgray: "#93939311",
            },
          },
        },
      }}
    >
      {/* <Button
        href="https://example.com"
        className="bg-brand px-3 py-2 font-medium leading-4 text-white"
      >
        Click me
      </Button> */}

      <div className="bg-red-900 w-full mt-0">Hello</div>
    </Tailwind>
  );
};

export default OwnerEmail;
