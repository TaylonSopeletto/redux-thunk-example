import { updateCartClientService } from '../services/cart'
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setCart } from '../slices/CartSlice'

export const setCartThunk = createAsyncThunk(
    'setCart',
    async(cart, {dispatch, getState}) => {
        dispatch(setCart(cart))
        await updateCartClientService(getState())
    }
)

