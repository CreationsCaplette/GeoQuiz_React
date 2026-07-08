import useHttp from "../hooks/useHttp";

import GameQuestion from "./GameQuestion.jsx";
import GameButton from './GameButton.jsx';

const requestConfig = {};

export default function Game() {
    const {
        data: questionData,
        isLoading,
        error
    } = useHttp('https://localhost:7266/game/capitals', requestConfig, []);

    if (error) {
        return <Error title="Failed to fetch countries data" message={error} />;
    }

    if (isLoading) {
        return <p className="center">Fetching countries data...</p>
    }

    return (
        <>
            <ul id="data">
                {questionData.map((question) => (
                    <div key={question.question}>
                        <GameQuestion>{question.question}</GameQuestion>
                        {question.choices.map((choice) => (
                            <GameButton key={question.question + '-' + choice}>{choice}</GameButton>
                        ))}
                    </div>
                ))}
            </ul >
        </>
    );
}