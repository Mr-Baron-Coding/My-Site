import { createSlice } from "@reduxjs/toolkit";

const initialMessage = false;

export const messageSlice = createSlice({
    name: 'messages',
    initialState: {
        valueBottom: initialMessage,
        modeButtons: initialMessage,
        gamePaused: initialMessage,
        diffButtons: initialMessage
        
    },
    
    reducers: {
        dispalyBottomMessage: (state, action) => {
            state.valueBottom = action.payload;              // display "are you sure" message         
        },
        disableModeButtons: (state, action) => {
            state.modeButtons = action.payload;              
        },
        displayModeButtons: (state, action) => {
            state.diffButtons = action.payload;             // display the difficulty buttons
        }
    }
});

export const { dispalyBottomMessage, disableModeButtons, displayModeButtons } = messageSlice.actions;

export default messageSlice.reducer;