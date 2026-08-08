import { gameActions } from './game-slice.jsx';
import { fetchJson } from '../utils/fetchHelper.js';

export const fetchGameData = (gameType) => {
    return async dispatch => {
        if (!gameType) return;

        dispatch(gameActions.resetGame());
        dispatch(gameActions.setGameType(gameType));
        dispatch(gameActions.setLoading(true));

        try {
            const data = await fetchJson(`https://localhost:7266/game/${gameType}`);
            dispatch(gameActions.setQuestions(data));
        } catch (error) {
            dispatch(gameActions.setError(error instanceof Error ? error.message : String(error)));
        } finally {
            dispatch(gameActions.setLoading(false));
        }
    };
};