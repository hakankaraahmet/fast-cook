import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from './features/recipeSlice';
import recipeDetailReducer from './features/recipeDetailSlice'

const store = configureStore({
  reducer: {
    recipe: recipeReducer,
    recipeDetail : recipeDetailReducer
  },
});

export default store;