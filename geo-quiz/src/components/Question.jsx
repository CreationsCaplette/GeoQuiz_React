import Button from './Button.jsx';

export default function Question({ question, choices }) {
    return (
        <>
            <h2>{question}</h2>
            {choices.map((choice) => (
                <Button variant='game' key={question.question + '-' + choice}>{choice}</Button>
            ))}
        </>
    );
}