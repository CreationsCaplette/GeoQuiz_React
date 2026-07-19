import arrowRight from "../assets/arrow_right.svg";

export default function NextQuestionButton({ onClick, isVisible }) {
    return (
        <button
            type="button"
            className={`next-question-button ${isVisible ? "" : "hidden"}`}
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