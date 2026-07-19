import arrowRight from "../assets/arrow_right.svg";

export default function NextButton({ children, onClick, isVisible }) {
    return (
        <button
            type="button"
            className={`next-button ${isVisible ? "" : "hidden"}`}
            onClick={onClick}
        >
            <span className="game-controls">{children}</span>
            <img
                src={arrowRight}
                className="screen__image screen__image--arrow"
                alt="Next"
            />
        </button>
    );
}