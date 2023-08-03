"use client";
import { fetchRecipe } from "../redux/features/recipeSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MealCard from "../components/MealCard";
import CommonModal from "../components/CommonModal";
const HomePage = () => {
  const [showModal, setShowModal] = React.useState(false);
  // const dispatch = useDispatch();
  // const { recipe, status, error } = useSelector((state) => state.recipe);

  // useEffect(() => {
  //   dispatch(fetchRecipe());
  // }, [dispatch]);

  const recipe = [
    {
      id: 0,
      title: "asd",
      image: "dfgdfg",
    },
    {
      id: 1,
      title: "asd",
      image: "dfgdfg",
    },
    {
      id: 2,
      title: "asd",
      image: "dfgdfg",
    },
    {
      id: 3,
      title: "asd",
      image: "dfgdfg",
    },
  ];
  return (
    <div>
      <div className="  py-8">
        <span
          className="text-white mx-8   py-2 px-8 bg-mainButtonText rounded-lg my-8"
          onClick={() => setShowModal(true)}
        >
          Choose cusine
        </span>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-16 mx-8">
        {recipe?.map((item) => (
          <MealCard item={item} key={item.id} />
        ))}
      </div>
      <CommonModal
        showModal={showModal}
        setShowModal={setShowModal}
        title={"Best cuisines for you..."}
        buttonName={"See Cuisines"}
      />
    </div>
  );
};

export default HomePage;
