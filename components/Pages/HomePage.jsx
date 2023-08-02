'use client'
import { fetchRecipe } from "@/redux/features/recipeSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MealCard from "../MealCard";
const HomePage = () => {
    // const dispatch = useDispatch();
    // const { recipe, status, error } = useSelector((state) => state.recipe);
  
    // useEffect(() => {
    //   dispatch(fetchRecipe());
    // }, [dispatch]);

    const recipe = [{id:0,title : `asd`, image: `https://plus.unsplash.com/premium_photo-1669559808981-004376c78d77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80`}]


      // if (status === 'loading') {
  //   return <div>Loading...</div>;
  // }

  // if (status === 'failed') {
  //   return <div>Error: {error}</div>;
  // }


  return (
    <div className="grid grid-cols-3 gap-8 border">
      {recipe?.map((item) => (
        <MealCard item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default HomePage
