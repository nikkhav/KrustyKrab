import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import adminReducer from "./slices/adminSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    admin: adminReducer,
  },
});

// Language: typescript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
