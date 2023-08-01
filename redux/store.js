import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from './features/recipeSlice';

const store = configureStore({
  reducer: {
    recipe: recipeReducer
  },
});

export default store;