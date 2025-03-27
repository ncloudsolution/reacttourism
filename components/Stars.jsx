import { IoStar } from "react-icons/io5";

const Stars = ({ count }) => {
  const stars = [];

  for (let i = 0; i < count; i++) {
    stars.push(
      <IoStar key={i} className="text-yellow-500 text-[20px] my-[10px] mr-1" />
    );
  }

  return (
    <div className="flex bg-white w-fit py-2 h-[30px] items-center my-2 px-2 rounded ">
      {stars}
    </div>
  );
};

export default Stars;
