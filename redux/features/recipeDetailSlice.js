import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_REACT_APP_API_KEY_3;

const initialState = {
    recipeDetail: null,
    status: "idle",
    error: null,
  };

  export const fetchRecipeDetail = createAsyncThunk(
    "recipeDetail/fetchRecipeDetail",
    async ({id}) => {
      try {
        const params = {
          apiKey: apiKey,
        };
  
        const response = await axios.get(
           `https://api.spoonacular.com/recipes/${id}/information`,
          {
            params: params,
          }
        );
        return response.data
      } catch (error) {
        throw new Error("Failed to fetch recipe detail from the API.");
      }
    }
  );

  const recipeDetailSlice = createSlice({
    name: 'recipeDetail',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(fetchRecipeDetail.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(fetchRecipeDetail.fulfilled, (state, action) => {
            state.status = 'succeeded',
            state.recipeDetail = action.payload
        }),
        builder.addCase(fetchRecipeDetail.rejected, (state,action) => {
            state.status = 'failed',
            state.error = action.error.message
        })
    }
  })


  export default recipeDetailSlice.reducer;