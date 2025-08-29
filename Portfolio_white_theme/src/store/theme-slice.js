import { createSlice } from "@reduxjs/toolkit"


var themeSlice = createSlice({
    name: 'theme',
    initialState: { isDarkMode: false },
    reducers: {
        toggleDarkMode(state) {
            state.isDarkMode = !state.isDarkMode;
        }
    }
})

export default themeSlice;
export const themeAction =  themeSlice.actions;