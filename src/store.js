import { configureStore } from "@reduxjs/toolkit";
import colorReducer from './features/color/colorSlice'

export const store = configureStore({
    reducer: {
      color: colorReducer,
    }
  });
/*
  store.subscribe(() => {
    console.log(store.getState());
  }) */