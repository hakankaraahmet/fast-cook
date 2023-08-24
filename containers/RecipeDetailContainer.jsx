"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipeDetail } from "../redux/features/recipeDetailSlice";
import Image from "next/image";

const RecipeDetailContainer = ({ params }) => {
  const { recipeDetail } = useSelector((state) => state.recipeDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipeDetail({ id: params?.recipeId }));
  }, []);

  console.log('recipeDetail :>> ', recipeDetail);

  if (!recipeDetail) {
    return <p>Loading...</p>; // or any loading indicator
  }
  return (
    <div className="text-mainDarkText flex flex-col lg:flex-row justify-between m-4 lg:mx-8  w-full min-h-full ">
      {/* Left Part */}
      <div className="lg:w-2/5  flex flex-col items-start  mt-4 lg:m-8  text-white rounded-3xl h-fit">
        <div className="w-full md:w-1/2 lg:w-full h-80 relative ">
          <Image
            src={recipeDetail.image}
            alt="image name"
            fill
            className="rounded-3xl"
          />
        </div>
        <div className="p-2">
          <h1 className="text-3xl font-bold mt-2 leading-10">
            {recipeDetail.title}
          </h1>
          <div className="capitalize font-bold flex flex-col  mt-4">
            {recipeDetail.vegan && (
              <span className="pr-2 py-1 rounded-xl ">vegan &#x2713;</span>
            )}
            {recipeDetail.vegetarian && (
              <span className="pr-2 py-1 rounded-xl ">vegetarian &#x2713;</span>
            )}
            {recipeDetail.glutenFree && (
              <span className="pr-2 py-1 rounded-xl ">
                Gluten Free &#x2713;
              </span>
            )}
          </div>
          <div className=" mt-4">
            Health Score:{" "}
            <span className="text-xl">{recipeDetail.healthScore}</span>
          </div>
          <div className="mt-2">
            Preparation Time:{" "}
            <span className="text-xl">{recipeDetail.readyInMinutes} min</span>
          </div>
        </div>
      </div>
      {/* Right Part */}
      <div className="lg:w-3/5 mt-4 lg:m-8  text-white rounded-3xl p-2">
        <h2 className="text-2xl font-bold mt-2 leading-6">Ingredients</h2>
        <table className="mt-2">
          <tbody className="text-left grid grid-cols-1 gap-y-4 mt-4">
            {recipeDetail.extendedIngredients.map((ingredient) => (
              <tr key={ingredient.id}>
                <th className="text-xl">
                  <span className="mr-2">&#x21a0;</span> {ingredient.original}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 className="text-xl font-bold leading-6 mt-4 lg:mt-8">
          How to do ?
        </h2>
        <table className="mt-2">
          <tbody className="text-left">
            {recipeDetail.analyzedInstructions[0].steps.map((instruction) => (
              <tr key={instruction.id}>
                <th >
                  <span className="mr-2">&#x21a0;</span> {instruction.step}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 className="text-2xl font-bold leading-6 mt-4 lg:mt-8">Summary</h2>
        <p
          className="mt-2"
          dangerouslySetInnerHTML={{ __html: recipeDetail.summary }}
        />
      </div>
    </div>
  );
};

export default RecipeDetailContainer;
