"use client";
import { fetchRecipe } from "../redux/features/recipeSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MealCard from "../components/MealCard";
import CommonModal from "../components/CommonModal";
import CuisineTypes from "../components/CuisineTypes";
const HomePage = () => {
  const [showModal, setShowModal] = React.useState(false);
  const dispatch = useDispatch();
  const { recipe, status, error, isRecipeSelected } = useSelector(
    (state) => state.recipe
  );

  useEffect(() => {
    if (!isRecipeSelected) {
      dispatch(fetchRecipe());
    }
  }, []);

  const handleCuisines = () => {
    setShowModal(true);
  };
  

  return (
    <div>
      <div className="  py-8">
        <span
          className="text-white mx-8   py-2 px-8 bg-mainButtonText rounded-lg my-8"
          onClick={handleCuisines}
        >
          Choose cusine
        </span>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-16 mx-8 mb-8">
        {isRecipeSelected
          ? recipe?.flatMap((item) =>
              item.data.results.map((result) => (
                <MealCard item={result} key={result.id} />
              ))
            )
          : recipe[0]?.results.map((item) => (
              <MealCard item={item} key={item.id} />
            ))}
      </div>
      <CommonModal
        showModal={showModal}
        setShowModal={setShowModal}
        title={"Best cuisines for you..."}
        buttonName={"See Cuisines"}
      >
        <CuisineTypes />
      </CommonModal>
    </div>
  );
};

export default HomePage;
