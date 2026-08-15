import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gameType: null,
    isLoading: false,
    isLastQuestion: false,
    isGameOver: false,
    hasAnswered: false,
    error: null,
    questions: [],
    questionIndex: 0,
    score: 0,
    selectedChoice: null,
};

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        startGame(state, action) {
            const { gameType, questions } = action.payload;

            state.gameType = gameType;
            state.isLoading = false;
            state.isLastQuestion = false;
            state.isGameOver = false;
            state.hasAnswered = false;
            state.error = null;
            state.questions = questions;
            state.questionIndex = 0;
            state.score = 0;
            state.selectedChoice = null;
        },
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
        handleAnswer(state, action) {
            const { selectedChoice, remainingTimeMs } = action.payload || {};
            state.selectedChoice = selectedChoice ?? null;
            state.hasAnswered = true;

            const current = state.questions[state.questionIndex];
            const isCorrect = current && selectedChoice != null && current.answer === selectedChoice;
            if (isCorrect) {
                state.score += Math.ceil(remainingTimeMs / 100)
            }

        },
        goToNextQuestion(state) {
            const next = state.questionIndex + 1;
            state.questionIndex = next;
            state.isLastQuestion = next == state.questions?.length - 1;
            state.isGameOver = next >= (state.questions?.length || 0);
            state.hasAnswered = false;
            state.selectedChoice = null;
        },
        resetGame() {
            return initialState;
        }
    }
});

export const gameActions = gameSlice.actions;
export default gameSlice;