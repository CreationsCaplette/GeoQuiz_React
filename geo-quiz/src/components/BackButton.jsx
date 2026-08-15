import { Link } from "react-router-dom";
import arrowRight from "../assets/arrow_right.svg";

export default function BackButton({ children, toLink, preventable = undefined }) {
    return (
        <Link
            className={'back-button'}
            to={toLink}
            onClick={(event) => {
                if (!preventable)
                    return;

                const confirmed = window.confirm('Leave this page?');

                if (!confirmed) {
                    event.preventDefault();
                }
            }}>
            <img
                src={arrowRight}
                className="screen__image screen__image--arrow screen__image--arrow--mirrored"
                alt="Back"
            />
            <span className="game-controls">{children}</span>
        </Link>
    );
}