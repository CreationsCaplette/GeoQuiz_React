import { createContext, useCallback, useMemo, useReducer } from "react";
import useHttp from "../hooks/useHttp";

const initialState = {
    questionIndex: 0,
    score: 0,
    isGameOver: false,
    selectedChoice: null,
    hasAnswered: false,
};

function gameReducer(state, action) {
    switch (action.type) {
        case "NEXT": {
            const nextIndex = state.questionIndex + 1;
            return {
                ...state,
                questionIndex: nextIndex,
                isGameOver: nextIndex >= action.questionCount,
                selectedChoice: null,
                hasAnswered: false,
            };
        }
        case "ANSWER":
            return {
                ...state,
                selectedChoice: action.choice,
                hasAnswered: true,
                score: state.score + action.points,
            };
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
    selectedChoice: null,
    hasAnswered: false,
    handleAnswer: () => { },
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

    const handleAnswer = useCallback(
        (choice, timeLeft) => {
            const currentQuestion = questions?.[gameState.questionIndex];
            if (!currentQuestion) return;

            const isCorrect = currentQuestion.answer === choice;
            dispatch({
                type: "ANSWER",
                choice,
                points: isCorrect ? Math.ceil(timeLeft / 100) : 0
            });
        },
        [questions, gameState.questionIndex]
    );

    const goToNextQuestion = useCallback(
        () => {
            dispatch({
                type: "NEXT",
                questionCount: questions?.length ?? 0,
            })
        },
        [questions?.length]
    );

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
            selectedChoice: gameState.selectedChoice,
            hasAnswered: gameState.hasAnswered,
            handleAnswer,
            goToNextQuestion,
            resetGame,
        }),
        [
            questions,
            gameState.questionIndex,
            gameState.score,
            gameState.isGameOver,
            gameState.selectedChoice,
            gameState.hasAnswered,
            isLoading,
            error,
            handleAnswer,
            goToNextQuestion,
            resetGame,
        ]
    );

    return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}

export default GameContext;