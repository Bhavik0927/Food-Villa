import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {

        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        Remove_Item:(state,action) =>{
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        },
        Increase_quantity: (state, action) => {
            const id = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item) {
                item.inStock += 1;
            }

        },
        Decrease_quantity: (state, action) => {
            const id = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item && item.inStock > 1) {
                item.inStock -= 1;
            }
        }

    }

});

export const { addItem, Remove_Item, clearCart, Increase_quantity, Decrease_quantity } = cartSlice.actions;

export default cartSlice.reducer;


