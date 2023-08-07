import React, { useEffect, useState } from "react";
import { cuisines } from "../constants/cuisines";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRecipe,
  setIsRecipeSelected,
} from "../redux/features/recipeSlice";
import Image from "next/image";
const CuisineTypes = () => {
  const [cuisineList, setCuisineList] = useState(cuisines);
  const dispatch = useDispatch();
  const { recipe, status, error, isRecipeSelected } = useSelector(
    (state) => state.recipe
  );

  const selectRecipe = (cuisineType) => {
    // dispatch(fetchRecipe(cuisineType.value));
    // dispatch(setIsRecipeSelected(true));
    const updatedCuisines = cuisineList.map((item) => {
      if (item.id === cuisineType.id)
        return {
          ...item,
          isSelected: !item.isSelected
        };
      return item;
    });
    setCuisineList(updatedCuisines);
  };


  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3">
      {cuisineList?.map((cuisineType) => (
        <span
          key={cuisineType.id}
          onClick={() => selectRecipe(cuisineType)}
          className={ `flex items-center justify-between cursor-pointer px-4 py-2 mx-8 my-4 text-sm  rounded-lg   ${cuisineType.isSelected ? 'bg-mainButtonText text-white' : 'bg-white text-mainButtonText'}`}
        >
          {cuisineType.value}
          <span className="flex items-center justify-center scale-125 ">
            {cuisineType.icon}
          </span>
        </span>
      ))}
    </div>
  );
};

export default CuisineTypes;
