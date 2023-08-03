'use client'
import { fetchRecipe } from "@/redux/features/recipeSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MealCard from "../components/MealCard";
const HomePage = () => {
    const dispatch = useDispatch();
    const { recipe, status, error } = useSelector((state) => state.recipe);
  
    useEffect(() => {
      dispatch(fetchRecipe());
    }, [dispatch]);

  return (
    <div className="flex flex-wrap space-x-4 space-y-4 border">
      {recipe?.results.map((item) => (
        <MealCard item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default HomePage
