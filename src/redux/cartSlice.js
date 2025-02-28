import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []  // Ensure it's an array
    },
    reducers: {
        AddItem: (state, action) => {
            if (Array.isArray(action.payload)) {
                state.items = action.payload;
            } else {
                console.error("Payload is not an array:", action.payload);
            }
        },
        
        RemoveItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload); // Remove by ID
          }
        
    }
});

export const { AddItem, RemoveItem } = cartSlice.actions;
export default cartSlice.reducer;
