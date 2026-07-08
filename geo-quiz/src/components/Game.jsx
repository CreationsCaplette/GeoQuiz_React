import useHttp from "../hooks/useHttp";

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
                        <p>{question.question}</p>
                        {question.choices.map((choice) => (
                            <div key={question.question + '-' + choice} >
                                <p>{choice}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </ul >
        </>
    );
}