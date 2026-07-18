import arrowRight from "../assets/arrow_right.svg";

export default function NextQuestionButton({ onClick, isVisible }) {
    if (!isVisible) return null;

    return (
        <button
            type="button"
            className="next-question-button"
            onClick={onClick}
        >
            <span className="game-controls">Next question</span>
            <img
                src={arrowRight}
                className="screen__image screen__image--arrow"
                alt="Next"
            />
        </button>
    );
}