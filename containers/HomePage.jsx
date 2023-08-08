"use client";
import {
  fetchRecipe,
  setIsRecipeSelected,
} from "../redux/features/recipeSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MealCard from "../components/MealCard";
import CommonModal from "../components/CommonModal";
import CuisineTypes from "../components/CuisineTypes";
import { cuisines } from "../constants/cuisines";
const HomePage = () => {
  const [cuisineList, setCuisineList] = useState(cuisines);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { recipe, isRecipeSelected } = useSelector((state) => state.recipe);

  // DEFAULT FETCH ALL MEALS

  useEffect(() => {
    if (!isRecipeSelected) {
      dispatch(fetchRecipe());
    }
  }, [isRecipeSelected]);

  console.log("isRecipeSelected :>> ", isRecipeSelected);

  const handleCuisines = () => {
    setShowModal(true);
  };

  // SELECTING CUISINE TYPES

  const selectRecipe = (cuisineType) => {
    const updatedCuisines = cuisineList.map((item) => {
      if (item.id === cuisineType.id)
        return {
          ...item,
          isSelected: !item.isSelected,
        };
      return item;
    });
    setCuisineList(updatedCuisines);
  };

  // CLOSING MODAL AND FETCHING SELECTED CUISINES

  const showRecipeResult = () => {
    setShowModal(false);
    const finalRecipe = cuisineList.filter(
      (recipe) => recipe.isSelected === true
    );
    console.log("finalRecipe :>> ", finalRecipe);

    finalRecipe?.forEach((obj) => {
      dispatch(fetchRecipe(obj.value));
    });

    if (finalRecipe.length === 0) {
      dispatch(setIsRecipeSelected(false));
    } else {
      dispatch(setIsRecipeSelected(true));
    }
  };

  return (
    <div>
      <div className="  py-8">
        <span
          className="text-white mx-8 cursor-pointer  py-2 px-8 bg-mainButtonText rounded-lg my-8"
          onClick={handleCuisines}
        >
          Choose cusine
        </span>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-16 mx-8 mb-8">
        {isRecipeSelected
          ? recipe?.flatMap((item) =>
              item.data.results?.map((result) => (
                <MealCard item={result} key={result.id} />
              ))
            )
          : recipe[0]?.results?.map((item) => (
              <MealCard item={item} key={item.id} />
            ))}
      </div>
      <CommonModal
        showModal={showModal}
        setShowModal={setShowModal}
        title={"Best cuisines for you..."}
        buttonName={"See Cuisines"}
        onClick={showRecipeResult}
      >
        <CuisineTypes selectRecipe={selectRecipe} cuisineList={cuisineList} />
      </CommonModal>
    </div>
  );
};

export default HomePage;
