import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  value: number;
  order: Order[];
}

interface Order {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
}

interface RemoveItemProps {
  // TODO заменить на id
  id?: number;
  title: string;
  price: number;
}

const initialState: CartState = {
  value: 0,
  order: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemPrice: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    addItem: (state, action: PayloadAction<Order>) => {
      state.order.push(action.payload);
    },
    // TODO Заменить item.title на item.id
    removeItem: (state, action: PayloadAction<RemoveItemProps>) => {
      state.order = state.order.filter(
        (item) => item.title !== action.payload.title
      );
      state.value = state.value - action.payload.price;
    },
    // TODO Заменить item.title на item.id
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
