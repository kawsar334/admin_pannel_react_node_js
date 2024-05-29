import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    quantity: 0
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        AddToCart: (state, action) => {
            let {id, title, price, quantity} = action.payload;
            const existProduct = state.products.find(item=>item.id=== id);
            if(existProduct){
                state.quantity +=1;
            }else{
                const qty = state.quantity +=1;
                state.products.push({ id, title, price, qty });

            }
        },
        removeCart: (state, action) => {
            const id = action.payload;
            state.products = state.products.filter((item) => item.id !== id)
            state.quantity -=1 ;
        },
        incrementQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const product = state.products.find((item) => item.id === id);
            if (product) {
                product.quantity += quantity
            }
        },
        decrementQuantity: (state, action) => {
            const { id, quantity } = action.payload
            const product = state.products.find(item => item.id === id);
            if (product && state.quantity > 1) {
                state.quantity -= quantity;
            }
        },
    }
})


export const { AddToCart, removeCart, incrementQuantity, decrementQuantity } = CartSlice.actions;
export default CartSlice.reducer;
