import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_REACT_APP_API_KEY; 

const initialState = {
  recipe: [],
  status: "idle",
  error: null,
};



export const fetchRecipe = createAsyncThunk('recipe/fetchRecipe', async () => {
    try {
      const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
        params: {
            apiKey: apiKey,
            number: 30
          },
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch recipes from the API.');
    }
  });

const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchRecipe.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchRecipe.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.recipe = action.payload;
        })
        .addCase(fetchRecipe.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });

  export default recipeSlice.reducer;