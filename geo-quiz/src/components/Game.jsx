import useHttp from "../hooks/useHttp";

import Question from './Question.jsx'
import Button from './Button.jsx';

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
            <ul id="question">
                {questionData.map((question) => (
                    <Question key={question.question} question={question.question} choices={question.choices} />
                ))}
            </ul >
        </>
    );
}