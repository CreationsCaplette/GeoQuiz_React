import { createSlice } from "@reduxjs/toolkit";
import { SCENES } from "./scenes.js";

const sceneSlice = createSlice({
    name: 'scene',
    initialState: {
        currentScene: SCENES.splash,
    },
    reducers: {
        goToScene(state, action) {
            state.currentScene = action.payload;
        },
    }
});

export const sceneActions = sceneSlice.actions;

export default sceneSlice;