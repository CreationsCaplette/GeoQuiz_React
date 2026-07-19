import arrowRight from "../assets/arrow_right.svg";

export default function NextButton({ children, onClick }) {
    return (
        <button
            type="button"
            className={'previous-button'}
            onClick={onClick}
        >
            <img
                src={arrowRight}
                className="screen__image screen__image--arrow screen__image--arrow--mirrored"
                alt="Previous"
            />
            <span className="game-controls">{children}</span>
        </button>
    );
}