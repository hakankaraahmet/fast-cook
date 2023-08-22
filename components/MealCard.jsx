import { useRouter } from "next/navigation";
import React from "react";

const MealCard = ({ item }) => {
  const router = useRouter();
  return (
    <div
      className="w-full h-full cursor-pointer "
      key={item.id}
      onClick={() => router.push(`/${item.id}`)}
    >
      <div className="h-full flex flex-col justify-between  p-9 bg-gradient-mainTheme  rounded-2xl overflow-hidden shadow-xl hover:shadow-3xl hover:scale-110 transition duration-300">
        <img className="rounded-xl" src={item?.image} alt="" />
        <div className="flex flex-col">
          <div>
            <h1 className="mt-5 text-xl font-semibold">{item?.title}</h1>
          </div>
          <div>
            <button className="mt-5 text-mainDarkText text-md font-semibold bg-mainButton py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">
              Receipt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
