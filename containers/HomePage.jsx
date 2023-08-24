"use client";
import {
  fetchRecipe,
  resetRecipeState,
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
  const { recipe, isRecipeSelected } = useSelector((state) => state.recipe);
  const [cuisineList, setCuisineList] = useState(cuisines);
  const [showModal, setShowModal] = useState(false);
  const [isLoadMoreClicked, setIsLoadMoreClicked] = useState(false);
  const [filterValue, setFilterValue] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState();
  const dispatch = useDispatch();

  // DEFAULT FETCH ALL MEALS

  useEffect(() => {
    // getting cuisine list info and selected cuisines from session storage
    const storedCuisineList = JSON.parse(
      global?.window?.sessionStorage?.getItem("sessionStorageCuisineList")
    );

    if (storedCuisineList) {
      setCuisineList(storedCuisineList);
    }

    const storedFilters = JSON.parse(
      global?.window?.sessionStorage?.getItem("sessionStorageRecipes")
    );
    // ------------------------------

    if (storedFilters?.length > 0 && storedFilters) {
      dispatch(setIsRecipeSelected(true));

      const filteredArray = cuisineList.filter((item) =>
        storedFilters.includes(item.value)
      );

      // Check if a cuisine is already present in the recipe data
      const cuisinesToFetch = filteredArray.filter(
        (item) =>
          !recipe.some((recipeItem) => recipeItem.cuisineValue === item.value)
      );

      // Fetch only the cuisines that are not already in the recipe data
      cuisinesToFetch.forEach((item) =>
        dispatch(fetchRecipe({ cuisineValue: item.value, number: 30 }))
      );

      // Update isSelected for the filteredArray
      filteredArray.map((item) =>
        item.isSelected ? (item.isSelected = false) : (item.isSelected = true)
      );
    } else {
      dispatch(setIsRecipeSelected(false));
      dispatch(fetchRecipe({ number: 30 }));
    }
  }, []);

  const handleCuisines = () => {
    setShowModal(true);
  };

  // SELECTING CUISINE TYPES

  const selectRecipe = (cuisineType) => {
    const updatedCuisines = cuisineList.map((item) => {
      if (item.id === cuisineType.id) {
        return {
          ...item,
          isSelected: !item.isSelected,
        };
      }

      return item;
    });
    setCuisineList(updatedCuisines);

    sessionStorage.setItem(
      "sessionStorageCuisineList",
      JSON.stringify(updatedCuisines)
    );
  };

  // CLOSING MODAL AND FETCHING SELECTED CUISINES

  const showRecipeResult = () => {
    setShowModal(false);
    setFilterValue("");
    let sessionStorageCuisines = [];

    const finalRecipe = cuisineList.filter(
      (recipe) => recipe.isSelected === true
    );

    dispatch(setIsRecipeSelected(false));

    finalRecipe?.forEach((obj) => {
      sessionStorageCuisines.push(obj.value);
      dispatch(fetchRecipe({ cuisineValue: obj.value, number: 30 }));
    });
    sessionStorage.setItem(
      "sessionStorageRecipes",
      JSON.stringify(sessionStorageCuisines)
    );

    if (finalRecipe.length === 0) {
      dispatch(setIsRecipeSelected(false));
      dispatch(fetchRecipe({ number: 30 }));
    } else {
      setFilteredRecipes(null);
      setIsLoadMoreClicked(false);
      dispatch(setIsRecipeSelected(true));
    }
  };

  //SHOW MORE

  const showMoreClick = () => {
    dispatch(resetRecipeState());
    setIsLoadMoreClicked(true);
    if (isRecipeSelected) {
      [...recipe].sort((a, b) => b.data.totalResults - a.data.totalResults);
      recipe.forEach((item) => {
        console.log(item?.data?.totalResults);
        dispatch(
          fetchRecipe({
            cuisineValue: item.cuisineValue,
            number: item?.data?.totalResults,
          })
        );
      });
    } else {
      dispatch(fetchRecipe({ number: 100 }));
    }
  };

  //FILTERING

  useEffect(() => {
    const filterRecipes = () => {
      if (filterValue === "") {
        setFilteredRecipes(null);
      } else {
        if (!isRecipeSelected) {
          const filtered = recipe[0]?.results.filter((item) =>
            item.title.toLowerCase().includes(filterValue)
          );
          setFilteredRecipes(filtered);
        } else {
          const filtered = recipe.flatMap((item) =>
            item.data?.results?.filter((item) =>
              item.title.toLowerCase().includes(filterValue)
            )
          );
          setFilteredRecipes(filtered);
        }
      }
    };

    filterRecipes();
  }, [filterValue, isRecipeSelected]);

  const searchCuisine = (e) => {
    setFilterValue(e?.target.value.toLowerCase());
  };

  return (
    <div className="mx-4 lg:mx-8 ">
      <div className="py-4 flex flex-col lg:flex-row justify-between  my-8  ">
        <div className="w-full lg:w-[25%] flex flex-col items-center   lg:my-0">
            <img
              src="/logo.png"
              className=" mr-3 mb-2 "
              fill
              alt="Fast Cook"
            />
        </div>
        <div className="w-full lg:w-[70%] ">
          <h1 className=" capitalize font-bold text-5xl text-mainDarkText  mb-2 lg:mb-4">
            Welcome to Fast Cook
          </h1>
          <p className=" text-mainDarkText text-lg lg:text-2xl">
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
        <h2 className="capitalize font-bold text-2xl lg:text-4xl text-mainDarkText text-center my-8 lg:my-16">
          Our choices for you
        </h2>
        <Search onClick={searchCuisine} inputValue={filterValue} />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-16  my-8">
        {isRecipeSelected
          ? filteredRecipes?.map((item) => <MealCard item={item} />) ??
            recipe?.flatMap((item) =>
              item.data?.results?.map((result) => <MealCard item={result} />)
            )
          : filteredRecipes?.map((item) => <MealCard item={item} />) ??
            recipe[0]?.results?.map((item) => <MealCard item={item} />)}
      </div>
      {!isLoadMoreClicked && !filterValue && (
        <div className=" my-2 lg:my-4  flex justify-center">
          <CommonButton onClick={showMoreClick} title={"show more"} />
        </div>
      )}
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
