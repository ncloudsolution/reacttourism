import RailsComp from "./RailsComp";

export const metadata = {
  title:
    "Book Train Tickets Online | Best Prices & Easy Booking | tour Booking Srilanka",
  description:
    "Begin your adventure in Sri Lanka with our convenient train booking services. We offer an effortless and efficient way to secure your train tickets, allowing you to explore the stunning landscapes and vibrant cities of Sri Lanka by rail. Whether you're planning a scenic journey to Ella, a cultural trip to Kandy, or a coastal ride to Galle, our easy-to-use booking system ensures you get the best seats at competitive prices. Experience the charm and beauty of Sri Lanka’s railways with our reliable services, providing you with real-time schedules, multiple payment options, and exceptional customer support. Enjoy a smooth and enjoyable train journey, knowing we are committed to making your travel experience as delightful as possible. Trust us to handle your train reservations with professionalism and care, ensuring a memorable trip across this beautiful island.",
  keywords:
    "Train tickets booking, Online train, reservatie comparison,Cheap train tickets, Train travel deals, Train booking system, Book train tickets online",
  icons: {
    icon: ["/train.ico"],
  },
};

const RailPage = () => {
  return (
    <>
      <RailsComp />
    </>
  );
};

export default RailPage;
