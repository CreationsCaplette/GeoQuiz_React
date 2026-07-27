import { configureStore } from "@reduxjs/toolkit";
import sceneSlice from "./scene-slice";
import gameSlice from "./game-slice";

const store = configureStore({
    reducer: {
        scene: sceneSlice.reducer,
        game: gameSlice.reducer,
    }
});

export default store;