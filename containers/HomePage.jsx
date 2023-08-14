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
import CommonButton from "../components/CommonButton";
import Search from "../components/Search";
import Image from "next/image";
const HomePage = () => {
  const [cuisineList, setCuisineList] = useState(cuisines);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { recipe, isRecipeSelected } = useSelector((state) => state.recipe);

  const storedFilters = global?.window?.sessionStorage?.getItem(
    "sessionStorageRecipes"
  );
  const storedCuisines = global?.window?.sessionStorage?.getItem(
    'sessionStorageCuisines'
  )

 

  // DEFAULT FETCH ALL MEALS

  useEffect(() => {
 
    if(storedFilters?.length > 0 && storedFilters){
      dispatch(setIsRecipeSelected(true));
    //  JSON.parse(storedFilters)?.map((item) => dispatch(fetchRecipe(item)));
    }
    else{
    //  dispatch(fetchRecipe())
    }

    console.log('storedCuisines :>> ', storedCuisines);
    console.log('storedFilters :>> ', storedFilters);
  }, []);

  console.log('cuisineList :>> ', cuisineList);

  const handleCuisines = () => {
    setShowModal(true);
  };

  // SELECTING CUISINE TYPES

  const selectRecipe = (cuisineType) => {
    const updatedCuisines = cuisineList.map((item) => {
      if (item.id === cuisineType.id){
        sessionStorage.setItem(
          "sessionStorageCuisines",
          JSON.stringify(item.value)
        );
        return {
          ...item,
          isSelected: !item.isSelected,
        };
      }
  
      return item;
    });
    setCuisineList(updatedCuisines);
  };

  // CLOSING MODAL AND FETCHING SELECTED CUISINES

  const showRecipeResult = () => {
    setShowModal(false);
    let sessionStorageCuisines = [];

    const finalRecipe = cuisineList.filter(
      (recipe) => recipe.isSelected === true
    );

    dispatch(setIsRecipeSelected(false));

    finalRecipe?.forEach((obj) => {
      sessionStorageCuisines.push(obj.value);
      console.log("obj :>> ", obj.value);
     // dispatch(fetchRecipe(obj.value));
    });
    sessionStorage.setItem(
      "sessionStorageRecipes",
      JSON.stringify(sessionStorageCuisines)
    );

    if (finalRecipe.length === 0) {
      dispatch(setIsRecipeSelected(false));
    } else {
      dispatch(setIsRecipeSelected(true));
    }
  };

  //

  const showMoreClick = () => {};

  return (
    <div className="mx-8">
      <div className="py-4 flex flex-col lg:flex-row justify-between  my-8">
        <div className="w-full lg:w-[20%] flex flex-col items-center  my-8 lg:my-0">
          <span className="relative w-32 h-32 ">
            <Image
              src="/bigLogo.svg"
              className=" mr-3 mb-2"
              fill
              alt="Fast Cook"
            />
          </span>
        </div>
        <div className="w-full lg:w-[70%] ">
          <h1 className=" capitalize font-bold text-4xl text-mainButtonText  mb-2 lg:mb-4">
            Welcome to Fast Cook
          </h1>
          <p className=" text-mainButtonText text-lg lg:text-2xl">
            Welcome to our world of flavors! Dive into a global culinary journey
            with our extensive collection of recipes spanning diverse cuisines.
            From fragrant Asian spices to savory Mediterranean herbs, unleash
            your inner chef and explore the rich tapestry of tastes that our
            recipe website has to offer. Elevate your cooking experience and
            savor the world, one dish at a time!
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 items-center">
        <div className="flex justify-center lg:justify-start">
          <CommonButton onClick={handleCuisines} title={"choose cuisine"} />
        </div>
        <h2 className="capitalize font-bold text-2xl lg:text-4xl text-mainButtonText text-center my-8 lg:my-16">
          Our choices for you
        </h2>
        <Search />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-16  mb-8">
        {isRecipeSelected
          ? recipe?.flatMap((item) =>
              item.data?.results?.map((result) => (
                <MealCard item={result} key={result.id} />
              ))
            )
          : recipe[0]?.results?.map((item) => (
              <MealCard item={item} key={item.id} />
            ))}
      </div>
      <div className=" my-2 lg:my-4  flex justify-center">
        <CommonButton onClick={showMoreClick} title={"show more"} />
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
