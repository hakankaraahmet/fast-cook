"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const RecipeDetailContainer = ({ params }) => {
  const { recipe, isRecipeSelected } = useSelector((state) => state.recipe);
  const [selectedRecipe, setSelectedRecipe] = useState();

  useEffect(() => {
    if (isRecipeSelected) {
      setSelectedRecipe(
        recipe?.flatMap((item) =>
          item.data?.results?.find(
            (item) => item.id === parseInt(params.recipeId)
          )
        )
      );
    } else {
      setSelectedRecipe(
        recipe[0]?.results.find((item) => item.id === parseInt(params.recipeId))
      );
    }
  }, []);

  console.log("params :>> ", typeof params.recipeId);
  console.log("selectedRecipe :>> ", selectedRecipe);
  console.log("recipe :>> ", recipe);
  return <div className="text-mainDarkText">detail page</div>;
};

export default RecipeDetailContainer;
