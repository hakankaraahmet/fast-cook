"use client";
import { fetchRecipe } from "@/redux/features/recipeSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const { recipe, status, error } = useSelector((state) => state.recipe);

  useEffect(() => {
    dispatch(fetchRecipe());
  }, [dispatch]);

  // if (status === 'loading') {
  //   return <div>Loading...</div>;
  // }

  // if (status === 'failed') {
  //   return <div>Error: {error}</div>;
  // }

  console.log('data :>> ', recipe);

  return (
    <main>
      Hello world
    </main>
  );
};

export default Home;
