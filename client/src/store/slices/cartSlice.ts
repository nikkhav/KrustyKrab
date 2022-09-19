import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface CartState {
  value: number;
  numberOfItems: number;
  order: Order[];
}
// Define a type for the order state
interface Order {
  _id: string;
  title: string;
  price: number;
  image: string;
  amount: number;
  type: string;
}
// Define a props type for remove item function
interface RemoveItemProps {
  title: string;
  price: number;
}
// Define the initial state using that type
const initialState: CartState = {
  value: 0,
  numberOfItems: 0,
  order: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemPrice: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
      state.numberOfItems++;
    },
    addItem: (state, action: PayloadAction<Order>) => {
      state.order.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<RemoveItemProps>) => {
      state.order = state.order.filter((item) => {
        if (item.title === action.payload.title && item.amount > 1) {
          item.amount -= 1;
          return true;
        }
        return item.title !== action.payload.title;
      });
      state.numberOfItems--;
      state.value = state.value - action.payload.price;
    },
    increaseAmount: (state, action: PayloadAction<string>) => {
      const item = state.order.find((item) => item.title === action.payload);
      if (item) {
        item.amount++;
      }
    },
  },
});

export const { addItemPrice, addItem, removeItem, increaseAmount } =
  cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.value;

export default cartSlice.reducer;
