import RailsComp from "./RailsComp";

export const metadata = {
  title: "Journey On Rails",
  description:
    "Begin your adventure in Sri Lanka with our convenient train booking services. We offer an effortless and efficient way to secure your train tickets, allowing you to explore the stunning landscapes and vibrant cities of Sri Lanka by rail. Whether you're planning a scenic journey to Ella, a cultural trip to Kandy, or a coastal ride to Galle, our easy-to-use booking system ensures you get the best seats at competitive prices. Experience the charm and beauty of Sri Lanka’s railways with our reliable services, providing you with real-time schedules, multiple payment options, and exceptional customer support. Enjoy a smooth and enjoyable train journey, knowing we are committed to making your travel experience as delightful as possible. Trust us to handle your train reservations with professionalism and care, ensuring a memorable trip across this beautiful island.",
  keywords:
    "train booking, up country, ella, badulla, kandy, udarata manike, ella odyssey, dunhinda odyssey, tourist train, observation saloon, train ticket, sri-lanka-rails-ways, book-train-tickerts-online, trains_schedule, search train, train_booking, e-ticket, dunhida_odyssey, ella_odyssey, colombo_kandy-nanu-oya-ella-baddulla",
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
