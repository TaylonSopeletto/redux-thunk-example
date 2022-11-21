import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      setCartInfo: (state, action) => {
        return state = action.payload
      },
      setCart: (state, action) => {
        if(!state.includes(action.payload)){
            state.push(action.payload)
        }else{
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        }
      }
    }
});

export default cartSlice.reducer;
export const { setCart, setCartInfo } = cartSlice.actions;
export const cart = (state) => state;