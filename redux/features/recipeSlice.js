import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_REACT_APP_API_KEY;

const initialState = {
  recipe: [],
  status: "idle",
  error: null,
  isRecipeSelected: false,
};

export const fetchRecipe = createAsyncThunk(
  "recipe/fetchRecipe",
  async (cuisineValue = null) => {
    try {
      const params = {
        apiKey: apiKey,
        number: 10,
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

export const { setIsRecipeSelected } = recipeSlice.actions;
export default recipeSlice.reducer;
