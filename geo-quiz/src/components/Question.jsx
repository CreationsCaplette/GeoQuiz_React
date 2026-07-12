import Button from './Button.jsx';

export default function Question({ questionData, onNext: onClick }) {
    return (
        <ul id="question">
            <h2>{questionData.question}</h2>
            {questionData.choices.map((choice) => (
                <Button
                    key={questionData.question + '-' + choice}
                    variant='game'
                    onClick={onClick}>
                    {choice}
                </Button>
            ))}
        </ul >
    );
}