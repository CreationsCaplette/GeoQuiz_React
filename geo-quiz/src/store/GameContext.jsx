import { createContext, useCallback, useMemo, useReducer } from "react";
import useHttp from "../hooks/useHttp";

const initialState = {
    questionIndex: 0,
    score: 0,
    isGameOver: false,
};

function gameReducer(state, action) {
    switch (action.type) {
        case "NEXT": {
            const nextIndex = state.questionIndex + 1;
            return {
                ...state,
                questionIndex: nextIndex,
                score: state.score + action.points,
                isGameOver: nextIndex >= action.questionCount,
            };
        }
        case "RESET":
            return initialState;
        default:
            return state;
    }
}

const GameContext = createContext({
    questions: [],
    questionIndex: 0,
    score: 0,
    isLoading: false,
    isGameOver: false,
    error: null,
    goToNextQuestion: () => { },
    resetGame: () => { },
});

export function GameContextProvider({ children }) {
    const [gameState, dispatch] = useReducer(gameReducer, initialState);

    const { data: questions, isLoading, error } = useHttp(
        'https://localhost:7266/game/capitals',
        {},
        []
    );

    const goToNextQuestion = useCallback((questionCount, pointsToAdd = 0) => {
        dispatch({ type: "NEXT", questionCount, points: pointsToAdd })
    }, []);

    const resetGame = useCallback(() => {
        dispatch({ type: "RESET" });
    }, []);

    const value = useMemo(
        () => ({
            questions,
            questionIndex: gameState.questionIndex,
            score: gameState.score,
            isLoading,
            isGameOver: gameState.isGameOver,
            error,
            goToNextQuestion,
            resetGame,
        }),
        [questions, gameState.questionIndex, gameState.score, gameState.isGameOver, isLoading, error, goToNextQuestion, resetGame]
    );

    return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}

export default GameContext;