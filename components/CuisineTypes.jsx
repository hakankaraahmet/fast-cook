import React from 'react'
import {cuisines} from '../constants/cuisines'
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipe , setIsRecipeSelected } from '../redux/features/recipeSlice';
const CuisineTypes = () => {
   const dispatch = useDispatch();
   const { recipe, status, error , isRecipeSelected } = useSelector((state) => state.recipe);

   console.log('isRecipeSelected :>> ', isRecipeSelected);

   const selectRecipe = (cuisineType) => {
    dispatch(fetchRecipe(cuisineType.value))
    dispatch(setIsRecipeSelected(true))
   }

   console.log('recipe :>> ', recipe);

  return (
    <div className=' grid  md:grid-cols-2 lg:grid-cols-3'>
      {cuisines?.map((cuisineType) => (
        <span
        key={cuisineType.id}
        onClick={() => selectRecipe(cuisineType)}
        className="text-white mx-8 flex  items-center text-sm  py-2 px-8 bg-mainButtonText rounded-lg my-4"
      >
        {cuisineType.value}
      </span>
      ))}
    </div>
  )
}

export default CuisineTypes
