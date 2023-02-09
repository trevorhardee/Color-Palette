import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const colorSlice = createSlice({
    name: 'colors',
    initialState,
    reducers: {
        colorPush: (state, action) => {
            if (action.payload !== undefined){
                const { type, payload } = action;
                let curr = state.filter(color => color.id === payload.id)
                    if (curr.length === 0){
                        return state.concat(payload)
                    } else {
                        return state
                    }
            }
        },
        colorPop: (state, action) => {
            // This isn't working properly
            // I think I may need to call is from tileMap in App.js and remove id from tileMap array
            return state.filter(color => color.id !== action.payload)
        },
        randomizeColor: (state, action) => {
            if (!state[action.payload].isLocked){
                let red = Math.floor(Math.random() * 255).toString(16);
                red = red.length < 2 ? red = '0' + red: red;
                let green = Math.floor(Math.random() * 255).toString(16);
                green = green.length < 2 ? green = '0' + green: green;
                let blue = Math.floor(Math.random() * 255).toString(16);
                blue = blue.length < 2 ? blue = '0' + blue: blue;
                state[action.payload].tileColor = '#' + red + blue + green;
            }
        }, 
        toggleLock: (state, action) => {
            state[action.payload].isLocked = !state[action.payload].isLocked
        },
    },
})

export const { colorPush, colorPop, randomizeColor, toggleLock } = colorSlice.actions
export default colorSlice.reducer