import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = 'd6a0518787fe4e59b1fa05978df07d8c';

const initialState = {
  recipe: [],
  status: "idle",
  error: null,
  isRecipeSelected: false,
};

export const fetchRecipe = createAsyncThunk(
  "recipe/fetchRecipe",
  async ({cuisineValue = null, number}) => {
    try {
      const params = {
        apiKey: apiKey,
        number: number,
        ...(cuisineValue ? { cuisine: cuisineValue } : {}),
      };

      const response = await axios.get(
        "https://api.spoonacular.com/recipes/complexSearch",
        {
          params: params,
        }
      );
      return cuisineValue
        ? { cuisineValue, data: response.data }
        : response.data;
    } catch (error) {
      throw new Error("Failed to fetch recipes from the API.");
    }
  }
);

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setIsRecipeSelected: (state, action) => {
      if (!state.isRecipeSelected) {
        state.recipe = [];
      }
      state.isRecipeSelected = action.payload;
    },
    resetRecipeState: (state) => {
      state.recipe = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipe.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRecipe.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.recipe = state.recipe.concat(action.payload);
      })
      .addCase(fetchRecipe.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setIsRecipeSelected , resetRecipeState} = recipeSlice.actions;
export default recipeSlice.reducer;
