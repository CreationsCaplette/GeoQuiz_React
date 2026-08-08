import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gameType: null,
    isLoading: false,
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
        setGameType(state, action) {
            state.gameType = action.payload;
        },
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
        setQuestions(state, action) {
            state.questions = action.payload || [];
            state.questionIndex = 0;
            state.isGameOver = false;
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