import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsInStore: [],
  productsInCart: []
};

export const amazonSlice = createSlice({
    name: "amazonState",
    initialState,
    reducers: {
      setProductsInStore: (state,action) => {
        state.productsInStore = action.payload;
      },
      setProductsInCart: (state, action) => {
        state.productsInCart.push(action.payload);
      },
      removeProductsInCart:(state,action)=>{
        state.productsInCart=action.payload;
      }
    },
  });
  
  export const { setProductsInStore, setProductsInCart,removeProductsInCart } =
    amazonSlice.actions;
  export default amazonSlice.reducer;